'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export function ParallaxImages() {
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y3 = useTransform(scrollY, [0, 1000], [0, 100]);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10">
      <motion.div style={{ y: y1 }} className="absolute top-[20%] left-[10%] w-48 h-48">
        <Image
          src="https://images.unsplash.com/photo-1626785774625-8a0e6e14fb4a?auto=format&fit=crop&q=80"
          alt="Logo Design"
          fill
          className="object-cover rounded-2xl opacity-20"
        />
      </motion.div>
      <motion.div style={{ y: y2 }} className="absolute top-[40%] right-[10%] w-64 h-64">
        <Image
          src="https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80"
          alt="Creative Design"
          fill
          className="object-cover rounded-2xl opacity-20"
        />
      </motion.div>
      <motion.div style={{ y: y3 }} className="absolute top-[60%] left-[20%] w-56 h-56">
        <Image
          src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&q=80"
          alt="AI Technology"
          fill
          className="object-cover rounded-2xl opacity-20"
        />
      </motion.div>
    </div>
  );
}