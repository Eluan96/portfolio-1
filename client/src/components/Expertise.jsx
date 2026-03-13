import { motion } from 'framer-motion';
import expertiseImg from "../assets/hero-img-Photoroom.png"; // Replace with your image path

const Expertise = () => {
  return (
    <section className="bg-black text-white py-24 px-6 overflow-hidden px-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* The image should have a subtle fade to black on the edges to match the design */}
          <div className="relative group">
            <img
              src={expertiseImg}
              alt="Expertise"
              className="w-full h-auto grayscale brightness-90 contrast-125 object-cover rounded-sm"
            />
            {/* Subtle Gradient Overlay to blend with background if needed */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent"></div>
          </div>
        </motion.div>

        {/* Right Side: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col space-y-8"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] uppercase tracking-tight">
            Business Law <br />
            Backed by Real- <br />
            World Expertise
          </h2>

          <div className="space-y-6 max-w-xl">
            <p className="text-lg md:text-xl text-gray-300 font-medium leading-relaxed">
              My mission is simple: deliver clear, commercially sound 
              legal advice that empowers you to grow with confidence.
            </p>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed opacity-80">
              I’ve worked with clients across industries — from early-stage 
              tech ventures and digital agencies to manufacturing firms and 
              private equity groups. Whether you’re forming a company, 
              negotiating a high-stakes contract, or closing an acquisition, 
              I’ll guide you with precision, pragmatism, and responsiveness.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Expertise;