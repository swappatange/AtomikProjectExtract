import { Link } from "react-router-dom";
import { Rocket, Network, ShieldCheck, Database, TrendingUp, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import whyAtomikImage from "@/assets/images/why-atomik.jpg";

const differentiators = [
  {
    icon: Rocket,
    title: "First-mover in drone service aggregation",
  },
  {
    icon: Network,
    title: "Strong network effects: farmers ↔ pilots ↔ partners",
  },
  {
    icon: ShieldCheck,
    title: "Verified, compliant pilot network",
  },
  {
    icon: Database,
    title: "Proprietary field-level data engine",
  },
  {
    icon: TrendingUp,
    title: "Diversified revenue streams",
  },
  {
    icon: Globe,
    title: "Built for scalability across rural India",
  },
];

export function WhyAtomikSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Why Atomik
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              What makes us{" "}
              <span className="text-accent">different</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're not just another agri-tech startup. We're building the infrastructure for precision agriculture at scale.
            </p>
            <Button variant="default" size="lg" asChild>
              <Link to="/technology">
                Learn About Our Technology
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>

          <div className="relative">
            <img 
              src={whyAtomikImage} 
              alt="Drone spraying crops" 
              className="rounded-2xl shadow-lg w-full h-80 object-cover"
            />
            <div className="absolute -bottom-6 -left-6 grid grid-cols-2 gap-3">
              {differentiators.slice(0, 4).map((item) => (
                <div
                  key={item.title}
                  className="bg-card rounded-xl p-3 shadow-medium border border-border"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-xs font-medium text-foreground leading-snug">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-16">
          {differentiators.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col items-center text-center gap-3 p-4 rounded-xl bg-muted hover:bg-primary/5 transition-colors border border-transparent hover:border-primary/20"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm font-medium text-foreground leading-snug">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
