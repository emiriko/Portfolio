import React from 'react'
import { TitleHeadingProps } from './interface'

export const TitleHeading: React.FC<TitleHeadingProps> = ({
  className,
  children,
}) => (
  <h1
    className={`md:text-7xl min[426px]:text-6xl min[320px]:text-5xl text-4xl font-bold text-deepblue md:text-left text-center my-8 ${className}`}
  >
    {' '}
    {children}{' '}
  </h1>
)
