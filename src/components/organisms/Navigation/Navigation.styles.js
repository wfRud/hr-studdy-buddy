import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.nav`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  min-width: 110px;
  height: 100vh;
  border-right: 1px solid #dfe2e8;
  padding-top: 19px;
`;

export const Wrapper = styled.div`
  flex: 2 0 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding: 60px 20px 0 0;
  width: 100%;
  height: 100%;
  max-height: 220px;
`;

export const StyledLink = styled(NavLink)`
  position: relative;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 700;
  text-decoration: none;

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    right: -20px;
    transform: translateY(-50%);
    height: 3px;
    width: 10px;
    background-color: ${({ theme }) => theme.colors.darkGrey};
    opacity: 0;
    transition: opacity 0.3s ease-in;
  }

  &:hover,
  &.active {
    &:after {
      opacity: 1;
    }
  }
`;
