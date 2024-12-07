import React from 'react';
import { AboutHero } from '../components/about/AboutHero';
import { Mission } from '../components/about/Mission';
import { Founder } from '../components/about/Founder';

export function About() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <Mission />
      <Founder />
    </div>
  );
}