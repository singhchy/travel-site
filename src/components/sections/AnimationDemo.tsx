"use client";

import { useState } from "react";

export default function AnimationDemo() {
  const [selectedAnimation, setSelectedAnimation] = useState("fade-in");

  const animations = [
    { name: "fade-in", label: "Fade In" },
    { name: "fade-in-up", label: "Fade In Up" },
    { name: "fade-in-down", label: "Fade In Down" },
    { name: "fade-in-left", label: "Fade In Left" },
    { name: "fade-in-right", label: "Fade In Right" },
    { name: "slide-up", label: "Slide Up" },
    { name: "slide-down", label: "Slide Down" },
    { name: "slide-left", label: "Slide Left" },
    { name: "slide-right", label: "Slide Right" },
    { name: "bounce-in", label: "Bounce In" },
    { name: "scale-in", label: "Scale In" },
    { name: "rotate-in", label: "Rotate In" },
    { name: "flip-in", label: "Flip In" },
    { name: "zoom-in", label: "Zoom In" },
    { name: "shake", label: "Shake" },
    { name: "wiggle", label: "Wiggle" },
    { name: "float", label: "Float" },
    { name: "glow", label: "Glow" },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-forest-green to-jungle-green py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          Animation Library Demo
        </h1>
        <p className="text-ivory text-center mb-12 text-lg">
          Click on any animation to see it in action
        </p>

        {/* Animation Selector */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-16">
          {animations.map((anim) => (
            <button
              key={anim.name}
              onClick={() => setSelectedAnimation(anim.name)}
              className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedAnimation === anim.name
                  ? "bg-sunrise-gold text-charcoal shadow-lg scale-105"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              {anim.label}
            </button>
          ))}
        </div>

        {/* Animation Preview */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
          <div className="flex items-center justify-center min-h-[300px]">
            <div
              key={selectedAnimation}
              className={`animate-${selectedAnimation} bg-gradient-to-r from-sunrise-gold to-clay-orange text-white px-8 py-6 rounded-xl shadow-2xl text-xl font-bold`}
            >
              {selectedAnimation.replace(/-/g, " ").toUpperCase()}
            </div>
          </div>
        </div>

        {/* Usage Example */}
        <div className="mt-16 bg-charcoal/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-4">Usage Example</h2>
          <pre className="bg-black/50 rounded-lg p-4 overflow-x-auto text-sm">
            <code className="text-leaf-light-green">
              {`<div className="animate-${selectedAnimation}">
  Your content here
</div>`}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
