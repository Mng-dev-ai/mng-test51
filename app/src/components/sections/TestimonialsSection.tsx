import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    quote: "Exceptional design work that perfectly captured our brand's essence.",
    avatar: "https://picsum.photos/seed/user1/200/200"
  },
  {
    name: "Michael Chen",
    role: "Startup Founder",
    quote: "Professional, creative, and always delivers beyond expectations.",
    avatar: "https://picsum.photos/seed/user2/200/200"
  },
  {
    name: "Emily Rodriguez",
    role: "Creative Director",
    quote: "Innovative designs that truly stand out in a crowded market.",
    avatar: "https://picsum.photos/seed/user3/200/200"
  }
]

export const TestimonialsSection: React.FC = () => {
  return (
    <section 
      id="testimonials" 
      className="py-16 bg-secondary/10"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-muted-foreground">
            What my clients say about working together
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-background border rounded-lg p-6 text-center relative"
            >
              <Quote className="absolute top-4 left-4 text-primary/20 w-12 h-12" />
              <p className="text-muted-foreground italic mb-4">
                "{testimonial.quote}"
              </p>
              <div className="flex flex-col items-center">
                <Avatar className="w-16 h-16 mb-2">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}