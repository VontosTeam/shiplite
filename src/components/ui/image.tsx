import NextImage, { ImageProps as NextImageProps } from 'next/image'
import { useState, useEffect } from 'react'

interface ImageProps extends Omit<NextImageProps, 'onLoadingComplete'> {
  fallback?: string;
}

export function Image({ 
  alt, 
  src, 
  fallback = '/images/placeholder.png',
  className = '',
  priority = false,
  ...props 
}: ImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)
  const [blurDataURL, setBlurDataURL] = useState<string | undefined>(undefined)

  useEffect(() => {
    // Generate blur placeholder
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    if (ctx) {
      canvas.width = 40
      canvas.height = 40
      ctx.fillStyle = '#f3f4f6'
      ctx.fillRect(0, 0, 40, 40)
      setBlurDataURL(canvas.toDataURL())
    }
  }, [])

  return (
    <div className={`relative overflow-hidden ${isLoading ? 'animate-pulse' : ''}`}>
      <NextImage
        className={`transition-opacity duration-300 ${className} ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        src={error ? fallback : src}
        alt={alt}
        onError={() => setError(true)}
        onLoadingComplete={() => setIsLoading(false)}
        loading={priority ? 'eager' : 'lazy'}
        quality={90}
        placeholder={blurDataURL ? 'blur' : 'empty'}
        blurDataURL={blurDataURL}
        {...props}
      />
    </div>
  )
} 