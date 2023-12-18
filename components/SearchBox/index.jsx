import Fuse from "fuse.js";
import { useEffect, useState } from "react";
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

function SearchBox({ data }) {
  const [results, setResults] = useState([]);
  const [fuse, setFuse] = useState(null);

  const [resultsVisible, setResultsVisible] = useState(false);

  useEffect(() => {
    if (data) {
      setFuse(new Fuse(data, fuseOptions));
    }
  }, [data]);

  if (!data) {
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
        autoComplete="off"
      />

      <StyledSearchIcon icon="material-symbols:search" width="24px" />
      <StyledSearchOutput $isDisplayed={resultsVisible}>
        {results.map((result) => (
          <li key={result._id}>
            <StyledLink href={`/expense/${result._id}`}>
              {result.name}
            </StyledLink>
          </li>
        ))}
      </StyledSearchOutput>
    </StyledSearchBox>
  );
}

export default SearchBox;
