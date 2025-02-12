import React from 'react'
import { 
  Twitter, 
  Instagram, 
  Linkedin, 
  Dribbble 
} from 'lucide-react'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary/10 py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <a 
            href="#" 
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Twitter />
          </a>
          <a 
            href="#" 
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Instagram />
          </a>
          <a 
            href="#" 
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin />
          </a>
          <a 
            href="#" 
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Dribbble />
          </a>
        </div>
        <p className="text-muted-foreground">
          © 2024 CreativeCanvas. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}