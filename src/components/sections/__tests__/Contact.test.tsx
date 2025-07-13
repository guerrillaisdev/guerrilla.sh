// Chadson v69.0.0: Unit tests for the Contact component.

import React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from '../Contact';

describe('Contact', () => {
  it('renders the main headline', () => {
    render(<Contact />);
    const headline = screen.getByRole('heading', { name: /Contact Us/i, level: 2 });
    expect(headline).toBeInTheDocument();
  });

  it('renders the phone number', () => {
    render(<Contact />);
    const phoneNumber = screen.getByText(/\+1-737-747-2233/i);
    expect(phoneNumber).toBeInTheDocument();
  });

  it('renders the email address', () => {
    render(<Contact />);
    const emailAddress = screen.getByText(/inquiries@guerrilla.sh/i);
    expect(emailAddress).toBeInTheDocument();
  });

  it('renders the map placeholder', () => {
    render(<Contact />);
    const mapPlaceholder = screen.getByText(/Map of Austin, TX and surrounding suburbs will be here./i);
    expect(mapPlaceholder).toBeInTheDocument();
  });
});