
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Verified } from "./icons/Verified";

interface ProfileProps {
  name: string;
  username: string;
  avatarUrl: string;
  bio: string;
  subscribers: string;
  videos: string;
  isVerified?: boolean;
}

const Profile = ({ 
  name, 
  username, 
  avatarUrl, 
  bio, 
  subscribers, 
  videos, 
  isVerified = false 
}: ProfileProps) => {
  return (
    <div className="flex flex-col items-center text-center mb-8 animate-fade-in">
      <div className="relative">
        <Avatar className="h-28 w-28 border-4 border-white shadow-xl rounded-full overflow-hidden">
          <AvatarImage src={avatarUrl} alt={name} className="object-cover" />
          <AvatarFallback className="bg-blue-100 text-blue-800 text-lg font-bold">{name.charAt(0)}</AvatarFallback>
        </Avatar>
        {isVerified && (
          <div className="absolute bottom-1 right-1 bg-white rounded-full p-0.5">
            <Verified className="h-6 w-6" />
          </div>
        )}
      </div>
      
      <h1 className="mt-5 text-2xl font-semibold text-slate-800 flex items-center gap-2">
        {name}
        {isVerified && <Verified className="inline-block h-5 w-5" />}
      </h1>
      
      <div className="text-slate-500 font-medium mt-1">
        {username}
      </div>
      
      <div className="mt-3 mb-5 max-w-xs text-slate-600">
        {bio}
      </div>
      
      <div className="flex gap-6 text-sm">
        <div className="flex flex-col items-center">
          <span className="font-bold text-lg text-slate-800">{subscribers}</span>
          <span className="text-slate-500 text-xs mt-1">subscribers</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-bold text-lg text-slate-800">{videos}</span>
          <span className="text-slate-500 text-xs mt-1">videos</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
