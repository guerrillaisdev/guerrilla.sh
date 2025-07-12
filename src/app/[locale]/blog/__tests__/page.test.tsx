/**
 * CHADSON v69.0.0
 *
 * File: src/app/[locale]/blog/__tests__/page.test.tsx
 *
 * Purpose: This file contains tests for the Blog page.
 *
 *
 * Project: guerrilla.sh
 *
 */
import { render, screen } from '@testing-library/react';
import Blog from '../page';
import { useTranslations } from 'next-intl';

// Mock the next-intl library
jest.mock('next-intl', () => ({
  useTranslations: jest.fn(),
}));

describe('Blog Page', () => {
  const mockUseTranslations = useTranslations as jest.Mock;

  beforeEach(() => {
    // Reset mocks before each test
    mockUseTranslations.mockImplementation((namespace) => (key: string) => `${namespace}.${key}`);
  });

  it('renders the main heading and subtitle', () => {
    render(<Blog />);
    expect(screen.getByText('Blog.title')).toBeInTheDocument();
    expect(screen.getByText('Blog.subtitle')).toBeInTheDocument();
  });

  it('renders the placeholder blog posts', () => {
    render(<Blog />);
    expect(screen.getByText('The Art of E-Tuning: How We Deliver Power Safely')).toBeInTheDocument();
    expect(screen.getByText('A deep dive into our remote tuning process and the technology that makes it possible to achieve significant power gains while maintaining engine safety and reliability.')).toBeInTheDocument();
    expect(screen.getByText('Why the Tactrix Openport 2.0 is Our Go-To Cable')).toBeInTheDocument();
    expect(screen.getByText('An overview of the Tactrix Openport 2.0, its features, and why it has become the industry standard for reliable vehicle communication during tuning.')).toBeInTheDocument();
    expect(screen.getByText('Case Study: 100hp Gain on a Stage 2 Subaru WRX')).toBeInTheDocument();
    expect(screen.getByText('Follow along as we take a customer\'s lightly modified Subaru WRX and unlock an additional 100 horsepower through a custom remote e-tune.')).toBeInTheDocument();
  });
});