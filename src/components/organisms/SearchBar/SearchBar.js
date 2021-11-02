import { SearchBarWrapper, StatusInfo } from './SearchBar.style';
import { Input } from 'components/atoms/Input/Input';

export const SearchBar = () => (
  <SearchBarWrapper>
    <StatusInfo>
      <p>Logged as:</p>
      <p>
        <strong>Teacher</strong>
      </p>
    </StatusInfo>
    <Input />
  </SearchBarWrapper>
);
