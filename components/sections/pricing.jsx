'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "$9",
    features: [
      "5 AI-generated logos",
      "Basic customization",
      "Standard file formats",
      "Email support"
    ]
  },
  {
    name: "Professional",
    price: "$29",
    popular: true,
    features: [
      "20 AI-generated logos",
      "Advanced customization",
      "All file formats",
      "Priority support",
      "Brand guidelines"
    ]
  },
  {
    name: "Enterprise",
    price: "$99",
    features: [
      "Unlimited logos",
      "Full customization",
      "All file formats",
      "24/7 support",
      "Brand guidelines",
      "API access"
    ]
  }
];

export function Pricing() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground">Choose the perfect plan for your needs</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-card p-6 rounded-lg relative ${
                plan.popular ? 'ring-2 ring-primary' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-sm py-1 px-3 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold mb-2">{plan.price}<span className="text-sm text-muted-foreground">/mo</span></div>
              </div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}