import React from 'react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Download, Send } from 'lucide-react'

export const HeroSection: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-16 bg-background"
    >
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-5xl font-bold text-foreground">
            Creative Design <br />
            <span className="text-primary">Solutions</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Transforming ideas into stunning visual experiences. 
            Professional graphic design services tailored to your brand.
          </p>
          <div className="flex space-x-4">
            <Button size="lg">
              <Send className="mr-2" /> Contact Me
            </Button>
            <Button variant="outline" size="lg">
              <Download className="mr-2" /> Download CV
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img 
            src="https://picsum.photos/seed/designer/600/600" 
            alt="Graphic Designer" 
            className="rounded-full w-96 h-96 object-cover shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  )
}