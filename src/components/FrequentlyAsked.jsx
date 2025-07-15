import React, { useState } from "react";

const faqData = [
  {
    question: "What is Be-A-Dev?",
    answer:
      "Be-A-Dev is an interactive web development learning platform designed to help you master front-end, back-end, and full-stack development through practical projects, quizzes, and certificates.",
  },
  {
    question: "Do I need prior coding experience?",
    answer:
      "No! Be-A-Dev is beginner-friendly. We start from the basics and guide you step by step to become a professional developer.",
  },
  {
    question: "Will I receive a certificate?",
    answer:
      "Yes, upon successfully completing our course modules and assessments, you will receive a verifiable certificate to showcase your skills.",
  },
  {
    question: "Can I track my learning progress?",
    answer:
      "Absolutely! Our platform provides progress tracking so you always know how far you've come and what's next in your journey.",
  },
  {
    question: "Is there a community or support system?",
    answer:
      "Yes, Be-A-Dev offers a supportive learner community and dedicated mentor assistance to help you overcome challenges.",
  },
];

const FrequentlyAsked = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className=" pt-20">
      <h2
        data-aos="fade-up"
        className="text-3xl md:text-4xl font-bold text-center mb-6"
      >
        Frequently Asked Questions
      </h2>
      <div data-aos="fade-up" className="space-y-4">
        {faqData.map((faq, index) => (
          <button
            key={index}
            onClick={() => toggleFAQ(index)}
            className="w-full flex flex-col text-left font-medium text-lg border border-gray-300 rounded-lg p-4 shadow-sm transition-all duration-300"
          >
            <div className="flex justify-between">
              {faq.question}
              <span className="ml-2 text-xl">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && <p className="mt-3">{faq.answer}</p>}
          </button>
        ))}
      </div>
    </section>
  );
};

export default FrequentlyAsked;
