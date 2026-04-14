"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import FadeIn from "../animations/FadeIn";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "United States",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    rating: 5,
    text: "An absolutely incredible experience! The tour guides were knowledgeable, the accommodations were luxurious, and every detail was perfectly planned. Vietnam exceeded all my expectations.",
    tour: "Ha Long Bay Cruise",
    date: "March 2024",
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Canada",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    rating: 5,
    text: "Best travel agency I've ever used. From booking to the actual trip, everything was seamless. The Sapa trekking tour was breathtaking and the local experiences were authentic.",
    tour: "Sapa Trekking Adventure",
    date: "February 2024",
  },
  {
    id: 3,
    name: "Emma Williams",
    location: "United Kingdom",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    rating: 5,
    text: "The attention to detail and personalized service made our honeymoon unforgettable. Hoi An was magical, and the team went above and beyond to make it special.",
    tour: "Hoi An Cultural Tour",
    date: "January 2024",
  },
  {
    id: 4,
    name: "David Park",
    location: "Australia",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    rating: 5,
    text: "Professional, reliable, and truly passionate about showing the best of Vietnam. The Phu Quoc beach escape was exactly what we needed for relaxation.",
    tour: "Phu Quoc Beach Escape",
    date: "December 2023",
  },
];

function TestimonialCard({ testimonial, isActive }: { testimonial: typeof testimonials[0]; isActive: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <div className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-2xl md:p-12">
        {/* Quote Icon */}
        <motion.div
          animate={{ rotate: isActive ? 0 : 10 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex justify-center"
        >
          <Quote className="h-16 w-16 text-[#FF385C]/20" />
        </motion.div>

        {/* Testimonial Text */}
        <p className="mb-8 text-center text-xl leading-relaxed text-neutral-800 md:text-2xl">
          "{testimonial.text}"
        </p>

        {/* Rating */}
        <div className="mb-8 flex justify-center gap-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star
              key={i}
              className="h-6 w-6 fill-[#FF385C] text-[#FF385C]"
            />
          ))}
        </div>

        {/* Divider */}
        <div className="mb-8 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />

        {/* Author Info */}
        <div className="flex flex-col items-center">
          <motion.div
            animate={{ scale: isActive ? 1.05 : 1 }}
            transition={{ duration: 0.3 }}
            className="mb-4 overflow-hidden rounded-full border-4 border-[#FF385C]/20 shadow-lg"
          >
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="h-24 w-24 object-cover"
            />
          </motion.div>
          
          <h4 className="mb-1 text-xl font-bold text-neutral-900">
            {testimonial.name}
          </h4>
          
          <div className="mb-3 flex items-center gap-2 text-neutral-600">
            <MapPin className="h-4 w-4" />
            <span className="text-sm font-medium">{testimonial.location}</span>
          </div>
          
          <div className="flex flex-col items-center gap-1">
            <p className="text-sm font-semibold text-[#FF385C]">
              Traveled: {testimonial.tour}
            </p>
            <p className="text-xs text-neutral-500">{testimonial.date}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

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
              Testimonials
            </motion.span>
            <h2 className="mb-4 text-display-md text-neutral-900">
              What Our Travelers Say
            </h2>
            <p className="mx-auto max-w-2xl text-body-lg text-neutral-600">
              Real experiences from real travelers who explored Vietnam with us
            </p>
          </div>
        </FadeIn>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute left-0 right-0 top-1/2 z-10 -translate-y-1/2 flex justify-between px-4 md:px-0">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-all hover:bg-[#FF385C] hover:text-white md:-left-16"
            >
              <ChevronLeft className="h-6 w-6" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-all hover:bg-[#FF385C] hover:text-white md:-right-16"
            >
              <ChevronRight className="h-6 w-6" />
            </motion.button>
          </div>

          {/* Testimonial Cards */}
          <AnimatePresence mode="wait" initial={false}>
            <TestimonialCard
              key={currentIndex}
              testimonial={testimonials[currentIndex]}
              isActive={true}
            />
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="mt-12 flex justify-center gap-3">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-[#FF385C]"
                    : "w-3 bg-neutral-300 hover:bg-neutral-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <FadeIn delay={0.4}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 border-t border-neutral-200 pt-12"
          >
            {[
              { name: "4.9/5 Rating", icon: Star },
              { name: "5000+ Reviews", icon: Quote },
              { name: "Verified Travelers", icon: MapPin },
            ].map((badge, index) => (
              <motion.div
                key={badge.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="flex items-center gap-2 text-neutral-600"
              >
                <badge.icon className="h-5 w-5 text-[#FF385C]" />
                <span className="font-semibold">{badge.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
