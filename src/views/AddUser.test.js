import '@testing-library/jest-dom';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithThemeProviders } from 'helpers/renderWithThemeProvider';
import AddUser from './AddUser';
import Dashboard from './Dashboard';

describe('Input With Button', () => {
  it('Adds new user to the list', () => {
    renderWithThemeProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );
    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Roman Romanov' } });
    fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '55%' } });
    fireEvent.change(screen.getByTestId('Average'), { target: { value: '4.5' } });
    fireEvent.click(screen.getByTestId('Consent'));
    fireEvent.click(screen.getByText('Add'));
    screen.getByText('Roman Romanov');
  });

  it('Prevents adding new user if the consent is not checked', () => {
    renderWithThemeProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );
    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Roman Romanov' } });
    fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '55%' } });
    fireEvent.change(screen.getByTestId('Average'), { target: { value: '4.5' } });
    fireEvent.click(screen.getByText('Add'));
    const newUser = screen.queryByText('Roman Romanov');
    expect(newUser).not.toBeInTheDocument();
  });
});
