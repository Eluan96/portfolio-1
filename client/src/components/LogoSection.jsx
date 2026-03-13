import { logos } from "../constants";

const LogoSection = () => (
    <div className="bg-dark py-12">
        <div className="mx-auto px-40">
            <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                {logos.map((logo, i) => {
                    const Icon = logo.icon;
                    return (
                        <a key={i} href={logo.href} className="text-white font-semibold flex items-center gap-1 text-lg tracking-tight hover:text-[#E2FF31] transition-colors">
                            <Icon size={20} /> {logo.name}
                        </a>
                    );
                })}
            </div>
        </div>
    </div>
);
export default LogoSection;