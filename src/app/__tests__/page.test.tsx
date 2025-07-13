// Chadson v69.0.0: Unit and integration tests for the main Home page.
// This file tests the new tab-based layout and the integration of the Hero, Services, and Contact components.

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '../page';

// Mock the components to isolate the page layout testing
jest.mock('@/components/sections/Hero', () => () => <div>Mock Hero</div>);
jest.mock('@/components/sections/Services', () => () => <div>Mock Services</div>);
jest.mock('@/components/sections/Contact', () => () => <div>Mock Contact</div>);

describe('Home Page', () => {
  beforeEach(() => {
    render(<Home />);
  });

  it('renders the Hero component', () => {
    expect(screen.getByText('Mock Hero')).toBeInTheDocument();
  });

  it('renders the tabs with "Services" and "Contact" triggers', () => {
    expect(screen.getByRole('tab', { name: 'Services' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Contact' })).toBeInTheDocument();
  });

  it('shows the Services content by default', () => {
    expect(screen.getByText('Mock Services')).toBeInTheDocument();
    expect(screen.queryByText('Mock Contact')).not.toBeInTheDocument();
  });

  it('shows the Contact content when the Contact tab is clicked', async () => {
    const user = userEvent.setup();
    const contactTab = screen.getByRole('tab', { name: 'Contact' });

    await user.click(contactTab);

    expect(screen.getByText('Mock Contact')).toBeInTheDocument();
    expect(screen.queryByText('Mock Services')).not.toBeInTheDocument();
  });

  it('switches back to the Services content when the Services tab is clicked again', async () => {
    const user = userEvent.setup();
    const contactTab = screen.getByRole('tab', { name: 'Contact' });
    const servicesTab = screen.getByRole('tab', { name: 'Services' });

    // First, switch to Contact
    await user.click(contactTab);
    expect(screen.getByText('Mock Contact')).toBeInTheDocument();

    // Then, switch back to Services
    await user.click(servicesTab);
    expect(screen.getByText('Mock Services')).toBeInTheDocument();
    expect(screen.queryByText('Mock Contact')).not.toBeInTheDocument();
  });
});