
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
      "relative overflow-hidden rounded-xl p-6 shadow-lg mb-8 transform transition-all duration-500 hover:scale-[1.02]",
      variant === 'default' ? 'bg-gradient-to-r from-blue-500 to-blue-600' : 'bg-gradient-to-r from-purple-500 to-pink-500',
      className
    )}>
      <div className="relative z-10">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">{title}</h2>
        {subtitle && (
          <p className="text-blue-100 mb-4 max-w-md text-sm">{subtitle}</p>
        )}
        <Button 
          asChild 
          variant="secondary"
          className={cn("font-medium text-sm rounded-full px-5", {
            "bg-white text-blue-600 hover:bg-blue-50": variant === 'default',
            "bg-white text-purple-600 hover:bg-purple-50": variant === 'highlight',
          })}
        >
          <a href={buttonUrl} target="_blank" rel="noopener noreferrer">
            {buttonText}
          </a>
        </Button>
      </div>
      
      {/* Swift UI style decorative elements */}
      <div className="absolute top-0 right-0 -mt-10 -mr-10 opacity-20">
        <div className="w-40 h-40 rounded-full bg-white"></div>
      </div>
      <div className="absolute bottom-0 left-0 -mb-10 -ml-10 opacity-20">
        <div className="w-32 h-32 rounded-full bg-white"></div>
      </div>
      <div className="absolute bottom-10 right-20 opacity-10">
        <div className="w-16 h-16 rounded-full bg-white"></div>
      </div>
    </div>
  );
};

export default FeatureBanner;
