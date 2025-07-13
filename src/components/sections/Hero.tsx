// Chadson v69.0.0: Guerrilla Automotive Hero Section
// Purpose: Display the main headline and a brief description of the business.
// This component is designed to be the primary view when the page loads.
// Refactored to align with shadcn/ui design system and new tab-based layout.

import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";


export default function Hero() {
  return (
    <Card className="w-full border-0 shadow-none">
        <CardHeader className="text-center">
            <CardTitle className="text-4xl md:text-5xl font-bold">Guerrilla Automotive</CardTitle>
            <CardDescription className="text-lg md:text-xl">
                Mobile & Remote Performance Tuning in Austin, TX
            </CardDescription>
        </CardHeader>
    </Card>
  );
}