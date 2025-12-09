import { Zap, Target, ShieldCheck, Droplets, Database } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Faster Coverage",
    description: "Cover 25-30 acres daily with drones—30x faster than manual spraying.",
  },
  {
    icon: Target,
    title: "Precision & Uniformity",
    description: "Even spray distribution with zero overlap, maximizing pest control efficiency.",
  },
  {
    icon: ShieldCheck,
    title: "Farmer Safety",
    description: "No direct exposure to harmful chemicals. Healthier farmers, safer fields.",
  },
  {
    icon: Droplets,
    title: "Resource Efficiency",
    description: "Save 90% water and 30-40% pesticides. Cost-effective and eco-friendly.",
  },
  {
    icon: Database,
    title: "Data Integration",
    description: "Real-time crop health monitoring for smarter, data-driven decisions.",
  },
];

export function StatsSection() {
  return (
    <section className="py-20 bg-[#e8f5f0]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.slice(0, 3).map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
          {features.slice(3).map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature }: { feature: typeof features[0] }) {
  return (
    <div className="bg-[#e0f2eb] rounded-2xl p-6 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer group">
      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4 group-hover:bg-primary/90 transition-colors">
        <feature.icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
    </div>
  );
}
