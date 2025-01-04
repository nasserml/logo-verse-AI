'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function About() {
  return (
    <section className="py-24">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80"
                alt="Our Story"
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
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-muted-foreground">
              LogoVerse AI was born from a simple idea: make professional logo design accessible to everyone.
              Our team of AI experts and designers worked tirelessly to create an innovative platform that
              combines artificial intelligence with creative design principles.
            </p>
            <p className="text-muted-foreground">
              Today, we're proud to help thousands of businesses and individuals create
              stunning logos that perfectly represent their brands. Our mission is to
              democratize design and empower creativity through technology.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}