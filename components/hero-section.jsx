'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { Input } from './ui/input';
import { useState } from 'react';
import Link from 'next/link';

export function HeroSection() {
  const [logoTitle, setLogoTitle] = useState('');
  return (
    <div className="min-h-screen flex items-center justify-center pt-16">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">AI-Powered Logo Generation</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Create stunning logos with{' '}
              <span className="text-primary">artificial intelligence</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Transform your brand identity with our cutting-edge AI logo generator.
              Create unique, professional logos in seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={'/create?title='+ logoTitle}>
              <Button size="lg" className="group">
                Start Creating
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              </Link>
              <Input  className="w-3/4 bg-slate-900" placeholder="Enter your prompt" 
              onChange={(event)=> setLogoTitle(event.target.value)} />
             
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80"
                alt="AI-generated logos showcase"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-background/50 to-transparent" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-8 -left-8 bg-card p-4 rounded-lg shadow-lg"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Instant Generation</p>
                  <p className="text-sm text-muted-foreground">Create in seconds</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}