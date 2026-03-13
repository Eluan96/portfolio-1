import { MessageSquare, ShieldCheck, Zap, Globe, ArrowUpRight, Sparkle, BringToFront, Sparkles, LoaderPinwheel } from 'lucide-react';
import { Shield, Briefcase, Scale, FileText, TrendingUp } from 'lucide-react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

export const navLinks = [
  { name: "Home", href: "#" },
  { name: "About Me", href: "#" },
  { name: "Services", href: "#" },
  { name: "Why Choose Me", href: "#" },
];

export const logos = [
  {name: "45 Degrees°", href: "#", icon: ArrowUpRight },
  {name: "Acme Corp", href: "#", icon: Sparkle },
  {name: "Codecraft_", href: "#", icon: BringToFront },
  {name: "Convergence", href: "#", icon: Sparkles },
  {name: "Lightspeed", href: "#", icon: Zap },
  {name: "Luminary", href: "#", icon: LoaderPinwheel },
];

export const stats = [
  { label: "Business Formation & Structuring", value: "120+" },
  { label: "Mergers & Acquisitions (M&A)", value: "18+" },
  { label: "Corporate Governance & Compliance", value: "6000+" },
];

export const features = [
  {
    title: "Quick Turnarounds",
    desc: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page.",
    icon: MessageSquare
  },
  {
    title: "Transparent, Fixed Pricing Options",
    desc: "Have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    icon: ShieldCheck
  },
  {
    title: "Flexible Support",
    desc: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page.",
    icon: Zap
  },
  {
    title: "Industry Experience in Startups",
    desc: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page.",
    icon: Globe
  }
];

export const blogs = [
  {
    tag: "Growth-Oriented",
    title: "Startup Law Essentials",
    desc: "How do you create compelling presentations that wow your colleagues?",
    author: "Olivia Rhye",
    date: "20 Jan 2025",
    img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80"
  },
  {
    tag: "Professional",
    title: "Legal Insights for Business Leaders",
    desc: "Linear helps streamline software projects, sprints, tasks, and bug tracking.",
    author: "Phoenix Baker",
    date: "19 Jan 2025",
    img: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=800&q=80"
  },
  {
    tag: "Approachable",
    title: "Smart Law for Smarter Business",
    desc: "The rise of RESTful APIs has been met by a rise in tools for creating and testing.",
    author: "Lana Steiner",
    date: "18 Jan 2025",
    img: "https://images.unsplash.com/photo-1453941403708-341ff5b4125f?auto=format&fit=crop&w=800&q=80"
  }
];

export const values = [
  {
    title: "Solution-First",
    desc: "I don't just identify legal problems; I provide business solutions that move the needle."
  },
  {
    title: "No-Nonsense",
    desc: "Clear communication without the legal jargon. You get direct, actionable advice every time."
  },
  {
    title: "Growth-Centric",
    desc: "Your legal strategy should fuel your growth, not hinder it. I build frameworks for scale."
  }
];

export const experience = [
  { year: "2012", event: "Started at Top-Tier Corporate Law Firm" },
  { year: "2016", event: "Senior Counsel for International Tech Group" },
  { year: "2020", event: "Founded K. William Strategic Legal" },
  { year: "Today", event: "Partnering with 500+ Growing Businesses" }
];


export const serviceList = [
  {
    title: "Business Formation",
    desc: "Structuring your entity for tax efficiency and long-term protection. From LLCs to C-Corps.",
    icon: Briefcase,
    details: ["Entity Selection", "Operating Agreements", "Bylaws & Governance"]
  },
  {
    title: "M&A Advisory",
    desc: "Navigating the complexities of buying or selling a business with strategic due diligence.",
    icon: Zap,
    details: ["Asset Purchase", "Equity Transfers", "Due Diligence"]
  },
  {
    title: "Contract Strategy",
    desc: "Drafting and negotiating contracts that don't just protect you, but facilitate growth.",
    icon: FileText,
    details: ["Master Service Agreements", "Licensing", "Vendor Contracts"]
  },
  {
    title: "IP Protection",
    desc: "Securing your most valuable assets through trademarks, copyrights, and trade secret strategy.",
    icon: Shield,
    details: ["Trademarks", "IP Licensing", "Brand Protection"]
  },
  {
    title: "Outside Gen. Counsel",
    desc: "Ongoing legal support for growing companies that aren't ready for a full-time legal department.",
    icon: Scale,
    details: ["Board Advisory", "Risk Management", "Compliance"]
  },
  {
    title: "Equity & Fundraising",
    desc: "Legal frameworks for raising capital, from seed rounds to series funding and private equity.",
    icon: TrendingUp,
    details: ["Cap Table Management", "Convertible Notes", "SAFE Agreements"]
  }
];

export const processSteps = [
  { num: "01", title: "Discovery", desc: "We analyze your current business structure and identify immediate risks." },
  { num: "02", title: "Strategy", desc: "A tailored legal roadmap is designed to support your specific growth goals." },
  { num: "03", title: "Execution", desc: "We implement the frameworks, draft the documents, and secure your deals." }
];



export const contactDetails = [
  {
    icon: Mail,
    title: "Email Me",
    value: "hello@kanewilliam.com",
    link: "mailto:hello@kanewilliam.com"
  },
  {
    icon: Phone,
    title: "Call Directly",
    value: "+1 (555) 890-3452",
    link: "tel:+15558903452"
  },
  {
    icon: MapPin,
    title: "Office",
    value: "123 Legal Plaza, Manhattan, NY",
    link: "#"
  }
];

export const socials = [
  { icon: Linkedin, link: "#" },
  { icon: Twitter, link: "#" },
  { icon: Instagram, link: "#" }
];