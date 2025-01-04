'use client';

import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full backdrop-blur-lg bg-background/80 z-50 border-b"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center space-x-2"
        >
          <img src="/logo1.jpg" alt="Logo" className="w-10 h-10 rounded-full object-contain" />
          <span className="text-xl font-bold">LogoVerse AI</span>
        </motion.div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost">Features</Button>
          <Button variant="ghost">Pricing</Button>
          <Button variant="ghost">About</Button>
          <ThemeToggle />
          <Button>Get Started</Button>
        </div>
      </div>
    </motion.nav>
  );
}