import { features } from '../constants';
import { motion } from 'framer-motion';

const Features = () => (
  <section className="bg-dark py-24 px-6 border-t border-white/5 px-40">
    <div className="max-w-7xl mx-auto text-center mb-20">
      <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">NOT JUST LEGAL ADVICE — BUSINESS <br/> STRATEGY WITH LEGAL CLARITY</h2>
      <p className="text-muted max-w-2xl mx-auto">With over 12 years of experience in corporate and commercial law, I help business leaders make confident decisions.</p>
    </div>

    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
      {features.map((item, i) => (
        <motion.div 
          key={i}
          whileHover={{ y: -10 }}
          className="flex gap-6 p-8 rounded-2xl bg-card border border-white/5 hover:border-primary/50 transition"
        >
          <div className="bg-white/10 p-4 rounded-xl h-fit">
            <item.icon className="text-white" size={28} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
            <p className="text-muted leading-relaxed">{item.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);
export default Features;