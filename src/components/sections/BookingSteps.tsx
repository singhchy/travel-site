"use client";

import { motion } from "framer-motion";
import { Search, Calendar, CreditCard, Plane, CheckCircle } from "lucide-react";
import FadeIn from "../animations/FadeIn";
import StaggerChildren, { itemVariants } from "../animations/StaggerChildren";

const steps = [
  {
    id: 1,
    icon: Search,
    title: "Search & Choose",
    description: "Browse tours and find your perfect adventure",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    icon: Calendar,
    title: "Select Dates",
    description: "Pick your preferred travel dates",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    icon: CreditCard,
    title: "Secure Payment",
    description: "Complete booking with instant confirmation",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 4,
    icon: Plane,
    title: "Start Journey",
    description: "Pack your bags and explore Vietnam",
    color: "from-green-500 to-teal-500",
  },
];

function StepCard({ step, index, isLast }: { step: typeof steps[0]; index: number; isLast: boolean }) {
  const Icon = step.icon;

  return (
    <motion.div
      variants={itemVariants}
      className="relative flex-1"
    >
      {/* Connector Line - Desktop */}
      {!isLast && (
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
          className="absolute left-1/2 top-8 hidden h-0.5 w-full -translate-x-1/2 origin-left bg-gradient-to-r from-[#FF385C] to-[#D9324E] md:block"
        />
      )}
      
      {/* Step Content */}
      <div className="relative flex flex-col items-center text-center">
        {/* Step Number & Icon */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF385C] to-[#D9324E] shadow-lg transition-all hover:shadow-xl"
        >
          <Icon className="h-8 w-8 text-white" />
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 + 0.3 }}
            className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-bold text-[#FF385C] shadow-lg border-2 border-[#FF385C]"
          >
            {step.id}
          </motion.div>
        </motion.div>
        
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 + 0.4 }}
          className="mt-6"
        >
          <h3 className="mb-2 text-lg font-bold text-neutral-800">
            {step.title}
          </h3>
          <p className="text-sm text-neutral-600">
            {step.description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function BookingSteps() {
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
              How It Works
            </motion.span>
            <h2 className="mb-4 text-display-md text-neutral-900">
              Simple Booking Process
            </h2>
            <p className="mx-auto max-w-2xl text-body-lg text-neutral-600">
              Book your dream Vietnam vacation in just 4 simple steps
            </p>
          </div>
        </FadeIn>

        {/* Horizontal Stepper - Desktop */}
        <StaggerChildren>
          <div className="hidden md:grid md:grid-cols-4 md:gap-8">
            {steps.map((step, index) => (
              <StepCard
                key={step.id}
                step={step}
                index={index}
                isLast={index === steps.length - 1}
              />
            ))}
          </div>
        </StaggerChildren>

        {/* Vertical Stepper - Mobile */}
        <div className="space-y-8 md:hidden">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="relative flex gap-4"
            >
              {/* Connector Line */}
              {index !== steps.length - 1 && (
                <div className="absolute left-8 top-16 h-full w-0.5 bg-gradient-to-b from-[#FF385C] to-[#D9324E]" />
              )}
              
              {/* Step Number */}
              <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF385C] to-[#D9324E] shadow-lg">
                <step.icon className="h-8 w-8 text-white" />
                <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-bold text-[#FF385C] shadow-lg border-2 border-[#FF385C]">
                  {step.id}
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 rounded-2xl bg-white p-6 shadow-lg">
                <h3 className="mb-2 text-lg font-bold text-neutral-800">
                  {step.title}
                </h3>
                <p className="text-sm text-neutral-600">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <FadeIn delay={0.4}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-16 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-xl bg-[#FF385C] px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-[#D9324E] hover:shadow-xl"
            >
              Start Your Journey
              <CheckCircle className="h-5 w-5" />
            </motion.button>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
