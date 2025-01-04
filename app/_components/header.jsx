'use client';

import { Button } from '@/components/ui/button';

import { motion } from 'framer-motion';

export function Header() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full backdrop-blur-lg bg-background/80 z-20 border-b top-0 left-0"
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
          
          <Button>Get Started</Button>
        </div>
      </div>
    </motion.nav>
  );
}