// Chadson v69.0.0: Unit tests for the Hero component.

import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from '../Hero';

describe('Hero', () => {
  it('renders the main headline', () => {
    render(<Hero />);
    const headline = screen.getByText(/Unleash Your Vehicle's True Potential/i);
    expect(headline).toBeInTheDocument();
  });

  it('renders the subheading', () => {
    render(<Hero />);
    const subheading = screen.getByText(/Professional remote and mobile tuning for performance, deletes, and more./i);
    expect(subheading).toBeInTheDocument();
  });

  it('renders the call-to-action button', () => {
    render(<Hero />);
    const button = screen.getByRole('button', { name: /Get a Free Quote/i });
    expect(button).toBeInTheDocument();
  });
});