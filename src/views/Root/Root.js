import React from 'react';
import Dashboard from 'views/Dashboard';
import AddUser from 'views/AddUser';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import UsersProvider from 'providers/UsersProvider';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'assets/styles/globalStyles';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <MainTemplate>
          <UsersProvider>
            <Wrapper>
              <Switch>
                <Route path="/add-user">
                  <AddUser />
                </Route>
                <Route path="/">
                  <Dashboard />
                </Route>
              </Switch>
            </Wrapper>
          </UsersProvider>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
