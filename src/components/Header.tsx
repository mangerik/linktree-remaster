
import React from 'react';
import { Button } from "@/components/ui/button";

interface HeaderProps {
  hasSubscribeButton?: boolean;
}

const Header = ({ hasSubscribeButton = true }: HeaderProps) => {
  return (
    <header className="flex justify-between items-center mb-8 w-full">
      <div className="text-sm md:text-base flex items-center">
        <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1.5 rounded-lg font-bold">LinkCraft</span>
        <span className="ml-1.5 font-medium text-slate-800">Persona</span>
      </div>
      
      {hasSubscribeButton && (
        <Button 
          variant="secondary"
          size="sm"
          className="font-medium bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-full px-4"
        >
          Subscribe
        </Button>
      )}
    </header>
  );
};

export default Header;
