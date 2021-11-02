import styled from 'styled-components';

export const Wrapper = styled.div`
  grid-row: 2/3;
  grid-column: 2/3;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
