// Chadson v69.0.0: Unit tests for the Header component.

import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {
  it('renders the business name', () => {
    render(<Header />);
    const businessName = screen.getByText(/Guerrilla Automotive LLC/i);
    expect(businessName).toBeInTheDocument();
  });

  it('renders the phone number', () => {
    render(<Header />);
    const phoneNumber = screen.getByText(/\+1-737-747-2233/i);
    expect(phoneNumber).toBeInTheDocument();
  });

  it('renders the email address', () => {
    render(<Header />);
    const emailAddress = screen.getByText(/inquiries@guerrilla.sh/i);
    expect(emailAddress).toBeInTheDocument();
  });
});