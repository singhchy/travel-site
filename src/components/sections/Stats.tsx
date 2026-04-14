"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Clock, Award, Users, Globe, TrendingUp, ShieldCheck } from "lucide-react";
import FadeIn from "../animations/FadeIn";
import StaggerChildren, { itemVariants } from "../animations/StaggerChildren";

const stats = [
  {
    id: 1,
    icon: Clock,
    value: 25,
    suffix: "+",
    label: "Years Experience",
    description: "Crafting unforgettable journeys",
    color: "text-[#FF385C]",
    bgColor: "bg-[#FF385C]/10",
  },
  {
    id: 2,
    icon: Users,
    value: 50000,
    suffix: "+",
    label: "Happy Travelers",
    description: "From around the world",
    color: "text-[#008489]",
    bgColor: "bg-[#008489]/10",
  },
  {
    id: 3,
    icon: Globe,
    value: 150,
    suffix: "+",
    label: "Destinations",
    description: "Across Vietnam",
    color: "text-[#FFB400]",
    bgColor: "bg-[#FFB400]/10",
  },
  {
    id: 4,
    icon: Award,
    value: 99,
    suffix: "%",
    label: "Satisfaction Rate",
    description: "Customer happiness",
    color: "text-[#00A699]",
    bgColor: "bg-[#00A699]/10",
  },
  {
    id: 5,
    icon: TrendingUp,
    value: 5000,
    suffix: "+",
    label: "Tours Completed",
    description: "Successful adventures",
    color: "text-[#7C3AED]",
    bgColor: "bg-[#7C3AED]/10",
  },
  {
    id: 6,
    icon: ShieldCheck,
    value: 24,
    suffix: "/7",
    label: "Support Available",
    description: "Always here for you",
    color: "text-[#DC2626]",
    bgColor: "bg-[#DC2626]/10",
  },
];

function AnimatedCounter({ value, suffix, duration = 2 }: { value: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        
        // Easing function
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * value));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="text-5xl font-bold text-neutral-900 md:text-6xl lg:text-7xl">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const Icon = stat.icon;

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ 
        scale: 1.03,
        y: -8,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
      }}
      className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300"
    >
      {/* Background decoration */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
        className={`absolute -right-8 -top-8 h-32 w-32 rounded-full ${stat.bgColor} transition-transform group-hover:scale-150`}
      />
      
      {/* Icon */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
        className={`relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${stat.bgColor}`}
      >
        <Icon className={`h-8 w-8 ${stat.color}`} />
      </motion.div>
      
      {/* Counter */}
      <div className="relative">
        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
      </div>
      
      {/* Label */}
      <p className="relative mt-3 text-lg font-semibold text-neutral-800">
        {stat.label}
      </p>
      
      {/* Description */}
      <p className="relative mt-1 text-sm text-neutral-500">
        {stat.description}
      </p>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="section bg-white">
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
              Our Achievements
            </motion.span>
            <h2 className="mb-4 text-display-md text-neutral-900">
              Why Choose Us
            </h2>
            <p className="mx-auto max-w-2xl text-body-lg text-neutral-600">
              With over 25 years of experience, we've helped thousands of travelers discover the magic of Vietnam
            </p>
          </div>
        </FadeIn>

        {/* Stats Grid - 3x2 layout for better spacing */}
        <StaggerChildren>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat, index) => (
              <StatCard key={stat.id} stat={stat} index={index} />
            ))}
          </div>
        </StaggerChildren>

        {/* Trust Badges */}
        <FadeIn delay={0.4}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 border-t border-neutral-100 pt-12"
          >
            {[
              { name: "TripAdvisor", color: "text-neutral-400" },
              { name: "Booking.com", color: "text-neutral-400" },
              { name: "Airbnb", color: "text-neutral-400" },
              { name: "Expedia", color: "text-neutral-400" },
            ].map((badge, index) => (
              <motion.div
                key={badge.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className={`text-2xl font-bold ${badge.color} hover:text-neutral-600 transition-colors`}
              >
                {badge.name}
              </motion.div>
            ))}
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
