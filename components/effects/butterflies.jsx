'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';


export function Butterflies() {
  const [butterflies, setButterflies] = useState([]);

  useEffect(() => {
    const count = 8;
    const newButterflies = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      scale: 0.5 + Math.random() * 0.5,
      rotation: Math.random() * 360,
    }));
    setButterflies(newButterflies);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {butterflies.map((butterfly) => (
        <motion.div
          key={butterfly.id}
          className="absolute"
          initial={{
            left: `${butterfly.x}%`,
            top: `${butterfly.y}%`,
            scale: butterfly.scale,
            rotate: butterfly.rotation,
          }}
          animate={{
            left: [`${butterfly.x}%`, `${(butterfly.x + 20) % 100}%`],
            top: [`${butterfly.y}%`, `${(butterfly.y + 20) % 100}%`],
            rotate: [butterfly.rotation, butterfly.rotation + 360],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="text-primary/20"
          >
            <path
              d="M12 2L8 6L12 10L16 6L12 2Z"
              fill="currentColor"
            />
            <path
              d="M12 14L8 18L12 22L16 18L12 14Z"
              fill="currentColor"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}