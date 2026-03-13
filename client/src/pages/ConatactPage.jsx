import React from 'react';
import { motion } from 'framer-motion';
import { contactDetails, socials } from '../constants';
import { Send } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="bg-dark text-white min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="relative pt-40 pb-16 overflow-hidden">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none z-0">
          <h1 className="text-[18vw] font-serif leading-none uppercase text-transparent stroke-text opacity-10 tracking-tighter">
            CONNECT
          </h1>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-6">Contact</h2>
            <h3 className="text-5xl md:text-7xl font-serif leading-tight uppercase">
              Let’s Secure Your <br /> <span className="italic">Business Future</span>
            </h3>
          </motion.div>
        </div>
      </section>

      {/* 2. Main Contact Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-8">
              {contactDetails.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-6 group cursor-pointer"
                >
                  <div className="bg-white/5 p-4 rounded-lg group-hover:bg-primary transition-colors duration-300">
                    <item.icon className="text-white group-hover:text-black" size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm uppercase font-bold tracking-widest mb-1">{item.title}</p>
                    <p className="text-xl font-medium group-hover:text-primary transition-colors">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="pt-12 border-t border-white/10">
              <p className="text-sm uppercase font-bold tracking-widest text-gray-500 mb-6">Follow My Insights</p>
              <div className="flex gap-4">
                {socials.map((soc, i) => (
                  <a key={i} href={soc.link} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                    <soc.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 bg-[#0F0F0F] border border-white/5 p-8 md:p-12 rounded-2xl"
          >
            <form className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs uppercase font-bold tracking-widest text-gray-400">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-primary transition-colors text-white placeholder:text-gray-700"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase font-bold tracking-widest text-gray-400">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@company.com"
                  className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-primary transition-colors text-white placeholder:text-gray-700"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs uppercase font-bold tracking-widest text-gray-400">Subject / Service</label>
                <select className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-primary transition-colors text-white appearance-none cursor-pointer">
                  <option className="bg-dark">Business Formation</option>
                  <option className="bg-dark">M&A Advisory</option>
                  <option className="bg-dark">Contract Review</option>
                  <option className="bg-dark">General Counsel</option>
                </select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs uppercase font-bold tracking-widest text-gray-400">Your Message</label>
                <textarea 
                  rows="4"
                  placeholder="Tell me about your project or legal needs..."
                  className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-primary transition-colors text-white placeholder:text-gray-700 resize-none"
                ></textarea>
              </div>
              <div className="md:col-span-2 pt-4">
                <button className="w-full md:w-auto bg-primary text-black px-10 py-4 font-bold uppercase flex items-center justify-center gap-3 hover:bg-white transition-all group">
                  Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </section>

      {/* 3. Simple Map / Location Graphic */}
      <section className="h-[400px] w-full grayscale opacity-50 contrast-125 border-y border-white/5">
        {/* Replace with an actual Google Map iframe or a stylized image */}
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center flex items-center justify-center">
            <div className="bg-black/80 backdrop-blur-md p-6 border border-white/10 text-center">
                <p className="font-serif italic text-lg text-primary">K. William Strategic Legal</p>
                <p className="text-xs uppercase tracking-widest text-gray-400">Manhattan Office</p>
            </div>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;