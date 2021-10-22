import styled from 'styled-components';

const handleAverageColor = (props) => {
  switch (true) {
    case props.children <= 2.5:
      return props.theme.colors.error;
    case props.children > 2.5 && props.children <= 4:
      return props.theme.colors.warning;
    case props.children > 4 && props.children <= 5:
      return props.theme.colors.success;
    default:
      return props.theme.colors.error;
  }
};

export const AverageBadge = styled.div`
  width: 34px;
  height: 34px;
  font-size: ${({ theme }) => theme.fontSize.m};
  background-color: ${(props) => handleAverageColor(props)};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
