import styled from 'styled-components';

export const Logo = styled.div`
  flex: 1 0 80px;
  width: 100%;
  max-width: 110px;
  height: 100%;
  max-height: 60px;
  padding: 13px 15px 13px 44px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  color: ${({ theme }) => theme.colors.white};
  font-size: 15px;
  font-weight: 700;
  text-align: right;
`;
