
import React from 'react';
import Header from '@/components/Header';
import Profile from '@/components/Profile';
import LinkCard from '@/components/LinkCard';
import SocialButtons from '@/components/SocialButtons';
import FeatureBanner from '@/components/FeatureBanner';
import Stats from '@/components/Stats';
import Footer from '@/components/Footer';
import { Twitter, Youtube, Instagram, Globe } from 'lucide-react';

const Index = () => {
  const socialLinks = [
    {
      name: 'Twitter',
      url: 'https://twitter.com',
      icon: <Twitter size={18} />,
      label: 'Follow on Twitter'
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com',
      icon: <Youtube size={18} />,
      label: 'Subscribe on YouTube'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com',
      icon: <Instagram size={18} />,
      label: 'Follow on Instagram'
    },
    {
      name: 'Website',
      url: 'https://example.com',
      icon: <Globe size={18} />,
      label: 'Visit Website'
    }
  ];

  const stats = [
    { label: 'Subscribers', value: '106K' },
    { label: 'Videos', value: '68' },
    { label: 'Projects', value: '24' },
    { label: 'Years', value: '5+' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-lg mx-auto px-4 py-8">
        <Header hasSubscribeButton={true} />
        
        <FeatureBanner 
          title="Learn to build SaaS applications"
          subtitle="Discover the process behind building successful SaaS products"
          buttonText="Enroll in Course"
          buttonUrl="https://example.com/course"
          className="animate-float"
        />
        
        <Profile 
          name="Web Prodigies" 
          username="@webprodigies"
          avatarUrl="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1374&auto=format&fit=crop"
          bio="Helping Web developers quit their 9 - 5 with SaaS."
          subscribers="106K"
          videos="68"
          isVerified={true}
        />
        
        <SocialButtons socialLinks={socialLinks} />
        
        <Stats stats={stats} />
        
        <div className="space-y-3">
          <LinkCard 
            title="SaaS Course" 
            url="https://example.com/saas-course"
            description="Learn how to build and launch your own SaaS application"
            variant="featured"
          />
          
          <LinkCard 
            title="My Website" 
            url="https://example.com"
            description="Portfolio, blog posts, and more"
            variant="default"
          />
          
          <LinkCard 
            title="Premium Newsletter" 
            url="https://example.com/newsletter"
            description="Weekly insights on web development and SaaS"
            variant="highlight"
          />
          
          <LinkCard 
            title="Free Resources" 
            url="https://example.com/resources"
            description="Templates, guides, and code snippets"
            variant="default"
          />
          
          <LinkCard 
            title="Book a Consultation" 
            url="https://example.com/consultation"
            description="Get personalized advice for your project"
            variant="default"
          />
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
