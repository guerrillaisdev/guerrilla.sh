/**
 * CHADSON v69.0.0
 *
 * File: src/components/__tests__/Navbar.test.tsx
 *
 * Purpose: This file contains tests for the Navbar component.
 * It verifies that the navigation links are rendered correctly.
 *
 *
 * Project: guerrilla.sh
 *
 *
 * Annotations:
 *
 * - `jest.mock('next-intl')`: Mocks the `next-intl` library to provide a mock `useTranslations` hook.
 * - `jest.mock('next-auth/react')`: Mocks `next-auth/react` to control the session state for testing.
 * - `describe('Navbar', ...)`: A test suite for the Navbar component.
 * - `it('renders navigation links', ...)`: A test case to check for the presence of navigation links.
 *
 */
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '../Navbar';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useTranslations } from 'next-intl';

// Mock the next-intl library
jest.mock('next-intl', () => ({
  useTranslations: jest.fn(),
}));

// Mock the next-auth/react library
jest.mock('next-auth/react', () => ({
  ...jest.requireActual('next-auth/react'),
  useSession: jest.fn(),
  signIn: jest.fn(),
  signOut: jest.fn(),
}));

describe('Navbar', () => {
  const mockUseTranslations = useTranslations as jest.Mock;
  const mockUseSession = useSession as jest.Mock;

  beforeEach(() => {
    // Reset mocks before each test
    mockUseTranslations.mockReturnValue((key: string) => key);
    mockUseSession.mockReturnValue({ data: null });
  });

  it('renders navigation links', () => {
    render(<Navbar />);

    expect(screen.getByText('home')).toBeInTheDocument();
    expect(screen.getByText('blog')).toBeInTheDocument();
    expect(screen.getByText('contact')).toBeInTheDocument();
    expect(screen.getByText('products')).toBeInTheDocument();
    expect(screen.getByText('tuning')).toBeInTheDocument();
  });

  it('shows Sign In button when not authenticated', () => {
    render(<Navbar />);
    expect(screen.getByText('Sign In')).toBeInTheDocument();
  });

  it('shows Sign Out button when authenticated', () => {
    mockUseSession.mockReturnValue({ data: { user: { name: 'Test User' } } });
    render(<Navbar />);
    expect(screen.getByText('Sign Out')).toBeInTheDocument();
  });
  it('calls signIn when Sign In button is clicked', () => {
    render(<Navbar />);
    fireEvent.click(screen.getByText('Sign In'));
    expect(signIn).toHaveBeenCalled();
  });

  it('calls signOut when Sign Out button is clicked', () => {
    mockUseSession.mockReturnValue({ data: { user: { name: 'Test User' } } });
    render(<Navbar />);
    fireEvent.click(screen.getByText('Sign Out'));
    expect(signOut).toHaveBeenCalled();
  });
});