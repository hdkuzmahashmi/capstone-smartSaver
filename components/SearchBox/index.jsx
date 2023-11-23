import Fuse from "fuse.js";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { StyledLink } from "@/design-system/StyledLink";
import {
  StyledSearchBox,
  StyledSearchIcon,
  StyledSearchInput,
} from "@/design-system/StyledSearchBox";

/*
This example uses Fuse.js as a fuzzy search
See the docs for more information: https://www.fusejs.io/
*/

const fuseOptions = {
  // isCaseSensitive: false,
  // includeScore: false,
  // shouldSort: true,
  // includeMatches: false,
  // findAllMatches: false,
  // minMatchCharLength: 1,
  // location: 0,
  threshold: 0.3,
  // distance: 100,
  // useExtendedSearch: false,
  // ignoreLocation: false,
  // ignoreFieldNorm: false,
  // fieldNormWeight: 1,
  keys: ["name"],
};

function SearchBox() {
  const { data, isLoading, error } = useSWR(`/api/expenses/`);
  const [results, setResults] = useState([]);
  const [fuse, setFuse] = useState(null);

  useEffect(() => {
    if (data) {
      const expenseItems = data.map(({ name, _id, description }) => ({
        name,
        _id,
        description,
      }));
      setFuse(new Fuse(expenseItems, fuseOptions));
    }
  }, [data]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (!data) {
    return;
  }
  if (error) {
    setToast(
      true,
      "Something went wrong, API does not response data. Please contact to application administrator.",
      "error"
    );
    return;
  }

  function handleSearch(event) {
    if (!fuse) {
      return;
    }

    const searchPattern = event.target.value;
    const searchResult = fuse.search(searchPattern).slice(0, 10);
    setResults(searchResult.map((result) => result.item.name));
  }

  return (
    <div>
      <StyledSearchBox>
        {/* <label htmlFor="search">Search</label> */}
        <StyledSearchInput
          type="text"
          id="search"
          placeholder="SEARCH"
          onChange={handleSearch}
        />
        <StyledSearchIcon icon="material-symbols:search" width="24px" />
      </StyledSearchBox>
      <ul>
        {results.map(
          (result) => (
            console.log("results", results),
            (
              <StyledLink key={result._id} href={`/expense/${result._id}`}>
                <li>{result}</li>
              </StyledLink>
            )
          )
        )}
      </ul>
    </div>
  );
}

export default SearchBox;
