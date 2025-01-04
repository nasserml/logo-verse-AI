'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Startup Founder",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    quote: "LogoVerse AI helped me create the perfect logo for my startup in minutes. The results were beyond my expectations!"
  },
  {
    name: "Michael Chen",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    quote: "The AI-powered design process is revolutionary. It saved us countless hours of back-and-forth with designers."
  },
  {
    name: "Emma Williams",
    role: "Small Business Owner",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    quote: "Affordable, fast, and professional results. LogoVerse AI is a game-changer for small businesses."
  }
];

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-muted-foreground">Join thousands of satisfied customers</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-6 rounded-lg"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-muted-foreground italic">&ldquo;{testimonial.quote}&rdquo;</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}