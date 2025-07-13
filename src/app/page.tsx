// Chadson v69.0.0: Initializing Guerrilla Automotive Business Profile
// This is the main page for the application. It will be built out with components.

import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Contact />
    </main>
  );
}
