// Chadson v69.0.0: Guerrilla Automotive Contact Section
// Purpose: Display contact information and a simple contact form.
// Refactored to integrate with the tab-based layout and shadcn/ui design system.

import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-start">
      <div>
        <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
        <p className="mb-4">
          Have a question or want a quote? Fill out the form and we'll get back to you as soon as possible.
        </p>
        <div className="space-y-2">
          <div>
            <p className="font-bold">Phone:</p>
            <a href="tel:+17377472233" className="text-blue-500 hover:underline">+1-737-747-2233</a>
          </div>
          <div>
            <p className="font-bold">Email:</p>
            <a href="mailto:inquiries@guerrilla.sh" className="text-blue-500 hover:underline">inquiries@guerrilla.sh</a>
          </div>
        </div>
      </div>
      <form className="space-y-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Your Name" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Your Email" />
        </div>
        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" placeholder="Your message..." />
        </div>
        <Button type="submit">Send Message</Button>
      </form>
    </div>
  );
}