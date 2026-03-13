import { motion } from 'framer-motion';
import { stats } from '../constants';
import { ArrowRight } from 'lucide-react';

const Mission = () => (
    <section className="bg-dark py-24 px-6">
        <div className="max-w-7xl mx-auto text-center mb-32 px-6 md:px-20 lg:px-40">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-5xl font-serif text-white mb-8 tracking-wide"
            >
                TRUSTED. EXPERIENCED. STRATEGIC.
            </motion.h2>
            <p className="max-w-3xl mx-auto text-muted text-lg leading-relaxed">
                With over 12 years of experience in corporate and commercial law, I help business leaders make confident decisions. Known for a no-nonsense, solution-first approach.
            </p>
        </div>

        <hr className="border-white/10 mb-20" />

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-start px-6 md:px-10 lg:px-20">
            <div className="space-y-8">
                <h3 className="text-muted uppercase tracking-widest text-sm font-semibold">Comprehensive Corporate Legal Support</h3>
                <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                    WE ACT AS YOUR ON-DEMAND LEGAL PARTNER, OFFERING
                </h2>
                <button className="flex items-center gap-2 bg-white text-black px-6 py-3 font-bold group">
                    Schedule a Call <ArrowRight className="bg-primary p-1 group-hover:translate-x-1 transition" />
                </button>
            </div>

            <div className="divide-y divide-white/10">
                {stats.map((stat, i) => (
                    <div key={i} className="py-8 flex justify-between items-center group cursor-default">
                        <span className="text-muted group-hover:text-white transition max-w-[200px]">{stat.label}</span>
                        <span className="text-6xl font-serif text-white group-hover:text-primary transition">{stat.value}</span>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
export default Mission;