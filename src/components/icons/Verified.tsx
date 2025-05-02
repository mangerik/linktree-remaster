
import React from 'react';

export const Verified = ({ className = "" }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="12" fill="#0077ff" />
    <path 
      d="M17.25 8.58L10.06 15.77L6.75 12.46L7.80 11.41L10.06 13.67L16.20 7.53L17.25 8.58Z" 
      fill="white"
    />
  </svg>
);
