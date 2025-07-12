/**
 * CHADSON v69.0.0
 *
 * File: src/app/[locale]/__tests__/page.test.tsx
 *
 * Purpose: This file contains tests for the Home page.
 *
 *
 * Project: guerrilla.sh
 *
 */
import { render, screen } from '@testing-library/react';
import Home from '../page';
import { useTranslations } from 'next-intl';

// Mock the next-intl library
jest.mock('next-intl', () => ({
  useTranslations: jest.fn(),
}));

describe('Home Page', () => {
  const mockUseTranslations = useTranslations as jest.Mock;

  beforeEach(() => {
    // Reset mocks before each test
    mockUseTranslations.mockImplementation((namespace) => (key: string) => `${namespace}.${key}`);
  });

  it('renders the main heading and subtitle', () => {
    render(<Home />);
    expect(screen.getByText('Home.title')).toBeInTheDocument();
    expect(screen.getByText('Home.subtitle')).toBeInTheDocument();
  });

  it('renders the services section', () => {
    render(<Home />);
    expect(screen.getByText('Home.servicesTitle')).toBeInTheDocument();
    expect(screen.getByText('Home.services.remoteTuning')).toBeInTheDocument();
    expect(screen.getByText('Home.services.remoteTuningDesc')).toBeInTheDocument();
    expect(screen.getByText('Home.services.hardware')).toBeInTheDocument();
    expect(screen.getByText('Home.services.hardwareDesc')).toBeInTheDocument();
  });

  it('renders the why choose us section', () => {
    render(<Home />);
    expect(screen.getByText('Home.whyUsTitle')).toBeInTheDocument();
    expect(screen.getByText('Home.whyUs.expertise')).toBeInTheDocument();
    expect(screen.getByText('Home.whyUs.expertiseDesc')).toBeInTheDocument();
    expect(screen.getByText('Home.whyUs.p2p')).toBeInTheDocument();
    expect(screen.getByText('Home.whyUs.p2pDesc')).toBeInTheDocument();
    expect(screen.getByText('Home.whyUs.community')).toBeInTheDocument();
    expect(screen.getByText('Home.whyUs.communityDesc')).toBeInTheDocument();
  });

  it('renders the call to action section', () => {
    render(<Home />);
    expect(screen.getByText('Home.cta')).toBeInTheDocument();
    expect(screen.getByText('Home.ctaButton')).toBeInTheDocument();
  });
});