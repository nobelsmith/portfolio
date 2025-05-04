import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Header() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    setIsVisible(latest > 100);
  });

  const handleInternalLink = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b"
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-screen-2xl mx-auto h-16 flex items-center px-4 md:px-6">
        <a 
          href="#hero" 
          onClick={(e) => handleInternalLink(e, "hero")}
          className="font-bold text-xl hover:text-primary transition-colors"
        >
          Nobel Smith
        </a>
        <div className="flex-1" />
        <nav className="flex items-center gap-6">
          <Button variant="ghost" size="sm" asChild>
            <a href="#about" onClick={(e) => handleInternalLink(e, "about")}>About</a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a href="#projects" onClick={(e) => handleInternalLink(e, "projects")}>Projects</a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a href="https://nobelsmith.com" target="_blank" rel="noopener noreferrer">Blog</a>
          </Button>
        </nav>
      </div>
    </motion.header>
  );
} 