'use client';

import { motion } from 'framer-motion';
import { Palette, Wand2, Zap, Download } from 'lucide-react';

const features = [
  {
    icon: <Wand2 className="w-6 h-6" />,
    title: 'AI-Powered Design',
    description: 'Advanced algorithms create unique logos tailored to your brand',
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: 'Custom Styling',
    description: 'Fine-tune colors, fonts, and layouts to match your vision',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Instant Results',
    description: 'Generate professional logos in seconds, not days',
  },
  {
    icon: <Download className="w-6 h-6" />,
    title: 'Easy Export',
    description: 'Download your logo in multiple formats and sizes',
  },
];

export function Features() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to create the perfect logo for your brand
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-6 rounded-lg"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 text-primary">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}