
"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { faqs,staticData } from "@/constants/data";



export default function FAQ() {
  return (
    <section id="faq" className="container mx-auto max-w-3xl py-24 sm:py-32">
      <h2 className="mb-4 text-3xl font-bold md:text-4xl">
        {staticData.faq_long}
      </h2>

      <Accordion type="single" collapsible className="AccordionRoot w-full">
        {faqs.map(({ question, answer }, index) => (
          <AccordionItem key={index} value={index.toString()}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="mt-4 font-medium">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="border-primary text-primary transition-all hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
