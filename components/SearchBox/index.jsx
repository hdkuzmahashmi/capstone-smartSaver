import Fuse from "fuse.js";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { StyledLink } from "@/design-system/StyledLink";
import {
  StyledSearchBox,
  StyledSearchIcon,
  StyledSearchInput,
  StyledSearchOutput,
} from "@/design-system/StyledSearchBox";

const fuseOptions = {
  shouldSort: true,
  minMatchCharLength: 1,
  threshold: 0.3,
  keys: ["description", "name", "amount"],
};

function SearchBox() {
  const { data, isLoading, error } = useSWR(`/api/expenses/`);
  const [results, setResults] = useState([]);
  const [fuse, setFuse] = useState(null);
  const [resultsVisible, setResultsVisible] = useState(false);

  useEffect(() => {
    if (data) {
      setFuse(new Fuse(data, fuseOptions));
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
    setResults(searchResult.map((result) => result.item));
  }

  return (
    <StyledSearchBox>
      <StyledSearchInput
        type="text"
        id="search"
        placeholder="SEARCH"
        onChange={handleSearch}
        onFocus={() => setResultsVisible(true)}
        onBlur={() => setResultsVisible(false)}
      />

      <StyledSearchIcon icon="material-symbols:search" width="24px" />
      <StyledSearchOutput className={resultsVisible ? "show" : ""}>
        {results.map((result) => (
          <StyledLink href={`/expense/${result._id}`} key={result._id}>
            <li>{result.name}</li>
          </StyledLink>
        ))}
      </StyledSearchOutput>
    </StyledSearchBox>
  );
}

export default SearchBox;
