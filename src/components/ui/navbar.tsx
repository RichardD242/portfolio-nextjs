"use client"

import * as React from "react"
import clsx from 'clsx'
import { Menu, X } from 'lucide-react'

interface NavButton {
  className?: string
  children: React.ReactNode
  variant?: 'default' | 'outline'
  onClick?: () => void
}

const NavButton: React.FC<NavButton> = ({ 
  className, 
  children, 
  variant = 'default',
  onClick 
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        'disabled:pointer-events-none disabled:opacity-50',
        'h-10 px-4 py-2',
        variant === 'default' && [
          'bg-cyan-500 text-white hover:bg-cyan-400',
        ],
        variant === 'outline' && [
          'border border-gray-700 text-white',
          'hover:bg-white/10'
        ],
        className
      )}
    >
      {children}
    </button>
  )
}

interface NavItem {
  to?: string
  text: string
}

interface NavbarProps {
  className?: string
  logo?: React.ReactNode
  menuItems?: NavItem[]
  rightContent?: React.ReactNode
}

export function Navbar({
  className,
  logo,
  menuItems = [],
  rightContent,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on resize
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled || isMobileMenuOpen
          ? 'bg-black/80 backdrop-blur-md border-b border-gray-800' 
          : 'bg-transparent',
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            {logo || (
              <span className="text-xl font-bold text-white">RD</span>
            )}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-x-8">
              {menuItems.map(({ to, text }, index) => (
                <li key={index}>
                  <a
                    href={to}
                    className="text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Content + Mobile Menu Button */}
          <div className="flex items-center gap-x-4">
            {rightContent}
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white hover:text-cyan-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <ul className="flex flex-col gap-y-4">
              {menuItems.map(({ to, text }, index) => (
                <li key={index}>
                  <a
                    href={to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-lg text-gray-300 hover:text-cyan-400 transition-colors py-2"
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

export { NavButton }
