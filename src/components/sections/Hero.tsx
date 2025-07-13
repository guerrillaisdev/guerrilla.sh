// Chadson v69.0.0: Guerrilla Automotive Hero Section
// This component will feature a compelling headline and a strong call-to-action.

import React from 'react';

export default function Hero() {
  return (
    <section className="bg-gray-800 text-white text-center p-20">
      <h1 className="text-5xl font-bold mb-4">Unleash Your Vehicle's True Potential</h1>
      <p className="text-xl mb-8">
        Professional remote and mobile tuning for performance, deletes, and more.
      </p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Get a Free Quote
      </button>
    </section>
  );
}