import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.lightGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
