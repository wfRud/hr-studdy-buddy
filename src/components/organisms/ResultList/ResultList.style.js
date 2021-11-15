import styled from 'styled-components';

export const ResultListWrapper = styled.ul`
  position: absolute;
  top: 22px;
  right: 0;
  width: 100%;
  max-width: 350px;
  height: auto;
  max-height: 200px;
  margin: 0;
  padding: 22px 8px 5px 16px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.lightPurple};
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 0 0 25px 25px;
  list-style: none;
  z-index: 2;
  overflow-y: scroll;
`;

export const ResultItem = styled.li`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 700;
  margin: 0 0 2px 0;
`;
