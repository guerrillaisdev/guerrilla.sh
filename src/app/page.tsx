// Chadson v69.0.0: Guerrilla Automotive Business Profile
// Main page with a tab-based layout for a native-app feel.

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
    <main className="container mx-auto p-4">
      <Hero />
      <Tabs defaultValue="services" className="w-full mt-8">
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
    </main>
  );
}
