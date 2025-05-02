
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-12 mb-8 text-sm text-center text-muted-foreground">
      <div className="flex justify-center items-center mb-4">
        <Button 
          variant="outline" 
          size="sm" 
          className="rounded-full text-xs flex items-center gap-1 px-3 border-dashed"
        >
          <Link size={12} />
          <span>Powered by LinkCraft</span>
        </Button>
      </div>
      <div>
        © {new Date().getFullYear()} LinkCraft Persona. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
