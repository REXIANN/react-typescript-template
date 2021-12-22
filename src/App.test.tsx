import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('renders learn react link', () => {
  it('basic test', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    // TODO: fix toBeInTheDocument problem in test files
    // expect(linkElement).toBeInTheDocument();
  })
});
