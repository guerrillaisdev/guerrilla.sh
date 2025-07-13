// Chadson v69.0.0: Guerrilla Automotive Contact Section
// This component will display a contact form, contact details, and a map.

import React from 'react';

export default function Contact() {
  return (
    <section className="bg-gray-100 p-20">
      <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
          <p className="mb-4">
            Have a question or want a quote? Fill out the form below and we'll get back to you as soon as possible.
          </p>
          <p className="font-bold">Phone:</p>
          <p className="mb-4">+1-737-747-2233</p>
          <p className="font-bold">Email:</p>
          <p>inquiries@guerrilla.sh</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">Service Area</h3>
          <div className="bg-gray-300 h-64 rounded-lg">
            {/* TODO: Embed Google Map */}
            <p className="text-center p-4">Map of Austin, TX and surrounding suburbs will be here.</p>
          </div>
        </div>
      </div>
    </section>
  );
}