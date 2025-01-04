'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Quote } from 'lucide-react';

export function TestimonialCard({ name, role, image, quote, rating, company }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="bg-card p-8 rounded-xl shadow-lg relative"
    >
      <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
        <Quote className="w-4 h-4 text-primary" />
      </div>
      <div className="flex items-center space-x-4 mb-6">
        <div className="relative w-16 h-16 rounded-full overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-sm text-muted-foreground">{role}</p>
          {company && (
            <p className="text-sm text-primary">{company}</p>
          )}
        </div>
      </div>
      <div className="mb-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={`text-lg ${i < rating ? 'text-yellow-500' : 'text-muted'}`}>
            ★
          </span>
        ))}
      </div>
      <p className="text-muted-foreground italic">&ldquo;{quote}&rdquo;</p>
    </motion.div>
  );
}