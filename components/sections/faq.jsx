'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the AI logo generation work?",
    answer: "Our AI analyzes your brand description and preferences, then uses advanced algorithms to generate unique logo designs that match your requirements. The process combines design principles with machine learning to create professional results."
  },
  {
    question: "Can I modify the generated logos?",
    answer: "Yes! All generated logos can be customized using our intuitive editor. You can adjust colors, fonts, layouts, and other elements to perfect your design."
  },
  {
    question: "What file formats do I get?",
    answer: "Depending on your plan, you'll receive your logo in various formats including PNG, JPG, SVG, and AI files. This ensures you can use your logo across different platforms and media."
  },
  {
    question: "Do I own the rights to my logo?",
    answer: "Yes, you receive full commercial rights to your generated logo once you purchase it. You can use it for any commercial or personal purpose."
  }
];

export function FAQ() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container px-4 mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">Find answers to common questions about LogoVerse AI</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}