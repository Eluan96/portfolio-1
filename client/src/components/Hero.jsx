import { motion } from 'framer-motion';
import { Phone, ArrowDown } from 'lucide-react';
import heroImg from "../assets/hero-img-Photoroom.png";

const Hero = () => {
    return (
        <section className="relative min-h-screen bg-[#0A0A0A] flex items-center overflow-hidden">

            {/* 1. Large Hollow Background Text - Positioned behind everything */}
            <div
                className="absolute top-[12%] left-1/2 -translate-x-1/2 w-full text-center pointer-events-none z-0 pt-20"
                style={{
                    WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 40%)',
                    maskImage: 'linear-gradient(to top, transparent 0%, black 40%)'
                }}
            >
                <h1 className="text-[12vw] xl:text-[11vw] font-serif leading-none uppercase text-transparent stroke-text opacity-50 tracking-[-0.01em] scale-y-[2] transform-gpu">
                    BENJAMIN SILIQUE
                </h1>
            </div>

            {/* 2. Hero Image - Center bottom absolute */}
            <div className="absolute bottom-0 left-1/2 -translate-x-[45%] w-full max-w-[750px] z-10 pointer-events-none flex justify-center">
                <motion.img
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    src={heroImg}
                    alt="Kane William"
                    className="w-full h-auto max-h-[88vh] object-contain object-bottom grayscale-image"
                    style={{
                        WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 15%), linear-gradient(to left, transparent 0%, black 10%, black 90%, transparent 100%)',
                        WebkitMaskComposite: 'source-in',
                        maskImage: 'linear-gradient(to top, transparent 0%, black 15%), linear-gradient(to left, transparent 0%, black 10%, black 90%, transparent 100%)',
                        maskComposite: 'intersect'
                    }}
                />
            </div>

            {/* 3. Content Container */}
            <div className="relative z-20 max-w-7xl mx-auto px-6 w-full h-full flex items-center min-h-screen pt-100 px-20">
                <div className="grid lg:grid-cols-2 items-center w-full">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-white z-20 pt-10"
                    >
                        <h2 className="text-2xl sm:text-2xl md:text-[2.8rem] lg:text-[2.2rem] font-serif mb-8 leading-[1.1] tracking-wide uppercase shadow-sm">
                            Trusted Legal <br /> Counsel For <br /> Growing <br /> Businesses
                        </h2>
                        <p className="text-[#A1A1AA] text-sm sm:text-base md:text-lg mb-10 max-w-[320px] leading-relaxed opacity-90">
                            Strategic legal solutions tailored to protect your company, mitigate risk, and fuel your growth.
                        </p>
                        <button className="bg-[#E2FF31] text-black px-8 py-4 font-semibold flex items-center gap-3 hover:bg-white transition-colors duration-300 w-fit text-sm md:text-base">
                            <Phone size={18} fill="black" /> Schedule a Free Consultation
                        </button>
                    </motion.div>

                    {/* Right Content - Circular Badge */}
                    <div className="hidden lg:flex justify-end items-center relative h-full">
                        <motion.div
                            className="absolute right-0 top-1/2 -translate-y-[40%] z-30 mr-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <div className="relative w-40 h-40 flex items-center justify-center">
                                {/* Rotating Text */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                    className="absolute w-full h-full"
                                >
                                    <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                                        <path
                                            id="circlePathHero"
                                            d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                                            fill="transparent"
                                        />
                                        <text className="text-[10px] uppercase font-serif fill-white tracking-[0.18em]">
                                            <textPath xlinkHref="#circlePathHero" startOffset="0%">
                                                SOLUTIONS • BUSINESS-DRIVEN • LEGAL •
                                            </textPath>
                                        </text>
                                    </svg>
                                </motion.div>
                                {/* Center Arrow */}
                                <ArrowDown className="text-white w-8 h-8 opacity-70" strokeWidth={1} />
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;