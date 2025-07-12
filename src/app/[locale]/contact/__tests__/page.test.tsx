/**
 * CHADSON v69.0.0
 *
 * File: src/app/[locale]/contact/__tests__/page.test.tsx
 *
 * Purpose: This file contains tests for the Contact page.
 *
 *
 * Project: guerrilla.sh
 *
 */
import { render, screen } from '@testing-library/react';
import Contact from '../page';
import { useTranslations } from 'next-intl';

// Mock the next-intl library
jest.mock('next-intl', () => ({
  useTranslations: jest.fn(),
}));

describe('Contact Page', () => {
  const mockUseTranslations = useTranslations as jest.Mock;

  beforeEach(() => {
    // Reset mocks before each test
    mockUseTranslations.mockImplementation((namespace) => (key: string) => `${namespace}.${key}`);
  });

  it('renders the main heading and intro', () => {
    render(<Contact />);
    expect(screen.getByText('Contact.title')).toBeInTheDocument();
    expect(screen.getByText('Contact.intro')).toBeInTheDocument();
  });

  it('renders contact information', () => {
    render(<Contact />);
    expect(screen.getByText('Contact.phone')).toBeInTheDocument();
    expect(screen.getByText('Contact.email')).toBeInTheDocument();
  });

  it('renders the contact form', () => {
    render(<Contact />);
    expect(screen.getByLabelText('Contact.form.name')).toBeInTheDocument();
    expect(screen.getByLabelText('Contact.form.email')).toBeInTheDocument();
    expect(screen.getByLabelText('Contact.form.message')).toBeInTheDocument();
    expect(screen.getByText('Contact.form.submit')).toBeInTheDocument();
  });
});