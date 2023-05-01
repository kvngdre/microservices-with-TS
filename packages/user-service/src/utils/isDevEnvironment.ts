export default function isDevEnvironment(): boolean {
  if (process.env.NODE_ENV === 'development') return true

  return false
}