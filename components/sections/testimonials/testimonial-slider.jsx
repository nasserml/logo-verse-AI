'use client';

import { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TestimonialCard } from './testimonial-card';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Startup Founder",
    company: "TechVision Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    quote: "LogoVerse AI transformed our brand identity. The AI-generated logos were not just professional, but captured our company's essence perfectly.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Creative Director",
    company: "Design Studio Pro",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    quote: "As a creative director, I was skeptical about AI-generated logos. LogoVerse AI proved me wrong. The quality and creativity are outstanding.",
    rating: 5
  },
  {
    name: "Emma Williams",
    role: "Small Business Owner",
    company: "Organic Bites",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    quote: "Finding LogoVerse AI was a game-changer for my small business. Professional logos at an affordable price - exactly what I needed!",
    rating: 5
  },
  {
    name: "David Martinez",
    role: "Marketing Manager",
    company: "Global Reach",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
    quote: "The speed and quality of LogoVerse AI are unmatched. We've used it for multiple client projects with fantastic results every time.",
    rating: 5
  },
  {
    name: "Lisa Chang",
    role: "E-commerce Entrepreneur",
    company: "StyleHub",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80",
    quote: "My online store needed a professional logo, and LogoVerse AI delivered beyond expectations. The customization options are incredible!",
    rating: 5
  }
];

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = useCallback((newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + testimonials.length) % testimonials.length);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4">
      <div className="relative h-[400px] overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="absolute w-full"
          >
            <TestimonialCard {...testimonials[currentIndex]} />
          </motion.div>
        </AnimatePresence>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
        onClick={() => paginate(-1)}
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
        onClick={() => paginate(1)}
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      <div className="flex justify-center space-x-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-primary' : 'bg-primary/20'
            }`}
          />
        ))}
      </div>
    </div>
  );
}