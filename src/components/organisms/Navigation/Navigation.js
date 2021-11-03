import { Container, Wrapper, StyledLink } from './Navigation.styles';
import { Logo } from 'components/atoms/Logo/Logo';

const Navigation = () => (
  <Container>
    <Logo>Study Buddy</Logo>
    <Wrapper>
      <StyledLink to="/group" exact>
        Dashboard
      </StyledLink>
      <StyledLink to="/add-user">Add User</StyledLink>
      <StyledLink to="/settings">Settings</StyledLink>
      <StyledLink to="/logout">Logout</StyledLink>
    </Wrapper>
  </Container>
);

export default Navigation;
