import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Rocket,
  Network,
  Database,
  Globe,
  TrendingUp,
  ArrowRight,
  Mail,
  Building2,
  Target,
  Layers,
} from "lucide-react";

const advantages = [
  { icon: Rocket, text: "First mover in drone service aggregation" },
  { icon: Network, text: "Strong pilot network with verified operators" },
  { icon: Database, text: "Proprietary field-level data intelligence" },
  { icon: Globe, text: "Platform built for scale across rural India" },
];

const pillars = [
  {
    title: "Aggregation Platform",
    description: "Mobile-first farmer-pilot marketplace",
  },
  {
    title: "Agri-Input Distribution",
    description: "Bundled product + service delivery",
  },
  {
    title: "B2B & Government",
    description: "Enterprise and institutional contracts",
  },
];

export default function Investors() {
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
              For Investors
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Investor Information
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80">
              Building India's first structured farm mechanization ecosystem—starting with drone spraying and expanding into full-stack precision agriculture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Summary */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Building2 className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Company Summary
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Atomik is pioneering the transformation of Indian agriculture through a technology-driven, structured farm services ecosystem.
              </p>
              <p className="text-muted-foreground">
                We're addressing a massive market opportunity: enabling precision agriculture for 140+ million farming households in India, starting with drone-based spraying services and expanding into a full-stack agricultural platform.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card rounded-2xl p-8 border border-border shadow-medium"
            >
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Market Opportunity</h3>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-muted rounded-xl">
                  <div className="text-2xl font-bold text-primary">140M+</div>
                  <div className="text-sm text-muted-foreground">Farming households in India</div>
                </div>
                <div className="p-4 bg-muted rounded-xl">
                  <div className="text-2xl font-bold text-secondary">$5B+</div>
                  <div className="text-sm text-muted-foreground">Addressable crop protection market</div>
                </div>
                <div className="p-4 bg-muted rounded-xl">
                  <div className="text-2xl font-bold text-accent">10x</div>
                  <div className="text-sm text-muted-foreground">Efficiency gain with drone spraying</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-24 bg-muted">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center mx-auto mb-6">
              <Layers className="w-7 h-7 text-secondary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Business Model
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our 3-pillar ecosystem creates strong network effects and diversified revenue streams.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border shadow-soft text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="font-bold text-foreground mb-2">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-24 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-7 h-7 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Competitive Advantages
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.text}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 p-5 bg-card rounded-xl border border-border shadow-soft"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <advantage.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="font-medium text-foreground">{advantage.text}</p>
              </motion.div>
            ))}
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
              Contact Investor Relations
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Interested in learning more about Atomik's growth story and investment opportunity?
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                <Mail className="w-5 h-5" />
                Get in Touch
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
