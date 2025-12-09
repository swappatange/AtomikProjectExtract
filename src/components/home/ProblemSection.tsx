import { AlertTriangle, Clock, DollarSign, Frown, Search, Calendar, CreditCard } from "lucide-react";
import farmerImage from "@assets/stock_images/farmer_using_technol_bde57944.jpg";
import pilotImage from "@assets/stock_images/drone_spraying_crops_305132bb.jpg";

const farmerProblems = [
  { icon: Clock, text: "Slow & inefficient manual spraying" },
  { icon: DollarSign, text: "High labor costs" },
  { icon: AlertTriangle, text: "Uneven chemical distribution" },
  { icon: Frown, text: "Exposure to harmful chemicals" },
  { icon: Search, text: "Difficulty finding certified drone pilots" },
];

const pilotProblems = [
  { icon: AlertTriangle, text: "Idle drones & no discovery platform" },
  { icon: Calendar, text: "Unpredictable workload" },
  { icon: CreditCard, text: "Manual scheduling & payment issues" },
];

export function ProblemSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            The Challenge
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Farming is still powered by{" "}
            <span className="text-primary">outdated manual processes</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-soft">
            <div 
              className="h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${farmerImage})` }}
            />
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Farmers face:</h3>
              </div>
              <ul className="space-y-4">
                {farmerProblems.map((problem) => (
                  <li
                    key={problem.text}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <div className="w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                      <problem.icon className="w-4 h-4 text-destructive" />
                    </div>
                    <span>{problem.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-soft">
            <div 
              className="h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${pilotImage})` }}
            />
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Drone operators face:</h3>
              </div>
              <ul className="space-y-4">
                {pilotProblems.map((problem) => (
                  <li
                    key={problem.text}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <problem.icon className="w-4 h-4 text-secondary" />
                    </div>
                    <span>{problem.text}</span>
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
