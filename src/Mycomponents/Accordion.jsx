"use client"
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do you accept insurance?",
    answer: "No, but a superbill is provided for self-submission.",
  },
  {
    question: "What are your fees?",
    answer: " $200 individual session , $240 couples session",
  },
  {
    question: "Are online sessions available?",
    answer: "Yes—all virtual sessions via Zoom.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "24-hour notice required.",
  },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#c7e7ef] text-[#1E4145] px-12 py-12 w-full mx-auto">
      <h2 className="text-5xl font-bold  mb-8">
        Frequently Asked Questions
      </h2>

      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-500 mb-4">
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-center text-2xl text-left font-semibold py-4
            hover:opacity-70 transition-opacity duration-200 cursor-pointer
            "
          >
            {faq.question}
            <ChevronDown
              className={`transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
              size={20}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className=" text-xl leading-relaxed pb-4 pr-2">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
