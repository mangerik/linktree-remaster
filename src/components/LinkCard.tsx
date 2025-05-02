
import React from 'react';
import { cn } from "@/lib/utils";
import { ArrowRight } from 'lucide-react';

interface LinkCardProps {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'featured' | 'highlight';
  onClick?: () => void;
}

const LinkCard = ({ 
  title, 
  url, 
  description, 
  icon, 
  variant = 'default', 
  onClick 
}: LinkCardProps) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      onClick={handleClick}
      className={cn(
        "group relative flex items-center px-6 py-4 rounded-lg transition-all duration-300 mb-3 hover:translate-y-[-2px]",
        {
          'bg-white text-brand-darkGray shadow-md hover:shadow-lg': variant === 'default',
          'bg-blue-gradient text-white shadow-lg shadow-blue-300/30 hover:shadow-blue-300/40': variant === 'featured',
          'bg-purple-gradient text-white shadow-lg shadow-purple-300/30 hover:shadow-purple-300/40': variant === 'highlight',
        }
      )}
    >
      {icon && (
        <div className="mr-4 text-xl">
          {icon}
        </div>
      )}
      <div className="flex-1">
        <div className="font-bold">{title}</div>
        {description && (
          <div className={cn("text-sm", {
            "text-gray-500": variant === 'default',
            "text-blue-100": variant === 'featured',
            "text-purple-100": variant === 'highlight',
          })}>
            {description}
          </div>
        )}
      </div>
      <div className={cn(
        "opacity-0 transform translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300",
        {
          "text-brand-blue": variant === 'default',
          "text-white": variant === 'featured' || variant === 'highlight',
        }
      )}>
        <ArrowRight size={18} />
      </div>
    </a>
  );
};

export default LinkCard;
