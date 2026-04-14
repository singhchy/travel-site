"use client";

import { motion } from "framer-motion";
import { Star, MapPin, Clock, Users, Heart, ArrowRight } from "lucide-react";
import { useState } from "react";
import FadeIn from "../animations/FadeIn";
import StaggerChildren, { itemVariants } from "../animations/StaggerChildren";

const tours = [
  {
    id: 1,
    title: "Ha Long Bay Cruise",
    location: "Quang Ninh",
    duration: "3 Days 2 Nights",
    travelers: "Max 20",
    rating: 4.9,
    reviews: 2847,
    price: 299,
    originalPrice: 399,
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&q=80",
    featured: true,
    tags: ["Best Seller", "Cruise"],
  },
  {
    id: 2,
    title: "Sapa Trekking Adventure",
    location: "Lao Cai",
    duration: "4 Days 3 Nights",
    travelers: "Max 12",
    rating: 4.8,
    reviews: 1923,
    price: 399,
    originalPrice: 499,
    image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&q=80",
    featured: false,
    tags: ["Adventure", "Trekking"],
  },
  {
    id: 3,
    title: "Hoi An Cultural Tour",
    location: "Quang Nam",
    duration: "2 Days 1 Night",
    travelers: "Max 15",
    rating: 4.9,
    reviews: 2156,
    price: 249,
    originalPrice: 329,
    image: "https://images.unsplash.com/photo-1548625361-987820eb5b78?w=800&q=80",
    featured: false,
    tags: ["Culture", "Heritage"],
  },
  {
    id: 4,
    title: "Phu Quoc Beach Escape",
    location: "Kien Giang",
    duration: "5 Days 4 Nights",
    travelers: "Max 25",
    rating: 4.7,
    reviews: 1654,
    price: 599,
    originalPrice: 799,
    image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&q=80",
    featured: true,
    tags: ["Beach", "Relaxation"],
  },
  {
    id: 5,
    title: "Da Lat Mountain Retreat",
    location: "Lam Dong",
    duration: "3 Days 2 Nights",
    travelers: "Max 18",
    rating: 4.8,
    reviews: 1432,
    price: 349,
    originalPrice: 449,
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80",
    featured: false,
    tags: ["Nature", "Romantic"],
  },
  {
    id: 6,
    title: "Mekong Delta Discovery",
    location: "Mekong Delta",
    duration: "2 Days 1 Night",
    travelers: "Max 20",
    rating: 4.6,
    reviews: 1287,
    price: 199,
    originalPrice: 279,
    image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800&q=80",
    featured: false,
    tags: ["River", "Local Life"],
  },
];

function TourCard({ tour, index }: { tour: typeof tours[0]; index: number }) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ 
        scale: 1.02,
        y: -8,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
      }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={tour.image}
          alt={tour.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Gradient Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity"
        />
        
        {/* Featured Badge */}
        {tour.featured && (
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
          <span className="text-sm font-semibold text-neutral-700">{tour.rating}</span>
          <span className="text-xs text-neutral-400">({tour.reviews})</span>
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
      
      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Tags */}
        <div className="mb-3 flex flex-wrap gap-2">
          {tour.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-600"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Location */}
        <div className="mb-2 flex items-center gap-2 text-neutral-500">
          <MapPin className="h-4 w-4" />
          <span className="text-sm font-medium">{tour.location}</span>
        </div>
        
        {/* Title */}
        <h3 className="mb-4 text-xl font-bold text-neutral-800 group-hover:text-[#FF385C] transition-colors">
          {tour.title}
        </h3>
        
        {/* Tour Details */}
        <div className="mb-6 flex flex-wrap gap-4">
          <div className="flex items-center gap-2 text-neutral-600">
            <Clock className="h-4 w-4" />
            <span className="text-sm">{tour.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-neutral-600">
            <Users className="h-4 w-4" />
            <span className="text-sm">{tour.travelers}</span>
          </div>
        </div>
        
        {/* Price and CTA */}
        <div className="mt-auto flex items-center justify-between border-t border-neutral-100 pt-4">
          <div>
            {tour.originalPrice && (
              <span className="text-sm text-neutral-400 line-through">
                ${tour.originalPrice}
              </span>
            )}
            <p className="text-2xl font-bold text-neutral-800">
              ${tour.price}
              <span className="text-sm font-normal text-neutral-500">/person</span>
            </p>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 rounded-lg bg-[#FF385C] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#D9324E] hover:shadow-lg"
          >
            Book Now
            <ArrowRight className="h-4 w-4" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default function TourGrid() {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <FadeIn>
          <div className="mb-12 flex flex-col items-center justify-between gap-6 md:flex-row md:gap-0">
            <div className="text-center md:text-left">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-4 inline-block rounded-full bg-[#FF385C]/10 px-4 py-2 text-sm font-semibold text-[#FF385C]"
              >
                Tour Packages
              </motion.span>
              <h2 className="mb-4 text-display-md text-neutral-900">
                Popular Tours
              </h2>
              <p className="max-w-2xl text-body-lg text-neutral-600">
                Explore our carefully curated tour packages designed to give you the best Vietnam experience
              </p>
            </div>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2">
              {["All", "Adventure", "Culture", "Beach", "Nature"].map((filter, index) => (
                <motion.button
                  key={filter}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                    index === 0
                      ? "bg-[#FF385C] text-white shadow-md"
                      : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                  }`}
                >
                  {filter}
                </motion.button>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Tours Grid */}
        <StaggerChildren>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {tours.map((tour, index) => (
              <TourCard key={tour.id} tour={tour} index={index} />
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
              View All Tours
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
