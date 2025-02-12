import React from 'react'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/mode-toggle'
import { Menu } from 'lucide-react'

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-primary">CreativeCanvas</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-primary transition-colors">Home</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a>
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <ModeToggle />
          <Button className="md:hidden">
            <Menu />
          </Button>
          <Button variant="default" className="hidden md:block">
            Hire Me
          </Button>
        </div>
      </div>
    </header>
  )
}