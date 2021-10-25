import '@testing-library/jest-dom';
import { useState } from 'react';
import { screen, fireEvent } from '@testing-library/react';
import FormField from './FormField';
import { renderWithThemeProviders } from 'helpers/renderWithThemeProvider';

describe('Input With Button', () => {
  it('Renders the component', () => {
    renderWithThemeProviders(<FormField label="name" name="name" id="id" />);
  });
});
