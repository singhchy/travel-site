"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";
import { Star, MapPin, ArrowRight, Heart } from "lucide-react";
import FadeIn from "../animations/FadeIn";
import StaggerChildren, { itemVariants } from "../animations/StaggerChildren";

const destinations = [
  {
    id: 1,
    name: "Ha Long Bay",
    location: "Quang Ninh",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&q=80",
    rating: 4.9,
    reviews: 2847,
    price: 299,
    duration: "3 Days",
    featured: true,
  },
  {
    id: 2,
    name: "Hoi An Ancient Town",
    location: "Quang Nam",
    image: "https://images.unsplash.com/photo-1548625361-987820eb5b78?w=800&q=80",
    rating: 4.8,
    reviews: 2156,
    price: 249,
    duration: "2 Days",
    featured: false,
  },
  {
    id: 3,
    name: "Sapa Terraces",
    location: "Lao Cai",
    image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&q=80",
    rating: 4.9,
    reviews: 1923,
    price: 399,
    duration: "4 Days",
    featured: true,
  },
  {
    id: 4,
    name: "Phu Quoc Island",
    location: "Kien Giang",
    image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&q=80",
    rating: 4.7,
    reviews: 1654,
    price: 349,
    duration: "3 Days",
    featured: false,
  },
];

function DestinationCard({ destination, index }: { destination: typeof destinations[0]; index: number }) {
  const [isLiked, setIsLiked] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [2, -2]);
  const rotateY = useTransform(x, [-100, 100], [-2, 2]);

  return (
    <motion.div
      variants={itemVariants}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      whileHover={{ 
        scale: 1.02, 
        y: -8,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
      }}
      className="group relative h-full overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {/* Image Container - Standardized height */}
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={destination.image}
          alt={destination.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        {/* Featured Badge */}
        {destination.featured && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 + 0.3 }}
            className="absolute left-4 top-4 rounded-full bg-[#FF385C] px-3 py-1 text-xs font-semibold text-white shadow-lg"
          >
            Featured
          </motion.div>
        )}
        
        {/* Rating Badge */}
        <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 shadow-lg backdrop-blur-sm">
          <Star className="h-4 w-4 fill-[#FF385C] text-[#FF385C]" />
          <span className="text-sm font-semibold text-neutral-700">{destination.rating}</span>
          <span className="text-xs text-neutral-400">({destination.reviews})</span>
        </div>
        
        {/* Wishlist Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsLiked(!isLiked)}
          className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 shadow-lg backdrop-blur-sm transition-colors hover:bg-white"
        >
          <Heart 
            className={`h-5 w-5 transition-colors ${isLiked ? 'fill-[#FF385C] text-[#FF385C]' : 'text-neutral-400'}`} 
          />
        </motion.button>
      </div>
      
      {/* Content - Standardized padding */}
      <div className="p-6">
        {/* Location */}
        <div className="mb-3 flex items-center gap-2 text-neutral-500">
          <MapPin className="h-4 w-4" />
          <span className="text-sm font-medium">{destination.location}</span>
        </div>
        
        {/* Title */}
        <h3 className="mb-4 text-xl font-bold text-neutral-800 group-hover:text-[#FF385C] transition-colors">
          {destination.name}
        </h3>
        
        {/* Duration Badge */}
        <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1.5">
          <svg className="h-4 w-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-sm font-semibold text-neutral-700">{destination.duration}</span>
        </div>
        
        {/* Price and CTA */}
        <div className="flex items-center justify-between border-t border-neutral-100 pt-4">
          <div>
            <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Starting from</span>
            <p className="text-2xl font-bold text-neutral-800">
              ${destination.price}
              <span className="text-sm font-normal text-neutral-500">/person</span>
            </p>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 rounded-lg bg-[#FF385C] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#D9324E] hover:shadow-lg"
          >
            Explore Now
            <ArrowRight className="h-4 w-4" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default function PopularDestinations() {
  return (
    <section className="section bg-neutral-50">
      <div className="container-custom">
        {/* Section Header */}
        <FadeIn>
          <div className="mb-12 text-center md:mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 inline-block rounded-full bg-[#FF385C]/10 px-4 py-2 text-sm font-semibold text-[#FF385C]"
            >
              Top Destinations
            </motion.span>
            <h2 className="mb-4 text-display-md text-neutral-900">
              Popular Destinations
            </h2>
            <p className="mx-auto max-w-2xl text-body-lg text-neutral-600">
              Discover Vietnam's most breathtaking locations, from stunning limestone karsts to ancient towns and pristine beaches
            </p>
          </div>
        </FadeIn>

        {/* Destinations Grid */}
        <StaggerChildren>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {destinations.map((destination, index) => (
              <DestinationCard 
                key={destination.id} 
                destination={destination} 
                index={index} 
              />
            ))}
          </div>
        </StaggerChildren>

        {/* View All Button */}
        <FadeIn delay={0.4}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-12 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-xl border-2 border-neutral-200 px-8 py-4 text-base font-semibold text-neutral-700 transition-all hover:border-[#FF385C] hover:text-[#FF385C]"
            >
              View All Destinations
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
