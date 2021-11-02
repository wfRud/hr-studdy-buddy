import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { screen } from '@testing-library/react';
import { NewsSection, query } from './NewsSection';
import { renderWithThemeProviders } from 'helpers/renderWithThemeProvider';

const mock = new MockAdapter(axios);

describe('News Section', () => {
  afterEach(() => {
    mock.reset();
  });

  it('displays error when the articles are not loaded correctly', async () => {
    mock.onPost('https://graphql.datocms.com/', { query }).reply(500);
    renderWithThemeProviders(<NewsSection />);
    await screen.findByText(/Sorry/);
  });

  it('Displays the articles', async () => {
    mock.onPost('https://graphql.datocms.com/', { query }).reply(200, {
      data: {
        allArticles: [{ id: 1, title: 'Test', category: 'Test', content: 'Test' }],
      },
    });
    renderWithThemeProviders(<NewsSection />);
    await screen.findAllByText(/Test/);
  });
});
