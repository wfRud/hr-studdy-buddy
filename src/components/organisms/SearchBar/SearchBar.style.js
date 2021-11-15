import styled from 'styled-components';
import { Input } from 'components/atoms/Input/Input';

export const SearchBarWrapper = styled.div`
  grid-row: 1/2;
  grid-column: 2/3;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 40px;
`;

export const SearchInput = styled(Input)`
  position: relative;
  font-size: ${({ theme }) => theme.fontSize.xl};
  width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.lightPurple};
  z-index: 3;
`;

export const StatusInfo = styled.div`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-right: 40px;

  p {
    margin: 5px;
  }
`;

export const SearchInputWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 350px;
`;
