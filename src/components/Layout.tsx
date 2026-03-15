import { Outlet, Link, useLocation } from "react-router-dom";
import { Menu, X, Linkedin, Mail, Phone } from "lucide-react";
import React, { useState, useEffect } from "react";
import { cn } from "../lib/utils";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "לאנשים פרטיים", href: "/coaching" },
    { name: "לחברות וארגונים", href: "/management" },
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-200 border-b border-light-gray",
      isScrolled ? "shadow-sm" : ""
    )}>
      <div className="max-w-[1000px] mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center z-50 mix-blend-multiply">
          <img 
            src="/logo3.png" 
            alt="עפר שני - קואצ'ינג וייעוץ" 
            className="h-16 sm:h-20 object-contain"
            onError={(e) => {
              e.currentTarget.src = "https://ofer-shani.com/logo3.png";
            }}
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-[16px] font-medium text-deep-navy hover:text-sky-blue transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="#contact"
            onClick={handleContactClick}
            className="text-[16px] font-medium text-deep-navy hover:text-sky-blue transition-colors cursor-pointer"
          >
            צור קשר
          </a>
        </nav>

        <button
          className="md:hidden z-50 text-deep-navy p-2 -mr-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isMenuOpen && (
          <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 pt-20">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-2xl font-medium text-deep-navy"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="#contact"
              onClick={handleContactClick}
              className="text-2xl font-medium text-deep-navy"
            >
              צור קשר
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

export function Button({ variant = "primary-blue", href, className, children, ...props }: any) {
  const baseClasses = "inline-flex items-center justify-center rounded-lg px-8 py-3.5 text-[16px] md:text-[17px] font-medium transition-colors duration-200 text-center";
  const variants: any = {
    "primary-blue": "bg-sky-blue text-white hover:bg-sky-blue-hover",
    "primary-navy": "bg-deep-navy text-white hover:bg-deep-navy-hover",
    whatsapp: "bg-whatsapp text-white hover:bg-[#20bd5a]",
    outline: "bg-transparent text-deep-navy border-[1.5px] border-deep-navy hover:bg-gray-50",
  };

  const classes = cn(baseClasses, variants[variant], className);

  if (href) {
    if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
      return (
        <a 
          href={href} 
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

function ContactSection({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const isDark = variant === "dark";

  return (
    <section id="contact" className={cn(
      "py-12 md:py-20 px-6 text-center",
      isDark ? "bg-deep-navy text-white" : "bg-warm-white text-deep-navy"
    )}>
      <div className="max-w-[1000px] mx-auto flex flex-col items-center">
        <h2 className={cn("mb-3", isDark ? "text-white" : "text-deep-navy")}>
          {isDark ? "רוצים לדבר? אני כאן." : "הצעד הראשון מתחיל כאן"}
        </h2>
        <p className={cn("text-[15px] mb-8", isDark ? "text-white/70" : "text-deep-navy/70")}>
          פגישות פרונטליות (אזור מזכרת בתיה) או בזום
        </p>
        
        <Button 
          variant="whatsapp" 
          href="https://wa.me/972545422634" 
          className="mb-12 flex items-center gap-2"
        >
          <span>דברו איתי בוואטסאפ</span>
          <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        </Button>

        <div className={cn(
          "flex flex-wrap justify-center gap-6 md:gap-10",
          isDark ? "text-white/85" : "text-deep-navy/85"
        )}>
          <a href="tel:+972545422634" className="flex items-center gap-2 hover:opacity-80 transition-opacity" dir="ltr">
            <Phone size={18} />
            <span className="font-medium">054-5422634</span>
          </a>
          <a href="mailto:shani.ofer@gmail.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Mail size={18} />
            <span className="font-medium">shani.ofer@gmail.com</span>
          </a>
          <a href="https://www.linkedin.com/in/ofer-shani/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Linkedin size={18} />
            <span className="font-medium">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <ContactSection variant={isHome ? "dark" : "light"} />
    </div>
  );
}
