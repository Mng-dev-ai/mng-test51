import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { 
  ArrowRight, 
  Zap, 
  Brain, 
  Workflow, 
  Shield, 
  CheckCircle 
} from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between py-4">
          <div className="flex items-center space-x-4">
            <Workflow className="h-8 w-8 text-primary" />
            <h1 className="text-xl font-bold">SwiftFlow</h1>
          </div>
          <nav className="flex items-center space-x-6">
            <a href="#features" className="hover:text-primary">Features</a>
            <a href="#solutions" className="hover:text-primary">Solutions</a>
            <a href="#pricing" className="hover:text-primary">Pricing</a>
            <ModeToggle />
            <Button>Start Free Trial</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-24">
        <div>
          <h2 className="text-5xl font-bold mb-6 leading-tight">
            AI-Powered Project Management
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            SwiftFlow uses advanced AI to streamline your team's workflow, predict bottlenecks, and boost productivity like never before.
          </p>
          <div className="flex space-x-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Start Free Trial
              <ArrowRight className="ml-2" />
            </Button>
            <Button variant="outline" size="lg">
              Watch Demo
            </Button>
          </div>
          <div className="mt-6 flex items-center space-x-4">
            <div className="flex -space-x-2">
              <img 
                src="https://picsum.photos/seed/user1/40/40" 
                alt="User" 
                className="rounded-full border-2 border-white"
              />
              <img 
                src="https://picsum.photos/seed/user2/40/40" 
                alt="User" 
                className="rounded-full border-2 border-white"
              />
              <img 
                src="https://picsum.photos/seed/user3/40/40" 
                alt="User" 
                className="rounded-full border-2 border-white"
              />
            </div>
            <span className="text-muted-foreground">
              Used by 50,000+ teams worldwide
            </span>
          </div>
        </div>
        <div className="hidden md:block">
          <img 
            src="https://picsum.photos/seed/dashboard/600/400" 
            alt="SwiftFlow Dashboard" 
            className="rounded-xl shadow-2xl"
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-secondary/10 py-24">
        <div className="container mx-auto text-center mb-16">
          <h3 className="text-3xl font-bold mb-4">Intelligent Project Management</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            SwiftFlow combines cutting-edge AI with intuitive design to transform how teams collaborate and deliver results.
          </p>
        </div>
        <div className="container mx-auto grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: Brain, 
              title: "AI-Driven Insights", 
              description: "Predictive analytics that identify potential project risks and optimization opportunities" 
            },
            { 
              icon: Zap, 
              title: "Rapid Workflow", 
              description: "Automate repetitive tasks and streamline communication across teams" 
            },
            { 
              icon: Shield, 
              title: "Enterprise Security", 
              description: "Bank-grade encryption and comprehensive access controls" 
            }
          ].map(({ icon: Icon, title, description }) => (
            <div key={title} className="bg-background p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-all">
              <div className="flex justify-center mb-4">
                <Icon className="h-12 w-12 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">{title}</h4>
              <p className="text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="container mx-auto py-24">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold mb-4">Designed for Every Team</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Whether you're a startup, enterprise, or remote team, SwiftFlow adapts to your unique workflow.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Startups",
              description: "Scale your ideas with agile project tracking and collaborative tools",
              icon: CheckCircle
            },
            {
              title: "Enterprises",
              description: "Complex project management with advanced reporting and integration",
              icon: CheckCircle
            },
            {
              title: "Remote Teams",
              description: "Seamless collaboration across time zones and geographies",
              icon: CheckCircle
            }
          ].map(({ title, description, icon: Icon }) => (
            <div key={title} className="bg-secondary/10 p-6 rounded-xl">
              <Icon className="h-10 w-10 text-primary mb-4" />
              <h4 className="text-xl font-semibold mb-2">{title}</h4>
              <p className="text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-secondary/10 py-24">
        <div className="container mx-auto text-center mb-16">
          <h3 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose a plan that grows with your team. No hidden fees, cancel anytime.
          </p>
        </div>
        <div className="container mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Starter",
              price: "$9",
              features: [
                "Up to 5 team members",
                "Basic AI insights",
                "Standard support"
              ]
            },
            {
              title: "Pro",
              price: "$29",
              features: [
                "Up to 20 team members",
                "Advanced AI predictions",
                "Priority support",
                "Custom integrations"
              ],
              recommended: true
            },
            {
              title: "Enterprise",
              price: "Custom",
              features: [
                "Unlimited team members",
                "Full AI capabilities",
                "Dedicated account manager",
                "Advanced security"
              ]
            }
          ].map(({ title, price, features, recommended }) => (
            <div 
              key={title} 
              className={`
                bg-background p-6 rounded-xl shadow-sm 
                ${recommended ? 'border-2 border-primary' : ''}
              `}
            >
              {recommended && (
                <div className="text-center text-sm text-primary mb-2">
                  Most Popular
                </div>
              )}
              <h4 className="text-2xl font-bold mb-4">{title}</h4>
              <div className="text-4xl font-bold mb-6">{price}
                <span className="text-sm text-muted-foreground">/month</span>
              </div>
              <ul className="space-y-3 mb-6">
                {features.map(feature => (
                  <li key={feature} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full" variant={recommended ? 'default' : 'outline'}>
                Choose {title}
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/10 py-12">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Workflow className="h-8 w-8 text-primary mr-2" />
            <h1 className="text-xl font-bold">SwiftFlow</h1>
          </div>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-muted-foreground hover:text-foreground">Features</a>
            <a href="#" className="text-muted-foreground hover:text-foreground">Pricing</a>
            <a href="#" className="text-muted-foreground hover:text-foreground">Support</a>
            <a href="#" className="text-muted-foreground hover:text-foreground">Contact</a>
          </div>
          <p className="text-muted-foreground">
            © 2024 SwiftFlow Technologies. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}