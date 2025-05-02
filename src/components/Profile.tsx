
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
    <div className="flex flex-col items-center text-center mb-8">
      <div className="relative">
        <Avatar className="h-24 w-24 border-4 border-white shadow-lg">
          <AvatarImage src={avatarUrl} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        {isVerified && (
          <div className="absolute bottom-0 right-0">
            <Verified className="h-6 w-6" />
          </div>
        )}
      </div>
      
      <h1 className="mt-4 text-2xl font-bold flex items-center gap-2">
        {name}
        {isVerified && <Verified className="inline-block h-5 w-5" />}
      </h1>
      
      <div className="text-muted-foreground">
        {username}
      </div>
      
      <div className="mt-2 mb-4 max-w-xs">
        {bio}
      </div>
      
      <div className="flex gap-4 text-sm text-muted-foreground">
        <div className="flex items-center">
          <span className="font-bold text-foreground">{subscribers}</span>
          <span className="ml-1">subscribers</span>
        </div>
        <div className="h-4 w-px bg-gray-300 mx-1"></div>
        <div className="flex items-center">
          <span className="font-bold text-foreground">{videos}</span>
          <span className="ml-1">videos</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
