import React from 'react';
import { motion } from 'framer-motion';
import { values, experience } from '../constants';
import aboutImg from '../assets/hero-img.jpg'; // Reusing the professional portrait

const AboutPage = () => {
  return (
    <div className="bg-dark text-white min-h-screen">
      
      {/* 1. About Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none z-0">
          <h1 className="text-[20vw] font-serif leading-none uppercase text-transparent stroke-text opacity-10 tracking-tighter">
            STRATEGY
          </h1>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h2 className="text-primary font-bold uppercase tracking-widest text-sm">About Kane William</h2>
              <h3 className="text-5xl md:text-7xl font-serif leading-tight">
                A LEGAL PARTNER <br /> FOR THE <span className="italic">MODERN</span> <br /> ENTREPRENEUR
              </h3>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <img src={aboutImg} alt="Kane William" className="grayscale contrast-125 rounded-lg border border-white/10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. The Story / Philosophy */}
      <section className="py-24 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-2xl md:text-3xl font-serif leading-relaxed text-gray-200">
            "I spent a decade in high-pressure corporate environments realizing that most business leaders don't need just a lawyer—they need a <span className="text-primary italic">strategic partner</span> who understands the pace of growth."
          </p>
          <div className="mt-12 h-20 w-[1px] bg-primary mx-auto"></div>
        </div>
      </section>

      {/* 3. Core Values Cards */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif mb-16 text-center uppercase tracking-widest">My Philosophy</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 bg-card border border-white/5 rounded-xl hover:border-primary/50 transition duration-500"
              >
                <div className="text-primary text-4xl mb-6 font-serif">0{i + 1}</div>
                <h4 className="text-xl font-bold mb-4 uppercase">{v.title}</h4>
                <p className="text-muted leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Experience Timeline */}
      <section className="py-24 bg-black px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif mb-8 uppercase leading-tight">
                12+ Years <br /> Of Protecting <br /> Growth.
              </h2>
              <p className="text-muted">
                From high-stakes M&A deals to helping tech startups navigate their first round of funding, my journey has been defined by the success of my clients.
              </p>
            </div>
            <div className="space-y-12">
              {experience.map((exp, i) => (
                <div key={i} className="flex gap-8 items-start">
                  <span className="text-primary font-bold text-xl">{exp.year}</span>
                  <div className="pb-8 border-b border-white/10 w-full">
                    <p className="text-lg font-medium text-white uppercase tracking-tight">{exp.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Final CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto bg-primary p-12 md:p-20 text-black">
          <h2 className="text-4xl md:text-5xl font-serif mb-8 uppercase tracking-tighter">Ready to protect your business?</h2>
          <button className="bg-black text-white px-10 py-4 font-bold hover:bg-white hover:text-black transition uppercase">
            Start a Conversation
          </button>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;