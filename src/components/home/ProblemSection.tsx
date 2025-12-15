import { MapPin, Banknote, AlertTriangle, ShieldX, Clock, Battery, Eye, Settings, TrendingDown } from "lucide-react";
import farmerImage from "@/assets/images/farmer.png";
import pilotImage from "@/assets/images/drone-operator.png";

const farmerChallenges = [
  { icon: MapPin, title: "Lack of Access", description: "Finding certified drone service providers in their region" },
  { icon: Banknote, title: "High Costs", description: "Manual spraying increases labor expenses and time" },
  { icon: AlertTriangle, title: "Inefficiency", description: "Uneven chemical application and health risks" },
  { icon: ShieldX, title: "Trust Deficit", description: "No standardized pricing or quality assurance" },
  { icon: Clock, title: "Timing Issues", description: "Unavailable services during critical pest outbreaks" },
];

const pilotChallenges = [
  { icon: Battery, title: "Underutilized Assets", description: "Drones sit idle due to inconsistent bookings" },
  { icon: Eye, title: "Limited Visibility", description: "No platform to be discovered by farmers" },
  { icon: Settings, title: "Fragmented Operations", description: "Payment and scheduling bottlenecks" },
  { icon: TrendingDown, title: "Market Fragmentation", description: "No ecosystem for sustainable growth" },
];

export function ProblemSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            The Challenge
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Problem Statement:{" "}
            <span className="text-primary">Bridging the Technology Gap</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-soft hover:shadow-lg transition-shadow duration-300">
            <div 
              className="h-56 bg-cover bg-center"
              style={{ backgroundImage: `url(${farmerImage})` }}
            />
            <div className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-primary mb-5">Farmer Challenges</h3>
              <ul className="space-y-4">
                {farmerChallenges.map((challenge) => (
                  <li key={challenge.title} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <challenge.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">{challenge.title}:</span>{" "}
                      <span className="text-muted-foreground">{challenge.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-soft hover:shadow-lg transition-shadow duration-300">
            <div 
              className="h-56 bg-cover bg-center"
              style={{ backgroundImage: `url(${pilotImage})` }}
            />
            <div className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-secondary mb-5">Drone Operator Challenges</h3>
              <ul className="space-y-4">
                {pilotChallenges.map((challenge) => (
                  <li key={challenge.title} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <challenge.icon className="w-4 h-4 text-secondary" />
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">{challenge.title}:</span>{" "}
                      <span className="text-muted-foreground">{challenge.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
