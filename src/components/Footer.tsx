import Link from "next/link";

const Footer = () => {
    return (
        <footer id="contact" className="py-20 px-6 border-t border-gray-100 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center gap-1.5 mb-4">
                            <span className="text-sm font-body text-muted-foreground tracking-wide">nerdtech</span>
                            <span className="text-xl font-display font-bold text-blue-500">Digital.</span>
                        </Link>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            We design, develop, brand, and market digital products that help businesses grow with confidence.
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-sm font-display font-semibold text-black mb-4 uppercase tracking-wider">
                            Services
                        </h4>
                        <ul className="space-y-3">
                            {["Brand Strategy", "Brand Identity", "Storytelling", "Social Media Marketing"].map((item) => (
                                <li key={item}>
                                    <Link href="/services" className="text-sm text-muted-foreground hover:text-blue-400 transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Solutions */}
                    <div>
                        <h4 className="text-sm font-display font-semibold text-black mb-4 uppercase tracking-wider">
                            Solutions
                        </h4>
                        <ul className="space-y-3">
                            {["Web Design & Development", "App Design & Development", "Custom Softwares", "CRM & ERP"].map((item) => (
                                <li key={item}>
                                    <Link href="/services" className="text-sm text-muted-foreground hover:text-blue-400 transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-sm font-display font-semibold text-black mb-4 uppercase tracking-wider">
                            Company
                        </h4>
                        <ul className="space-y-3">
                            {[
                                { label: "Who We Are", href: "/about" },
                                { label: "Our Work", href: "/portfolio" },
                                { label: "Contact", href: "/contact" },
                            ].map((item) => (
                                <li key={item.label}>
                                    <Link href={item.href} className="text-sm text-muted-foreground hover:text-blue-400 transition-colors">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-muted-foreground">
                        © 2026 nerdtech Digital. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        {["Privacy", "Terms"].map((item) => (
                            <a key={item} href="#" className="text-xs text-muted-foreground hover:text-blue-400 transition-colors">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
