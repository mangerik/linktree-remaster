
import React from 'react';
import { Button } from "@/components/ui/button";
import { Twitter, Youtube, Instagram, Globe } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  label: string;
}

interface SocialButtonsProps {
  socialLinks: SocialLink[];
}

const SocialButtons = ({ socialLinks }: SocialButtonsProps) => {
  return (
    <div className="flex justify-center gap-4 mb-8">
      <TooltipProvider>
        {socialLinks.map((link, index) => (
          <Tooltip key={link.name}>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                variant="outline"
                className="rounded-full h-11 w-11 bg-white shadow-sm border-slate-100 hover:border-blue-500 hover:text-blue-500 transition-all duration-200 transform hover:scale-110"
                asChild
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                  {link.icon}
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{link.label}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </div>
  );
};

export default SocialButtons;
