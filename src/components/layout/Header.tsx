// Chadson v69.0.0: Guerrilla Automotive Header Component
// This component displays the business name, navigation, and contact information.

import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <div>
        <Link href="/" className="text-2xl font-bold">
          Guerrilla Automotive LLC
        </Link>
      </div>
      <nav>
        {/* TODO: Implement navigation links */}
        <span className="mr-4">Home</span>
        <span className="mr-4">Services</span>
        <span>Contact</span>
      </nav>
      <div className="text-right">
        <p>+1-737-747-2233</p>
        <p>inquiries@guerrilla.sh</p>
      </div>
    </header>
  );
}