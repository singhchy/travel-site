"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Search, MapPin, Calendar, Users, Play, ChevronRight } from "lucide-react";
import Parallax from "../animations/Parallax";
import TextReveal from "../animations/TextReveal";
import FadeIn from "../animations/FadeIn";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Generate random particles only on client side to avoid hydration mismatch
  const [particles, setParticles] = useState<Array<{ x: number; y: number; duration: number; delay: number; xRange: number }>>([]);

  useEffect(() => {
    setParticles(
      [...Array(6)].map(() => ({
        x: Math.random() * 1920,
        y: Math.random() * 1080,
        duration: 3 + Math.random() * 2,
        delay: Math.random() * 2,
        xRange: Math.random() * 50 - 25,
      }))
    );
  }, []);

  return (
    <section ref={ref} className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Image with Ken Burns Effect */}
      <motion.div
        style={{ scale, opacity }}
        className="absolute inset-0 z-0"
      >
        {/* Dark gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
          alt="Vietnam Mountains"
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            initial={{
              x: particle.x,
              y: particle.y,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, particle.xRange, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center">
        {/* Badge */}
        <FadeIn delay={0.2}>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-sm border border-white/20"
          >
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            Discover Vietnam's Hidden Gems
          </motion.span>
        </FadeIn>

        {/* Main Headline - Single strong headline */}
        <h1 className="mb-6 max-w-5xl text-display-xl text-white">
          <TextReveal delay={0.4}>Explore Vietnam</TextReveal>
        </h1>

        {/* Subheading - Short, max 2 lines */}
        <FadeIn delay={0.6} direction="up">
          <p className="mb-10 max-w-2xl text-body-lg text-white/90 md:text-xl">
            Experience breathtaking landscapes, rich culture, and unforgettable adventures in Southeast Asia's most captivating destination
          </p>
        </FadeIn>

        {/* CTAs - Primary and Secondary */}
        <FadeIn delay={0.8}>
          <div className="flex flex-col gap-4 sm:flex-row">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FF385C] px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-[#D9324E] hover:shadow-xl md:text-lg"
            >
              Explore Tours
              <ChevronRight className="h-5 w-5" />
            </motion.button>
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm border border-white/30 transition-all hover:bg-white/20 md:text-lg"
            >
              <Play className="h-5 w-5 fill-current" />
              Watch Video
            </motion.button>
          </div>
        </FadeIn>

        {/* Floating Search Bar - Card style with shadow */}
        <FadeIn delay={1.2}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="mt-16 w-full max-w-4xl"
          >
            <div className="rounded-2xl bg-white p-4 shadow-2xl md:p-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                {/* Destination */}
                <div className="relative">
                  <label className="mb-2 block text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                    Destination
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />
                    <input
                      type="text"
                      placeholder="Where to?"
                      className="w-full rounded-lg border border-neutral-200 py-3 pl-10 pr-4 text-sm text-neutral-700 placeholder-neutral-400 focus:border-[#FF385C] focus:outline-none focus:ring-2 focus:ring-[#FF385C]/20"
                    />
                  </div>
                </div>

                {/* Date */}
                <div className="relative">
                  <label className="mb-2 block text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                    Check-in
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />
                    <input
                      type="date"
                      className="w-full rounded-lg border border-neutral-200 py-3 pl-10 pr-4 text-sm text-neutral-700 placeholder-neutral-400 focus:border-[#FF385C] focus:outline-none focus:ring-2 focus:ring-[#FF385C]/20"
                    />
                  </div>
                </div>

                {/* Guests */}
                <div className="relative">
                  <label className="mb-2 block text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                    Guests
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />
                    <select className="w-full rounded-lg border border-neutral-200 py-3 pl-10 pr-4 text-sm text-neutral-700 focus:border-[#FF385C] focus:outline-none focus:ring-2 focus:ring-[#FF385C]/20 appearance-none bg-white">
                      <option>1 Guest</option>
                      <option>2 Guests</option>
                      <option>3 Guests</option>
                      <option>4+ Guests</option>
                    </select>
                  </div>
                </div>

                {/* Search Button */}
                <div className="flex items-end">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex h-[50px] w-full items-center justify-center gap-2 rounded-lg bg-[#FF385C] px-6 text-base font-semibold text-white shadow-md transition-all hover:bg-[#D9324E] hover:shadow-lg"
                  >
                    <Search className="h-5 w-5" />
                    Search
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </FadeIn>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/70"
        >
          <span className="text-xs font-medium uppercase tracking-wider">Scroll to explore</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
