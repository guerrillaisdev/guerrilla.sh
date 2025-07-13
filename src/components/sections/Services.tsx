// Chadson v69.0.0: Guerrilla Automotive Services Section
// This component details the tuning services offered, optimized for SEO.

import React from 'react';

export default function Services() {
  return (
    <section className="p-20">
      <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-6 shadow-lg rounded-lg">
          <h3 className="text-2xl font-bold mb-2">ECU Remapping</h3>
          <p>
            Unlock the hidden power of your engine with our expert ECU remapping services. We fine-tune your vehicle's engine control unit to optimize fuel-to-air ratios, ignition timing, and boost pressure, resulting in significant gains in horsepower and torque. Perfect for models like the Subaru WRX, Mitsubishi Lancer Evolution, and Volkswagen GTI.
          </p>
        </div>
        <div className="p-6 shadow-lg rounded-lg">
          <h3 className="text-2xl font-bold mb-2">Forced Induction Upgrades</h3>
          <p>
            Ready for a serious power boost? We specialize in turbocharger and supercharger installations and upgrades. Whether you're looking to add a turbo to a naturally aspirated engine or upgrade your stock turbo for more power, we have a solution for you. Popular with Nissan 240SX, Toyota Supra, and Ford Mustang owners.
          </p>
        </div>
        <div className="p-6 shadow-lg rounded-lg">
          <h3 className="text-2xl font-bold mb-2">Performance Exhaust Systems</h3>
          <p>
            Improve your engine's breathing with a high-flow performance exhaust system. A less restrictive exhaust reduces back pressure, allowing your engine to produce more power and sound great while doing it. We offer solutions for a wide range of vehicles, including the Honda Civic, BMW 3-Series, and Audi S4.
          </p>
        </div>
        <div className="p-6 shadow-lg rounded-lg">
          <h3 className="text-2xl font-bold mb-2">Suspension Tuning</h3>
          <p>
            Enhance your car's handling and stability with our suspension tuning services. From coilovers to sway bars, we can help you achieve the perfect balance of comfort and performance for the street or the track. A must-have for any serious driving enthusiast.
          </p>
        </div>
      </div>
    </section>
  );
}