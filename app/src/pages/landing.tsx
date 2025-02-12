{/* Add this section just before the footer */}
{/* Testimonials Section */}
<section id="testimonials" className="container mx-auto py-24">
  <div className="text-center mb-16">
    <h3 className="text-3xl font-bold mb-4">What Our Customers Say</h3>
    <p className="text-muted-foreground max-w-2xl mx-auto">
      Real stories from teams who have transformed their workflow with SwiftFlow
    </p>
  </div>
  <div className="grid md:grid-cols-3 gap-8">
    {[
      {
        name: "Sarah Chen",
        title: "CTO, TechInnovate",
        quote: "SwiftFlow has been a game-changer for our engineering team. The AI-driven insights have helped us reduce project delays by 40%.",
        avatar: "https://picsum.photos/seed/sarah/200/200"
      },
      {
        name: "Michael Rodriguez",
        title: "Product Manager, CreativeEdge",
        quote: "The intuitive interface and powerful collaboration tools have streamlined our entire product development process.",
        avatar: "https://picsum.photos/seed/michael/200/200"
      },
      {
        name: "Emily Nakamura",
        title: "Operations Director, GlobalSync",
        quote: "SwiftFlow's predictive analytics have given us unprecedented visibility into our team's productivity and potential bottlenecks.",
        avatar: "https://picsum.photos/seed/emily/200/200"
      }
    ].map(({ name, title, quote, avatar }) => (
      <div 
        key={name} 
        className="bg-secondary/10 p-6 rounded-xl flex flex-col justify-between"
      >
        <div>
          <p className="text-muted-foreground italic mb-4">
            "{quote}"
          </p>
        </div>
        <div className="flex items-center mt-4">
          <img 
            src={avatar} 
            alt={name} 
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h4 className="font-semibold">{name}</h4>
            <p className="text-sm text-muted-foreground">{title}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
  
  {/* Social Proof Section */}
  <div className="mt-16 bg-secondary/10 rounded-xl p-8">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="text-center md:text-left mb-4 md:mb-0">
        <h4 className="text-2xl font-bold mb-2">Trusted by Industry Leaders</h4>
        <p className="text-muted-foreground">
          Join 50,000+ teams using SwiftFlow to accelerate their projects
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {[
          { name: "TechCorp", logo: "https://picsum.photos/seed/tech1/100/40" },
          { name: "InnovateInc", logo: "https://picsum.photos/seed/tech2/100/40" },
          { name: "GlobalSystems", logo: "https://picsum.photos/seed/tech3/100/40" },
          { name: "CreativeLabs", logo: "https://picsum.photos/seed/tech4/100/40" }
        ].map(({ name, logo }) => (
          <img 
            key={name} 
            src={logo} 
            alt={name} 
            className="h-8 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
          />
        ))}
      </div>
    </div>
  </div>
</section>