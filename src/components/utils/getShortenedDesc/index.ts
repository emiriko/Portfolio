import { MAX_SUBSTRING } from './constant'

export const getShortenedDesc = (description: string): string => {
  const trimmedString: string = description.substring(0, MAX_SUBSTRING)
  const result = trimmedString.substring(
    0,
    Math.min(trimmedString.length, trimmedString.lastIndexOf(' '))
  )

  return result + '...'
}
