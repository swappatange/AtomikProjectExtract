import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Smartphone,
  Package,
  Building2,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Clock,
  Shield,
  CreditCard,
  FileText,
  Truck,
  BadgeCheck,
  Target,
  BarChart3,
  Users,
  Leaf,
} from "lucide-react";

const pillar1Features = [
  { icon: BadgeCheck, text: "Book verified drone operators" },
  { icon: Clock, text: "Pre-defined slots for timely service" },
  { icon: CreditCard, text: "Transparent pricing" },
  { icon: Shield, text: "Safe payment flow" },
  { icon: MapPin, text: "Real-time tracking" },
  { icon: FileText, text: "Digital spray reports" },
];

const pillar2Features = [
  { icon: CheckCircle2, text: "Genuine products from leading manufacturers" },
  { icon: Truck, text: "Delivered directly to the farm" },
  { icon: Package, text: "Option to bundle products + drone spray" },
  { icon: Target, text: "Ensures correct dosage and application" },
];

const pillar3Solutions = [
  "Agribusiness companies",
  "Input brands",
  "Food processing firms",
  "Government agriculture departments",
];

const pillar3Focus = [
  { icon: Leaf, text: "Aerial spraying at scale" },
  { icon: BarChart3, text: "Acre-wise crop insights" },
  { icon: Target, text: "Productivity monitoring" },
  { icon: Users, text: "Rural tech enablement" },
];

export default function Solutions() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 gradient-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              The 3 Pillars of Atomik
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80">
              A comprehensive ecosystem designed to transform agricultural operations at every level.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pillar 1 */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                  1
                </div>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Smartphone className="w-7 h-7 text-primary" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Aggregation Platform
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                A mobile-first ecosystem that connects farmers with certified drone pilots. Simple booking, transparent pricing, and guaranteed quality.
              </p>
              <Button variant="default" size="lg" asChild>
                <Link to="/book">
                  Book a Spray Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid sm:grid-cols-2 gap-4"
            >
              {pillar1Features.map((feature, index) => (
                <div
                  key={feature.text}
                  className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{feature.text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pillar 2 */}
      <section className="py-24 bg-muted">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="bg-card rounded-2xl p-8 border border-border shadow-soft">
                <h3 className="text-xl font-bold text-foreground mb-6">Key Benefits</h3>
                <div className="space-y-4">
                  {pillar2Features.map((feature) => (
                    <div key={feature.text} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-muted-foreground">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-xl">
                  2
                </div>
                <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center">
                  <Package className="w-7 h-7 text-accent" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Agri-Input Distribution
              </h2>
              <p className="text-lg text-muted-foreground">
                A trusted channel for crop protection products. Genuine products from leading manufacturers, delivered directly to your farm gate.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pillar 3 */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold text-xl">
                  3
                </div>
                <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center">
                  <Building2 className="w-7 h-7 text-secondary" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                B2B & Government Partnerships
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Large-scale precision agriculture programs for enterprises and government institutions.
              </p>

              <div className="mb-8">
                <h4 className="font-semibold text-foreground mb-4">Solutions for:</h4>
                <div className="flex flex-wrap gap-2">
                  {pillar3Solutions.map((solution) => (
                    <span
                      key={solution}
                      className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium"
                    >
                      {solution}
                    </span>
                  ))}
                </div>
              </div>

              <Button variant="secondary" size="lg" asChild>
                <Link to="/partnerships">
                  Explore Partnerships
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-card rounded-2xl p-8 border border-border shadow-soft">
                <h3 className="text-xl font-bold text-foreground mb-6">Focus Areas</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {pillar3Focus.map((item) => (
                    <div
                      key={item.text}
                      className="flex items-center gap-3 p-4 bg-muted rounded-xl"
                    >
                      <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-secondary" />
                      </div>
                      <span className="text-sm font-medium text-foreground">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 gradient-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Explore How Atomik Can Support Your Operations
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">Contact Sales</Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/book">Book a Demo Spray</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
