"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Plane, ArrowRight } from "lucide-react";
import Parallax from "../animations/Parallax";
import FadeIn from "../animations/FadeIn";

export default function CTABanner() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  // Generate random positions only on client side to avoid hydration mismatch
  const [particles, setParticles] = useState<Array<{ x: number; y: number; duration: number; delay: number; xRange: number }>>([]);

  useEffect(() => {
    setParticles(
      [...Array(8)].map(() => ({
        x: Math.random() * 1920,
        y: Math.random() * 400,
        duration: 4 + Math.random() * 3,
        delay: Math.random() * 2,
        xRange: Math.random() * 100 - 50,
      }))
    );
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Parallax Background */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=1920&q=80"
          alt="Vietnam Landscape"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-green/95 via-jungle-green/90 to-forest-green/95" />
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-white/20 rounded-full"
            initial={{
              x: particle.x,
              y: particle.y,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, particle.xRange, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <FadeIn>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 0.8 }}
                className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm"
              >
                <Plane className="h-10 w-10 text-white" />
              </motion.div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h2 className="mb-6 text-4xl font-bold text-white md:text-6xl">
                Ready to Start Your Adventure?
              </h2>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="mb-10 text-xl text-white/90 md:text-2xl">
                Book your dream Vietnam vacation today and create memories that will last a lifetime
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 183, 77, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-sunrise-gold to-clay-orange px-10 py-5 text-lg font-bold text-white shadow-xl transition-all"
                >
                  Book Your Trip Now
                  <ArrowRight className="h-6 w-6" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-white/30 bg-white/10 px-10 py-5 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
                >
                  Contact Us
                </motion.button>
              </div>
            </FadeIn>

            {/* Trust Badges */}
            <FadeIn delay={0.6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/80"
              >
                <div className="flex items-center gap-2">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                  <span className="font-medium">Secure Booking</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <span className="font-medium">Best Price Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  <span className="font-medium">24/7 Support</span>
                </div>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
