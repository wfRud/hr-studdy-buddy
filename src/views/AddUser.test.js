import '@testing-library/jest-dom';
import { useState } from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithThemeProviders } from 'helpers/renderWithThemeProvider';
import AddUser from './AddUser';
import Dashboard from './Dashboard';

describe('Input With Button', () => {
  it('Renders the component', () => {
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
    screen.getByText('Roman Romanov');
  });
});
