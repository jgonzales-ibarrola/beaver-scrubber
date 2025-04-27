"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Sparkles, Droplets, Home, Car, Building, Warehouse } from "lucide-react";

const cleaningContent = [
  {
    title: "Kitchen Cleaning",
    description:
      "Deep cleaning of kitchen surfaces, appliances, and fixtures. We tackle tough grease, disinfect surfaces, and leave your kitchen spotless.",
    icon: <Home className="h-6 w-6" />,
  },
  {
    title: "Bedroom & Living Areas",
    description:
      "Thorough cleaning of bedrooms and living spaces, including vacuuming mattresses, carpets, and upholstery for a fresh, allergen-free environment.",
    icon: <Building className="h-6 w-6" />,
  },
  {
    title: "Stock Room Organization",
    description:
      "Decluttering and organizing storage spaces, ensuring a clean and orderly environment for your belongings.",
    icon: <Warehouse className="h-6 w-6" />,
  },
];

const powerWashingContent = [
  {
    title: "House Exteriors",
    description:
      "Professional power washing for walkways, stairs, swimming pools, chimneys, roofs, and windows to remove dirt, stains, and weather damage.",
    icon: <Home className="h-6 w-6" />,
  },
  {
    title: "Driveways & Patios",
    description:
      "Restore the appearance of concrete or tile patios and driveways by removing accumulated dirt, debris, and weather-related stains.",
    icon: <Droplets className="h-6 w-6" />,
  },
  {
    title: "Vehicles & Equipment",
    description:
      "Specialized power washing for automobiles, outdoor equipment, barbecue grills, and other items that need thorough cleaning.",
    icon: <Car className="h-6 w-6" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1a202c] dark:text-[#f3f4f6]">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive cleaning and power washing solutions tailored to your needs.
          </p>
        </motion.div>

        <Tabs defaultValue="cleaning" className="w-full">
          <TabsList className="bg-white grid w-full max-w-md mx-auto grid-cols-2 gap-4 mb-12">
            <TabsTrigger
              value="cleaning"
              className="text-lg py-3 px-5 rounded-md bg-gray-100 hover:bg-orange/80 transition-colors"
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Professional Cleaning
            </TabsTrigger>
            <TabsTrigger
              value="power-washing"
              className="text-lg py-3 px-5 rounded-md bg-gray-100 hover:bg-orange/80 transition-colors"
            >
              <Droplets className="mr-2 h-4 w-4" />
              Power Washing
            </TabsTrigger>
          </TabsList>

          {/* Cleaning Services */}
          <TabsContent value="cleaning">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cleaningContent.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-xl font-semibold text-[#1a202c] dark:text-[#f3f4f6] ml-3">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Power Washing Services */}
          <TabsContent value="power-washing">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {powerWashingContent.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-xl font-semibold text-[#1a202c] dark:text-[#f3f4f6] ml-3">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
