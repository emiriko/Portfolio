import React from 'react'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  icon?: React.ReactNode
  children: React.ReactNode
}
