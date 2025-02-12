import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Send } from 'lucide-react'

export const ContactSection: React.FC = () => {
  return (
    <section 
      id="contact" 
      className="py-16 bg-background"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
          <p className="text-muted-foreground">
            Let's discuss your next design project
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto bg-secondary/10 p-8 rounded-lg">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <Input 
                type="text" 
                placeholder="Your Name" 
                className="w-full" 
              />
              <Input 
                type="email" 
                placeholder="Your Email" 
                className="w-full" 
              />
            </div>
            <Input 
              type="text" 
              placeholder="Subject" 
              className="w-full" 
            />
            <Textarea 
              placeholder="Your Message" 
              className="w-full min-h-[150px]" 
            />
            <Button size="lg" className="w-full">
              <Send className="mr-2" /> Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}