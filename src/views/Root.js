import { ThemeProvider } from 'styled-components';
import UsersList from 'components/organisms/UsersList/UsersList';
import GlobalStyle from 'assets/styles/globalStyles';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';

const Root = () => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <UsersList />
      </Wrapper>
    </ThemeProvider>
  </>
);

export default Root;
