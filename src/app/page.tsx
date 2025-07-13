"use client";

// Chadson v69.0.0: Guerrilla Automotive Business Profile
// Main page with a responsive layout: tabs on mobile, single page on desktop.
// Now with animations from framer-motion.

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="container mx-auto p-4 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
      </motion.div>
      
      {/* Mobile-only Tabs View */}
      <motion.div
        className="mt-8 md:hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Tabs defaultValue="services" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>
          <TabsContent value="services">
            <Card>
              <CardHeader>
                <CardTitle>Services</CardTitle>
                <CardDescription>
                  A complete list of our performance tuning and modification services.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Services />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="contact">
            <Card>
              <CardHeader>
                <CardTitle>Contact</CardTitle>
                <CardDescription>
                  Get in touch with us for a free quote or any questions.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Contact />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>

      {/* Desktop-only Grid View */}
      <motion.div
        className="hidden md:grid md:grid-cols-2 md:gap-8 mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Contact</CardTitle>
              <CardDescription>
                Get in touch with us for a free quote or any questions.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Contact />
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Services</CardTitle>
              <CardDescription>
                A complete list of our performance tuning and modification services.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Services />
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </main>
  );
}
