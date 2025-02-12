import React from 'react'
import { 
  Palette, 
  Layout, 
  Monitor, 
  Printer, 
  PenTool, 
  Image 
} from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Create unique and memorable brand identities"
  },
  {
    icon: Layout,
    title: "Logo Design",
    description: "Craft distinctive logos that represent your brand"
  },
  {
    icon: Monitor,
    title: "UI/UX Design",
    description: "Design intuitive and engaging digital interfaces"
  },
  {
    icon: Printer,
    title: "Print Design",
    description: "Professional print materials and marketing collateral"
  },
  {
    icon: PenTool,
    title: "Illustration",
    description: "Custom illustrations and graphic art"
  },
  {
    icon: Image,
    title: "Social Media Graphics",
    description: "Engaging visuals for social media platforms"
  }
]

export const ServicesSection: React.FC = () => {
  return (
    <section 
      id="services" 
      className="py-16 bg-background"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">My Services</h2>
          <p className="text-muted-foreground">
            Comprehensive design solutions to elevate your brand
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div 
                key={index} 
                className="bg-secondary/10 p-6 rounded-lg text-center hover:shadow-lg transition-all group"
              >
                <div className="mb-4 flex justify-center">
                  <Icon 
                    className="w-12 h-12 text-primary group-hover:scale-110 transition-transform" 
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}