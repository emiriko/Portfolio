import React from 'react'
import { AboutModule } from '../AboutModule'
import { ImageSection } from './ImageSection'
import { ProfileSection } from './ProfileSection'
import { ProjectSection } from './ProjectSection'
import { WorkExperience } from './WorkExperience'

export const HomeModule: React.FC = () => (
  <>
    <ImageSection />
    <ProfileSection />
    <AboutModule />
    <WorkExperience />
    <ProjectSection />
  </>
)
