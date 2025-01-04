'use client';

import { motion } from 'framer-motion';
import { TestimonialSlider } from './testimonial-slider';

export function Testimonials() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers who have transformed their brands
            with our AI-powered logo generation platform
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <TestimonialSlider />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="flex items-center justify-center space-x-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">10k+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">50k+</div>
              <div className="text-sm text-muted-foreground">Logos Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">4.9/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}