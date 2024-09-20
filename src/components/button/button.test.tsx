import { render, screen } from '@testing-library/react';
import Button from './button';

describe('App', () => {
  it('renders App component', () => {
    render(<Button>click</Button>);
    expect(screen.getByText('click')).toBeInTheDocument();
  });
});