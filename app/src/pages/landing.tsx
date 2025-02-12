import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { 
  ArrowRight, 
  Rocket, 
  Globe, 
  Lock, 
  CheckCircle 
} from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between py-4">
          <div className="flex items-center space-x-4">
            <Rocket className="h-8 w-8 text-primary" />
            <h1 className="text-xl font-bold">QuickStart</h1>
          </div>
          <nav className="flex items-center space-x-6">
            <a href="#features" className="hover:text-primary">Features</a>
            <a href="#pricing" className="hover:text-primary">Pricing</a>
            <a href="#testimonials" className="hover:text-primary">Testimonials</a>
            <ModeToggle />
            <Button>Get Started</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-24">
        <div>
          <h2 className="text-5xl font-bold mb-6 leading-tight">
            Transform Your Ideas into Reality
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            QuickStart helps entrepreneurs and developers launch products faster with our all-in-one platform.
          </p>
          <div className="flex space-x-4">
            <Button size="lg">
              Start Free Trial
              <ArrowRight className="ml-2" />
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
        <div className="hidden md:block">
          <img 
            src="https://picsum.photos/seed/hero/600/400" 
            alt="Hero Image" 
            className="rounded-xl shadow-2xl"
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-secondary/10 py-24">
        <div className="container mx-auto text-center mb-16">
          <h3 className="text-3xl font-bold mb-4">Powerful Features</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to take your project from concept to launch
          </p>
        </div>
        <div className="container mx-auto grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: Globe, 
              title: "Global Reach", 
              description: "Deploy and scale your application worldwide" 
            },
            { 
              icon: Lock, 
              title: "Secure Infrastructure", 
              description: "Enterprise-grade security out of the box" 
            },
            { 
              icon: CheckCircle, 
              title: "Easy Integration", 
              description: "Seamless connections with popular tools" 
            }
          ].map(({ icon: Icon, title, description }) => (
            <div key={title} className="bg-background p-6 rounded-xl text-center shadow-sm">
              <div className="flex justify-center mb-4">
                <Icon className="h-12 w-12 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">{title}</h4>
              <p className="text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/10 py-12">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 QuickStart. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}