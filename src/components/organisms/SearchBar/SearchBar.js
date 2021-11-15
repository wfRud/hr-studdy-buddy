import { useState, useEffect } from 'react';
import { SearchBarWrapper, StatusInfo, SearchInput, SearchInputWrapper } from './SearchBar.style';
import { ResultList } from '../ResultList/ResultList';
import axios from 'axios';

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchInput = (e) => setSearchValue(e.target.value);

  useEffect(() => {
    axios
      .post('/students', { searchPhrase: searchValue })
      .then(({ data }) => {
        console.log(data);
        setSearchResults(data.students);
      })
      .catch((err) => console.log(err));
  }, [searchValue]);

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <SearchInputWrapper>
        <SearchInput value={searchValue} onChange={handleSearchInput} />
        {searchResults && searchResults.length ? <ResultList data={searchResults} /> : null}
      </SearchInputWrapper>
    </SearchBarWrapper>
  );
};
