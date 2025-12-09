import { Zap, Target, ShieldCheck, Droplets, Database } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Faster Coverage",
    description: "Drones spray 20-30 times faster than manual labor, covering 25-30 acres per day versus only 1-2 acres manually.",
    highlight: "20-30 times faster",
  },
  {
    icon: Target,
    title: "Precision & Uniformity",
    description: "Ensures even spray distribution with minimal overlap or wastage, optimizing pest control and input efficiency.",
  },
  {
    icon: ShieldCheck,
    title: "Farmer Safety",
    description: "Keeps farmers away from harmful agrochemicals, dramatically reducing health risks and exposure-related illnesses.",
  },
  {
    icon: Droplets,
    title: "Resource Efficiency",
    description: "Uses 90% less water and 30-40% less pesticides, making it cost-effective and eco-friendly.",
    highlight: "90% less water",
  },
  {
    icon: Database,
    title: "Data Integration",
    description: "Captures real-time field data for crop health monitoring, enabling precision agriculture and smarter decision-making.",
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
    <div className="bg-[#e0f2eb] rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4">
        <feature.icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
      <p className="text-muted-foreground leading-relaxed">
        {feature.highlight ? (
          <>
            {feature.description.split(feature.highlight)[0]}
            <span className="bg-accent text-accent-foreground px-1 rounded font-medium">
              {feature.highlight}
            </span>
            {feature.description.split(feature.highlight)[1]}
          </>
        ) : (
          feature.description
        )}
      </p>
    </div>
  );
}
