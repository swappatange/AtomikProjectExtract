import { Droplets, Leaf, Shield, Users, Zap } from "lucide-react";

const stats = [
  {
    icon: Zap,
    value: "2,450",
    unit: "acres",
    label: "Sprayed Today",
  },
  {
    icon: Users,
    value: "127",
    unit: "pilots",
    label: "Active Pilots",
  },
  {
    icon: Users,
    value: "3,200+",
    unit: "farmers",
    label: "Farmers Served",
  },
  {
    icon: Shield,
    value: "Zero",
    unit: "exposure",
    label: "Chemical exposure to farmers",
  },
];

export function StatsSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trust & Impact at Scale
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real results powering modern agriculture across India
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group relative bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 border border-border/50"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-1">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</span>
                  {stat.unit && (
                    <span className="text-sm text-muted-foreground">{stat.unit}</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}