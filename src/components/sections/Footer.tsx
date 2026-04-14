"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import FadeIn from "../animations/FadeIn";
import StaggerChildren, { itemVariants } from "../animations/StaggerChildren";

// Custom Social Icons
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const footerLinks = {
  company: [
    { label: "About Us", href: "#" },
    { label: "Our Team", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Press", href: "#" },
  ],
  destinations: [
    { label: "Ha Long Bay", href: "#" },
    { label: "Hoi An", href: "#" },
    { label: "Sapa", href: "#" },
    { label: "Phu Quoc", href: "#" },
    { label: "Da Nang", href: "#" },
  ],
  support: [
    { label: "Help Center", href: "#" },
    { label: "FAQs", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Contact Us", href: "#" },
  ],
};

const socialLinks = [
  { icon: FacebookIcon, href: "#", label: "Facebook" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: TwitterIcon, href: "#", label: "Twitter" },
  { icon: YoutubeIcon, href: "#", label: "YouTube" },
];

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@vietnamtravel.com",
    href: "mailto:hello@vietnamtravel.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+84 123 456 789",
    href: "tel:+84123456789",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "123 Ho Chi Minh City, Vietnam",
    href: "#",
  },
];

function SocialIcon({ icon: Icon, href, label }: { icon: any; href: string; label: string }) {
  return (
    <motion.a
      href={href}
      aria-label={label}
      whileHover={{ scale: 1.2, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#FF385C]"
    >
      <Icon className="h-5 w-5" />
    </motion.a>
  );
}

function FooterLink({ label, href }: { label: string; href: string }) {
  return (
    <motion.a
      href={href}
      variants={itemVariants}
      whileHover={{ x: 5, color: "#FF385C" }}
      className="block text-white/80 transition-colors hover:text-white"
    >
      {label}
    </motion.a>
  );
}

function ContactItem({ item, index }: { item: typeof contactInfo[0]; index: number }) {
  const Icon = item.icon;

  return (
    <motion.div
      variants={itemVariants}
      className="flex items-start gap-3"
    >
      <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <div>
        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-white/60">
          {item.label}
        </p>
        <a
          href={item.href}
          className="text-sm text-white/90 transition-colors hover:text-white"
        >
          {item.value}
        </a>
      </div>
    </motion.div>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-neutral-900 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative">
        {/* Main Footer Content */}
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand Column */}
            <FadeIn>
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="mb-4 text-2xl font-bold text-white">
                    Vietnam<span className="text-[#FF385C]">Travel</span>
                  </h3>
                  <p className="text-sm leading-relaxed text-white/70">
                    Discover the beauty of Vietnam with our expertly curated tours and unforgettable experiences. Your adventure awaits.
                  </p>
                </motion.div>

                {/* Social Icons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="flex gap-3"
                >
                  {socialLinks.map((social) => (
                    <SocialIcon
                      key={social.label}
                      icon={social.icon}
                      href={social.href}
                      label={social.label}
                    />
                  ))}
                </motion.div>
              </div>
            </FadeIn>

            {/* Company Links */}
            <FadeIn delay={0.1}>
              <div>
                <motion.h4
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-6 text-lg font-semibold text-white"
                >
                  Company
                </motion.h4>
                <StaggerChildren>
                  <div className="space-y-3">
                    {footerLinks.company.map((link) => (
                      <FooterLink key={link.label} label={link.label} href={link.href} />
                    ))}
                  </div>
                </StaggerChildren>
              </div>
            </FadeIn>

            {/* Destinations Links */}
            <FadeIn delay={0.2}>
              <div>
                <motion.h4
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-6 text-lg font-semibold text-white"
                >
                  Destinations
                </motion.h4>
                <StaggerChildren>
                  <div className="space-y-3">
                    {footerLinks.destinations.map((link) => (
                      <FooterLink key={link.label} label={link.label} href={link.href} />
                    ))}
                  </div>
                </StaggerChildren>
              </div>
            </FadeIn>

            {/* Contact Info */}
            <FadeIn delay={0.3}>
              <div>
                <motion.h4
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-6 text-lg font-semibold text-white"
                >
                  Contact Us
                </motion.h4>
                <StaggerChildren>
                  <div className="space-y-4">
                    {contactInfo.map((item, index) => (
                      <ContactItem key={item.label} item={item} index={index} />
                    ))}
                  </div>
                </StaggerChildren>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Newsletter Section */}
        <FadeIn delay={0.4}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-16 rounded-2xl bg-white/5 p-8 backdrop-blur-sm md:p-12"
          >
            <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-start md:text-left">
              <div className="flex-1">
                <h4 className="mb-2 text-xl font-bold text-white">
                  Subscribe to Our Newsletter
                </h4>
                <p className="text-sm text-white/70">
                  Get exclusive deals, travel tips, and inspiration delivered to your inbox
                </p>
              </div>
              <div className="flex w-full gap-3 md:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 focus:border-[#FF385C] focus:outline-none focus:ring-2 focus:ring-[#FF385C]/20 md:w-80"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-lg bg-[#FF385C] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#D9324E]"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </FadeIn>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-sm text-white/60"
            >
              © {new Date().getFullYear()} VietnamTravel. All rights reserved.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap justify-center gap-6 text-sm"
            >
              <a href="#" className="text-white/60 transition-colors hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 transition-colors hover:text-white">
                Terms of Service
              </a>
              <a href="#" className="text-white/60 transition-colors hover:text-white">
                Cookie Policy
              </a>
            </motion.div>

            {/* Scroll to Top Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.1, rotate: -180 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#FF385C]"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
