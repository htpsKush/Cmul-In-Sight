import { Plus } from "lucide-react";

const FAQ = () => {
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
    <section id="faq" className="py-24 px-6 max-w-3xl mx-auto overflow-hidden">
      <div className="mb-12">
        <span className="text-accent text-[10px] font-black uppercase tracking-[0.4em]">FAQ</span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 tracking-tight">
          Still Got Questions?
        </h2>
      </div>

      <div className="border-t border-zinc-900">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-zinc-900 py-5 group cursor-pointer transition-all">
            <div className="flex justify-between items-center gap-6">
              {/* Reduced font size and weight for better hierarchy */}
              <h3 className="text-base md:text-lg font-semibold text-zinc-300 group-hover:text-accent transition-colors">
                {faq.q}
              </h3>
              <Plus className="w-4 h-4 text-zinc-600 group-hover:text-accent transition-all shrink-0" />
            </div>
            <div className="max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500 ease-in-out">
              <p className="mt-4 text-zinc-500 text-sm leading-relaxed">
                {faq.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;