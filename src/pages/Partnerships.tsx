import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Target,
  Eye,
  ClipboardList,
  Users,
  Database,
  Shield,
  Building2,
  Landmark,
  ArrowRight,
  Briefcase,
  GraduationCap,
  Lightbulb,
  MapPin,
} from "lucide-react";

const whyPartner = [
  { icon: Target, text: "Precision spraying at scale" },
  { icon: Eye, text: "Drone-based monitoring solutions" },
  { icon: ClipboardList, text: "Standardized operations" },
  { icon: Users, text: "Verified & trained pilot network" },
  { icon: Database, text: "Data-backed insights" },
  { icon: Shield, text: "Compliance-ready processes" },
];

const corporateSolutions = [
  "Contracted drone spraying",
  "Crop health analytics",
  "Custom agronomy solutions",
];

const governmentSupport = [
  { icon: GraduationCap, text: "Skill development" },
  { icon: Briefcase, text: "Entrepreneurship creation" },
  { icon: Lightbulb, text: "Precision agriculture adoption" },
  { icon: MapPin, text: "Village-level demonstration models" },
];

export default function Partnerships() {
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
              Partnerships
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Partner with Atomik
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80">
              Enable precision agriculture solutions for enterprises and government institutions at scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-24 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Benefits
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Why Partner With Atomik?
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {whyPartner.map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 p-5 bg-card rounded-xl border border-border shadow-soft"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="font-medium text-foreground">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Partners */}
      <section className="py-24 bg-muted">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center">
                  <Building2 className="w-7 h-7 text-secondary" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Corporate Partner Solutions
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Comprehensive precision agriculture solutions designed for enterprises and agribusinesses.
              </p>
              <ul className="space-y-4 mb-8">
                {corporateSolutions.map((solution) => (
                  <li key={solution} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-secondary" />
                    </div>
                    <span className="text-muted-foreground">{solution}</span>
                  </li>
                ))}
              </ul>
              <Button variant="secondary" size="lg" asChild>
                <Link to="/contact">
                  Contact Corporate Sales
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card rounded-2xl p-8 border border-border shadow-medium"
            >
              <div className="text-center">
                <div className="w-20 h-20 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                  <Building2 className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Enterprise Ready</h3>
                <p className="text-muted-foreground">
                  Scalable solutions for large-scale agricultural operations with dedicated support and custom integrations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Government Programs */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                {governmentSupport.map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="bg-card rounded-xl p-5 border border-border shadow-soft"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center mb-3">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <p className="font-medium text-foreground">{item.text}</p>
                  </motion.div>
                ))}
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
                <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center">
                  <Landmark className="w-7 h-7 text-accent" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Government Program Support
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Supporting national agricultural development initiatives with technology-driven solutions and rural capacity building.
              </p>
              <Button variant="accentSolid" size="lg" asChild>
                <Link to="/contact">
                  Partner with Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
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
              Become a Partner
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Join us in transforming agriculture across India. Let's discuss how we can work together.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
