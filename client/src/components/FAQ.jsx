import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    { q: "What types of businesses do you work with?", a: "I work with startups, small to mid-sized companies, and established enterprises." },
    { q: "Do you offer flat-fee pricing?", a: "Yes, for specific services like business formation and contract reviews." },
     { q: "What types of businesses do you work with?", a: "I work with startups, small to mid-sized companies, and established enterprises." },
    { q: "Do you offer flat-fee pricing?", a: "Yes, for specific services like business formation and contract reviews." },
    // Add more as per design
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="bg-dark py-24 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-serif text-white text-center mb-16">FREQUENTLY ASKED QUESTIONS</h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-white/10 pb-4">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex justify-between items-center text-left py-4 text-white hover:text-primary transition"
                            >
                                <span className="text-lg font-medium">{faq.q}</span>
                                {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden text-muted"
                                    >
                                        <p className="pb-4">{faq.a}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;