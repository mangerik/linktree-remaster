
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
        "group relative flex items-center px-6 py-4 rounded-xl transition-all duration-300 mb-3 hover:translate-y-[-2px]",
        {
          'bg-white text-slate-700 border border-slate-100 shadow-sm hover:shadow-md': variant === 'default',
          'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-300/30 hover:shadow-blue-300/40': variant === 'featured',
          'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-300/30 hover:shadow-purple-300/40': variant === 'highlight',
        }
      )}
    >
      {icon && (
        <div className="mr-4 text-xl">
          {icon}
        </div>
      )}
      <div className="flex-1">
        <div className="font-medium text-base">{title}</div>
        {description && (
          <div className={cn("text-sm", {
            "text-slate-500": variant === 'default',
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
          "text-blue-500": variant === 'default',
          "text-white": variant === 'featured' || variant === 'highlight',
        }
      )}>
        <ArrowRight size={18} />
      </div>
    </a>
  );
};

export default LinkCard;
