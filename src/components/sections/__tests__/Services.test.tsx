// Chadson v69.0.0: Unit tests for the Services component.

import React from 'react';
import { render, screen } from '@testing-library/react';
import Services from '../Services';

describe('Services', () => {
  it('renders the main headline', () => {
    render(<Services />);
    const headline = screen.getByRole('heading', { name: /Our Services/i, level: 2 });
    expect(headline).toBeInTheDocument();
  });

  it('renders all service titles', () => {
    render(<Services />);
    const ecuRemapping = screen.getByRole('heading', { name: /ECU Remapping/i, level: 3 });
    const forcedInduction = screen.getByRole('heading', { name: /Forced Induction Upgrades/i, level: 3 });
    const exhaustSystems = screen.getByRole('heading', { name: /Performance Exhaust Systems/i, level: 3 });
    const suspensionTuning = screen.getByRole('heading', { name: /Suspension Tuning/i, level: 3 });

    expect(ecuRemapping).toBeInTheDocument();
    expect(forcedInduction).toBeInTheDocument();
    expect(exhaustSystems).toBeInTheDocument();
    expect(suspensionTuning).toBeInTheDocument();
  });
});