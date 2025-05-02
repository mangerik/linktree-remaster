
import React from 'react';
import { Button } from "@/components/ui/button";

interface HeaderProps {
  hasSubscribeButton?: boolean;
}

const Header = ({ hasSubscribeButton = true }: HeaderProps) => {
  return (
    <header className="flex justify-between items-center mb-8 w-full">
      <div className="text-sm md:text-base flex items-center">
        <span className="bg-brand-blue text-white px-2 py-1 rounded-md font-bold">LinkCraft</span>
        <span className="ml-1 font-semibold">Persona</span>
      </div>
      
      {hasSubscribeButton && (
        <Button 
          variant="secondary"
          size="sm"
          className="font-semibold"
        >
          Subscribe
        </Button>
      )}
    </header>
  );
};

export default Header;
