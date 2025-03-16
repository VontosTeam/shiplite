import Link from "next/link"
import Image from "next/image"

interface LogoProps {
  variant?: "light" | "dark"
  className?: string
}

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const logoSrc = variant === "light" ? "/shiplite-logo-white.png" : "/shiplite-logo-red.png"
  
  return (
    <Link href="/" className={`block ${className}`}>
      <Image
        src={logoSrc}
        alt="ShipLite Logo"
        width={180}
        height={45}
        className="h-8 w-auto"
        priority
      />
    </Link>
  )
}

