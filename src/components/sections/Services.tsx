"use client";

import { motion } from "framer-motion";
import { Plane, Hotel, Car, Camera, Umbrella, Map, ArrowRight } from "lucide-react";
import FadeIn from "../animations/FadeIn";
import StaggerChildren, { itemVariants } from "../animations/StaggerChildren";

const services = [
  {
    id: 1,
    icon: Plane,
    title: "Flight Booking",
    description: "Find the best deals on flights to Vietnam with our exclusive partnerships and competitive prices",
    gradient: "from-blue-500 to-cyan-500",
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    id: 2,
    icon: Hotel,
    title: "Hotel Reservations",
    description: "Stay in handpicked accommodations from luxury resorts to charming boutique hotels",
    gradient: "from-purple-500 to-pink-500",
    color: "text-purple-500",
    bgColor: "bg-purple-50",
  },
  {
    id: 3,
    icon: Car,
    title: "Transportation",
    description: "Private transfers, car rentals, and guided tours with professional, English-speaking drivers",
    gradient: "from-orange-500 to-red-500",
    color: "text-orange-500",
    bgColor: "bg-orange-50",
  },
  {
    id: 4,
    icon: Camera,
    title: "Photography Tours",
    description: "Capture stunning moments with our expert photography guides and hidden gem locations",
    gradient: "from-green-500 to-teal-500",
    color: "text-green-500",
    bgColor: "bg-green-50",
  },
  {
    id: 5,
    icon: Umbrella,
    title: "Adventure Activities",
    description: "Experience thrilling activities from trekking and kayaking to water sports and more",
    gradient: "from-yellow-500 to-orange-500",
    color: "text-yellow-500",
    bgColor: "bg-yellow-50",
  },
  {
    id: 6,
    icon: Map,
    title: "Custom Itineraries",
    description: "Personalized travel plans tailored to your preferences, schedule, and budget",
    gradient: "from-indigo-500 to-purple-500",
    color: "text-indigo-500",
    bgColor: "bg-indigo-50",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const Icon = service.icon;

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ 
        scale: 1.02,
        y: -8,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
      }}
      className="group relative h-full overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300"
    >
      {/* Icon Container - Consistent size and style */}
      <motion.div
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.6 }}
        className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} shadow-md`}
      >
        <Icon className="h-8 w-8 text-white" />
      </motion.div>
      
      {/* Title */}
      <h3 className="mb-3 text-xl font-bold text-neutral-800 group-hover:text-[#FF385C] transition-colors">
        {service.title}
      </h3>
      
      {/* Description */}
      <p className="mb-6 text-body-md text-neutral-600 leading-relaxed">
        {service.description}
      </p>
      
      {/* Learn More Link */}
      <motion.a
        href="#"
        whileHover={{ x: 5 }}
        className={`inline-flex items-center gap-2 text-sm font-semibold ${service.color} transition-colors`}
      >
        Learn More
        <ArrowRight className="h-4 w-4" />
      </motion.a>
      
      {/* Hover Background Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 pointer-events-none`}
      />
    </motion.div>
  );
}

export default function Services() {
  return (
    <section className="section bg-neutral-50">
      <div className="container-custom">
        {/* Section Header */}
        <FadeIn>
          <div className="mb-16 text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 inline-block rounded-full bg-[#FF385C]/10 px-4 py-2 text-sm font-semibold text-[#FF385C]"
            >
              Our Services
            </motion.span>
            <h2 className="mb-4 text-display-md text-neutral-900">
              Everything You Need
            </h2>
            <p className="mx-auto max-w-2xl text-body-lg text-neutral-600">
              From flights to accommodations and everything in between, we provide comprehensive travel services for a seamless experience
            </p>
          </div>
        </FadeIn>

        {/* Services Grid - 3x2 layout */}
        <StaggerChildren>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </StaggerChildren>

        {/* CTA Banner */}
        <FadeIn delay={0.4}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-16 rounded-2xl bg-gradient-to-r from-[#FF385C] to-[#D9324E] p-8 md:p-12 text-center text-white"
          >
            <h3 className="mb-4 text-2xl font-bold md:text-3xl">
              Need a Custom Package?
            </h3>
            <p className="mb-6 text-lg text-white/90">
              Let us create a personalized itinerary just for you
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-[#FF385C] shadow-lg transition-all hover:shadow-xl"
            >
              Get a Quote
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
