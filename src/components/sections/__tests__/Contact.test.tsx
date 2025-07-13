// Chadson v69.0.0: Unit tests for the Contact component.
// Updated to reflect the refactoring with shadcn/ui components and a contact form.

import React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from '../Contact';

describe('Contact', () => {
  beforeEach(() => {
    render(<Contact />);
  });

  it('renders the "Get in Touch" headline', () => {
    const headline = screen.getByRole('heading', { name: /Get in Touch/i, level: 3 });
    expect(headline).toBeInTheDocument();
  });

  it('renders the phone number as a link', () => {
    const phoneLink = screen.getByRole('link', { name: /\+1-737-747-2233/i });
    expect(phoneLink).toBeInTheDocument();
    expect(phoneLink).toHaveAttribute('href', 'tel:+17377472233');
  });

  it('renders the email address as a link', () => {
    const emailLink = screen.getByRole('link', { name: /inquiries@guerrilla.sh/i });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute('href', 'mailto:inquiries@guerrilla.sh');
  });

  it('renders the contact form with all fields', () => {
    // Check for form labels and corresponding inputs
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Your Name/i)).toBeInTheDocument();

    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Your Email/i)).toBeInTheDocument();

    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Your message.../i)).toBeInTheDocument();

    // Check for the submit button
    const button = screen.getByRole('button', { name: /Send Message/i });
    expect(button).toBeInTheDocument();
  });
});