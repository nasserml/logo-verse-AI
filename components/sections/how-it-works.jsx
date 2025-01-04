'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Palette, Download } from 'lucide-react';

const steps = [
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Describe Your Vision",
    description: "Tell us about your brand and what you're looking for in a logo"
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "AI Generation",
    description: "Our AI creates multiple unique logo designs based on your input"
  },
  {
    icon: <Download className="w-6 h-6" />,
    title: "Download & Use",
    description: "Choose your favorite design and download in multiple formats"
  }
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground">Create your perfect logo in three simple steps</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-card p-6 rounded-lg relative"
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 text-4xl text-muted-foreground">
                  →
                </div>
              )}
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4 text-primary">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}