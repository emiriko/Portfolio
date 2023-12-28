import React from 'react'
import { HeroSection, ProjectSection } from './v2'

export const HomeModule: React.FC = () => (
  <div className="flex flex-col gap-y-20 py-16">
    <HeroSection />
    <ProjectSection />
  </div>
)
