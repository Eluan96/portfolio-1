import React from 'react';
import { motion } from 'framer-motion';
import { serviceList, processSteps } from '../constants';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const ServicesPage = () => {
  return (
    <div className="bg-dark text-white min-h-screen">
      
      {/* 1. Services Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none z-0">
          <h1 className="text-[18vw] font-serif leading-none uppercase text-transparent stroke-text opacity-10 tracking-tighter">
            SOLUTIONS
          </h1>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-6">Expertise & Capabilities</h2>
            <h3 className="text-5xl md:text-7xl font-serif leading-tight uppercase max-w-4xl mx-auto">
              Strategic Counsel for Every <span className="italic">Stage</span> of Growth
            </h3>
          </motion.div>
        </div>
      </section>

      {/* 2. Services Grid */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-10 bg-[#0F0F0F] border border-white/5 hover:border-primary/40 transition-all duration-500 group"
            >
              <service.icon className="text-primary mb-8" size={40} strokeWidth={1.5} />
              <h4 className="text-2xl font-serif mb-4 uppercase tracking-tight">{service.title}</h4>
              <p className="text-muted mb-8 leading-relaxed">{service.desc}</p>
              
              <ul className="space-y-3">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                    <CheckCircle2 size={14} className="text-primary opacity-50" />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Our Process (Workflow) */}
      <section className="py-24 bg-black px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h2 className="text-4xl md:text-5xl font-serif uppercase leading-tight">
              The <span className="text-primary italic">Strategy</span> <br /> Behind The Success
            </h2>
            <p className="text-muted max-w-sm mb-2">
              We don't just provide documents. We provide a structured approach to business stability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {processSteps.map((step, i) => (
              <div key={i} className="relative group">
                <div className="text-7xl font-serif text-white/5 group-hover:text-primary/10 transition duration-500 absolute -top-10 -left-4">
                  {step.num}
                </div>
                <div className="relative z-10">
                  <h4 className="text-xl font-bold mb-4 uppercase tracking-widest">{step.title}</h4>
                  <p className="text-muted leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Retainer/Support CTA */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-card border border-white/10 p-10 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-serif mb-6 uppercase">Need ongoing support?</h2>
            <p className="text-muted text-lg">
              Our "Outside General Counsel" retainer packages provide you with priority access to legal strategy for a predictable monthly fee.
            </p>
          </div>
          <button className="bg-white text-black px-10 py-5 font-bold flex items-center gap-4 hover:bg-primary transition whitespace-nowrap">
            View Retainer Plans <ArrowRight size={20} />
          </button>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;