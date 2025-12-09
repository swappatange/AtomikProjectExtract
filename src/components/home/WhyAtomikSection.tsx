import { Link } from "react-router-dom";
import { Rocket, Network, ShieldCheck, Database, TrendingUp, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
          {/* Content */}
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

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="group flex items-start gap-4 p-4 rounded-xl bg-muted hover:bg-primary/5 transition-colors border border-transparent hover:border-primary/20"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground leading-snug">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}