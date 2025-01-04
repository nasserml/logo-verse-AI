'use client';

import { motion } from 'framer-motion';
import { Zap, Target, Clock, Palette, Shield, Users } from 'lucide-react';
import { BenefitCard } from './benefit-card';
import Image from 'next/image';

const benefits = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Generate professional logos in seconds with our advanced AI technology'
  },
  {
    icon: Target,
    title: 'Pixel Perfect',
    description: 'Get high-quality, scalable logos that look great on any device or medium'
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Create logos anytime, anywhere, without waiting for a designer'
  },
  {
    icon: Palette,
    title: 'Endless Customization',
    description: 'Fine-tune every aspect of your logo until it\'s exactly right'
  },
  {
    icon: Shield,
    title: 'Original Designs',
    description: 'Every logo is unique and checked for originality'
  },
  {
    icon: Users,
    title: 'Brand Guidelines',
    description: 'Receive complete brand guidelines with your logo package'
  }
];

export function Benefits() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background" />
      <div className="container px-4 mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Why Choose LogoVerse AI?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the future of logo design with our cutting-edge AI technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 relative rounded-2xl overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&q=80"
            alt="AI Logo Design Process"
            width={1200}
            height={600}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent flex items-center">
            <div className="p-8 max-w-lg">
              <h3 className="text-2xl font-bold mb-4">Powered by Advanced AI</h3>
              <p className="text-muted-foreground mb-6">
                Our AI technology analyzes millions of professional logos to understand
                what makes a great design, then applies these principles to create
                your perfect logo.
              </p>
              <div className="flex space-x-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-primary/20 p-4 rounded-lg text-center"
                >
                  <div className="text-2xl font-bold text-primary">99%</div>
                  <div className="text-sm text-muted-foreground">Accuracy Rate</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-primary/20 p-4 rounded-lg text-center"
                >
                  <div className="text-2xl font-bold text-primary">&lt;1min</div>
                  <div className="text-sm text-muted-foreground">Generation Time</div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}