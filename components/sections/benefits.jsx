'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function Benefits() {
  return (
    <section className="py-24">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Why Choose LogoVerse AI?</h2>
          <p className="text-muted-foreground">Experience the future of logo design</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1560157368-946d9c8f7cb6?auto=format&fit=crop&q=80"
                alt="AI Design Process"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Cutting-edge AI Technology</h3>
              <p className="text-muted-foreground">
                Our advanced AI algorithms understand design principles and brand aesthetics,
                creating logos that perfectly match your vision.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Unlimited Possibilities</h3>
              <p className="text-muted-foreground">
                Generate countless variations and explore different styles until you
                find the perfect logo for your brand.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}