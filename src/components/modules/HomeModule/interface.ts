import React from 'react'

export interface SocialMediaProps {
  url: string
  src: string
  alt: string
}

export interface ExperienceComponentProps {
  logo: string
  alt: string
  job: string
  workplace: string
  interval: string
  stack: string
}

export interface ExperienceDescriptionProps {
  'PERAK 2023': React.ReactNode
  'BETIS 2023': React.ReactNode
  'EDUCARE 2023': React.ReactNode
  'PEMIRA 2023': React.ReactNode
  'Open House Fasilkom UI 2022': React.ReactNode
  'BEM Fasilkom UI 2022': React.ReactNode
  'OKK UI 2022': React.ReactNode
}
