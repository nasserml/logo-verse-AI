'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-24">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Create Your Perfect Logo?
          </h2>
          <p className="text-muted-foreground mb-8">
            Join thousands of satisfied customers and create your professional logo today.
            No design experience needed.
          </p>
          <Button size="lg" className="group">
            Start Creating Now
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}