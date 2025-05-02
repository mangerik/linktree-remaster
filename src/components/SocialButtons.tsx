
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
    <div className="flex justify-center gap-3 mb-8">
      <TooltipProvider>
        {socialLinks.map((link) => (
          <Tooltip key={link.name}>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                variant="outline"
                className="rounded-full h-10 w-10 border-2 hover:border-brand-blue hover:text-brand-blue transition-colors duration-200"
                asChild
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
