import React, { useState } from 'react';

const Faq = () => {
  const faqData = [
    { question: "What is autism?", answer: "Autism is a developmental disorder that affects communication and behavior." },
    { question: "What causes autism?", answer: "The exact cause of autism is unknown, but it is believed to involve a combination of genetic and environmental factors." },
    { question: "How is autism diagnosed?", answer: "Autism is typically diagnosed through a comprehensive evaluation by a healthcare professional, which may include assessments of behavior, communication, and developmental history." },
    { question: "What therapies are available for individuals with autism?", answer: "There are various therapies available for individuals with autism, including behavioral therapy, speech therapy, occupational therapy, and social skills training." },
    { question: "How common is autism?", answer: "Autism is relatively common, with prevalence rates varying depending on the population studied and diagnostic criteria used." },
    { question: "Can individuals with autism lead independent lives?", answer: "With appropriate support and interventions, many individuals with autism can lead independent and fulfilling lives." },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAnswer = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="flex flex-col items-center justify-center h-full  pb-24">
      <div className="w-full md:w-2/3 lg:w-1/2 px-8 py-12">
        {/* Heading */}
        <h2 className="text-2xl lg:text-4xl font-bold mb-4 text-center">
          Frequently asked
          <span className="text-blue-400"> questions</span>
        </h2>
        
        {/* Paragraph */}
        <p className="text-gray-600 mb-6 text-center">Do you need some help with something or do you have questions on some features?</p>
        
        {/* FAQ Container */}
        <div className="bg-gray-50 shadow-md rounded-lg border border-blue-100 p-6">
          {/* FAQ Questions */}
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="flex flex-col border-b border-gray-200 py-6"
            >
              <div className="flex items-center justify-between">
                <p className="text-gray-800 font-bold">{faq.question}</p>
                <button className="text-blue-500 focus:outline-none" onClick={() => toggleAnswer(index)}>+</button>
              </div>
              {expandedIndex === index && <p className="text-gray-800">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
