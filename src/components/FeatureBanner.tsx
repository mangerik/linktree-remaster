
import React from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface FeatureBannerProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonUrl: string;
  className?: string;
  variant?: 'default' | 'highlight';
}

const FeatureBanner = ({
  title,
  subtitle,
  buttonText,
  buttonUrl,
  className,
  variant = 'default'
}: FeatureBannerProps) => {
  return (
    <div className={cn(
      "relative overflow-hidden rounded-xl p-6 shadow-lg mb-8",
      variant === 'default' ? 'bg-blue-gradient' : 'bg-purple-gradient',
      className
    )}>
      <div className="relative z-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{title}</h2>
        {subtitle && (
          <p className="text-blue-100 mb-4 max-w-md">{subtitle}</p>
        )}
        <Button 
          asChild 
          variant={variant === 'default' ? "secondary" : "default"}
          className="font-medium"
        >
          <a href={buttonUrl} target="_blank" rel="noopener noreferrer">
            {buttonText}
          </a>
        </Button>
      </div>
      <div className="absolute top-0 right-0 -mt-4 -mr-8 opacity-10">
        <div className="w-40 h-40 rounded-full bg-white"></div>
      </div>
      <div className="absolute bottom-0 left-0 -mb-10 -ml-10 opacity-10">
        <div className="w-32 h-32 rounded-full bg-white"></div>
      </div>
    </div>
  );
};

export default FeatureBanner;
