import React from 'react'
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel'
import { Badge } from '@/components/ui/badge'

const portfolioItems = [
  {
    title: "Brand Identity Design",
    description: "Complete branding package for a tech startup",
    image: "https://picsum.photos/seed/brand1/400/300",
    tags: ["Branding", "Logo"]
  },
  {
    title: "Marketing Collateral",
    description: "Print and digital marketing materials",
    image: "https://picsum.photos/seed/marketing1/400/300",
    tags: ["Print", "Digital"]
  },
  {
    title: "UI/UX Design",
    description: "Mobile app interface design",
    image: "https://picsum.photos/seed/ux1/400/300",
    tags: ["UI/UX", "App Design"]
  }
]

export const PortfolioSection: React.FC = () => {
  return (
    <section 
      id="portfolio" 
      className="py-16 bg-secondary/10"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">My Portfolio</h2>
          <p className="text-muted-foreground">
            Showcasing creative design solutions across various projects
          </p>
        </div>
        
        <Carousel className="w-full">
          <CarouselContent>
            {portfolioItems.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-4 group">
                  <div className="overflow-hidden rounded-lg shadow-lg relative">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 text-white">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-sm">{item.description}</p>
                      <div className="mt-2 flex space-x-2">
                        {item.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}