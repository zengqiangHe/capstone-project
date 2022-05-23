import { render, screen } from '@testing-library/react';
import HomePageTabs from './HomePageTabs';
import { MemoryRouter } from 'react-router-dom';

describe('HomePageTabs', () => {
  it('renders a navigation with one link', () => {
    render(
      <MemoryRouter>
        <HomePageTabs />
      </MemoryRouter>
    );

    const links = screen.getAllByRole('link');

    expect(links).toHaveLength(2);
  });
});
