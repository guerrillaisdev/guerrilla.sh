// Chadson v69.0.0: Root layout for Guerrilla Automotive
// This file defines the main HTML structure and includes the Header and Footer.

import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Guerrilla Automotive | Performance Tuning & Deletes",
  description: "Expert remote and mobile tuning services for performance and efficiency. Serving Austin, TX and beyond.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutomotiveBusiness',
    name: 'Guerrilla Automotive LLC',
    url: 'https://guerrilla.sh',
    telephone: '+1-737-747-2233',
    email: 'inquiries@guerrilla.sh',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Austin',
      addressRegion: 'TX',
      addressCountry: 'US',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Austin'
      },
       {
        '@type': 'State',
        name: 'Texas'
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
