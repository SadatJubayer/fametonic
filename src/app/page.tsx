import { HeroSection } from '@/components/hero-section';
import { Navbar } from '@/components/navbar';
import { PromoBar } from '@/components/promo-bar';
import React from 'react';

const HomePage = () => {
  return (
    <main className="flex min-h-screen flex-col">
      <PromoBar />
      <Navbar />
      <HeroSection />
    </main>
  );
};

export default HomePage;
