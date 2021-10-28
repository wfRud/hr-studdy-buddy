import '@testing-library/jest-dom';
import FormField from './FormField';
import { renderWithThemeProviders } from 'helpers/renderWithThemeProvider';

describe('Input With Button', () => {
  it('Renders the component', () => {
    renderWithThemeProviders(<FormField label="name" name="name" id="id" />);
  });
});
