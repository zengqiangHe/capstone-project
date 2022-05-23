import { render, screen } from '@testing-library/react';
import Header from './Header';

const title = 'BockWurst';

describe('Header', () => {
  it('renders a title', () => {
    render(<Header title={title} />);

    const headerTitle = screen.getByRole('heading', { name: /BockWurst/i });
    expect(headerTitle).toBeInTheDocument();
  });
});
