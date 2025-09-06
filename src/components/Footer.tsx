import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-16 px-6 bg-gradient-to-t from-muted/30 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          {/* Logo */}
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl primary-gradient text-white font-bold text-xl mb-4">
            R
          </div>
          <div className="text-2xl font-bold font-display text-foreground mb-2">
            RotexAI
          </div>
          <p className="text-muted-foreground italic">
            "Breakthrough Solutions. Proven Efficiency."
          </p>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Navigation Links */}
          <div className="flex gap-8">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#solutions" className="text-muted-foreground hover:text-primary transition-colors">
              Solutions
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a 
              href="#" 
              className="p-2 rounded-full bg-muted hover:bg-primary hover:text-white transition-all duration-300 group"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="p-2 rounded-full bg-muted hover:bg-primary hover:text-white transition-all duration-300 group"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="p-2 rounded-full bg-muted hover:bg-primary hover:text-white transition-all duration-300 group"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center text-muted-foreground">
          <p>&copy; 2024 RotexAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};