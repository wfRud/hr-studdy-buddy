import styled from 'styled-components';

export const StyledDeleteButton = styled.button`
  width: 25px;
  height: 25px;
  background-color: ${(props) => props.theme.colors.grey};
  color: white;
  border: none;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
    height: 100%;
  }
`;
