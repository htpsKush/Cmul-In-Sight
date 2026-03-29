"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "How does CMUL-IN-SIGHT maintain independence?",
      a: "We are not influenced by political factions, administrative pressure, or personal interests. Our commitment is strictly to principles and verified documentation, not popularity."
    },
    {
      q: "What distinguishes you from a campus gossip page?",
      a: "CMUL-IN-SIGHT is not a space for reckless accusations or sensationalism. We believe visibility must serve a purpose; we reject outrage culture and personality-driven narratives in favor of structured reporting."
    },
    {
      q: "Is the platform a tool for political campaigning?",
      a: "No. CMUL-IN-SIGHT is explicitly not a political campaign tool or a propaganda outlet. We exist as a reform-driven institutional bridge, not a platform for political factions."
    },
    {
      q: "How do you handle unverified information?",
      a: "Our philosophy is that accuracy outweighs speed. We believe institutions grow stronger when information is verified before it is amplified. If it isn't verified, it isn't published."
    },
    {
      q: "What is your stance on institutional leadership?",
      a: "We aim to strengthen institutions through structured dialogue. While we maintain accountability, we ensure that leadership is treated with fairness and respect in every report."
    }
  ];

  return (
    <section id="faq" className="py-24 px-6 max-w-3xl mx-auto overflow-hidden bg-white">
      <div className="mb-12">
        <span className="text-accent text-[10px] font-black uppercase tracking-[0.4em]">FAQ</span>
        {/* Changed text-white to text-black */}
        <h2 className="text-3xl md:text-4xl font-bold text-black mt-4 tracking-tight">
          Still Got Questions?
        </h2>
      </div>

      {/* Changed border-zinc-800 to border-zinc-200 */}
      <div className="border-t border-zinc-200">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          
          return (
            <div 
              key={index} 
              /* Changed border-zinc-800 to border-zinc-200 */
              className="border-b border-zinc-200 py-5 cursor-pointer transition-all"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center gap-6">
                {/* Changed text-zinc-200 to text-zinc-800 */}
                <h3 className={`text-base md:text-lg font-semibold transition-colors duration-300 ${isOpen ? 'text-accent' : 'text-zinc-800 hover:text-accent'}`}>
                  {faq.q}
                </h3>
                
                <div className="shrink-0">
                  {isOpen ? (
                    <Minus className="w-4 h-4 text-accent transition-transform duration-300" />
                  ) : (
                    /* Changed text-zinc-500 to text-zinc-400 */
                    <Plus className="w-4 h-4 text-zinc-400 transition-transform duration-300" />
                  )}
                </div>
              </div>

              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen ? "max-h-60 opacity-100 mt-4" : "max-h-0 opacity-0"
                }`}
              >
                {/* Changed text-zinc-400 to text-zinc-600 */}
                <p className="text-zinc-600 text-sm leading-relaxed pb-2">
                  {faq.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;