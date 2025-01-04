'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';



export function BenefitCard({ icon: Icon, title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      whileHover={{ scale: 1.05 }}
      className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
}