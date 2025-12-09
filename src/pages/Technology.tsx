import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import {
  Database,
  Clock,
  Shield,
  MapPin,
  CreditCard,
  Cloud,
  Cpu,
  Leaf,
  TrendingUp,
  ShoppingCart,
  Sparkles,
} from "lucide-react";

const dataInsights = [
  "Acres covered",
  "Time & pilot performance",
  "Chemical dosage accuracy",
  "Geo-tagged spray records",
  "Crop health patterns",
];

const infrastructure = [
  { icon: Clock, text: "Intelligent scheduling system" },
  { icon: Shield, text: "Verified pilot onboarding" },
  { icon: Database, text: "Drone compliance & documentation tracker" },
  { icon: MapPin, text: "Location-based matching for faster service" },
  { icon: CreditCard, text: "In-app payment management" },
  { icon: Cloud, text: "Cloud-based reporting" },
];

const roadAhead = [
  { icon: Cpu, text: "AI-based pest detection" },
  { icon: TrendingUp, text: "Predictive crop disease modelling" },
  { icon: Leaf, text: "Yield-based input recommendations" },
  { icon: ShoppingCart, text: "Full-stack precision agriculture marketplace" },
];

export default function Technology() {
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
              Technology
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Data & Technology
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80">
              Powering precision agriculture with proprietary field-level intelligence and advanced infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Data Engine */}
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
                <Database className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Atomik Data Engine
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Atomik captures field-level operational data on every completed spray, building a comprehensive intelligence layer for precision agriculture.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card rounded-2xl p-8 border border-border shadow-soft"
            >
              <h3 className="text-xl font-bold text-foreground mb-6">Insights include:</h3>
              <ul className="space-y-4">
                {dataInsights.map((insight, index) => (
                  <motion.li
                    key={insight}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-muted-foreground">{insight}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-24 bg-muted">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Infrastructure
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Technology Infrastructure
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {infrastructure.map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border shadow-soft hover:shadow-medium transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-secondary" />
                </div>
                <p className="font-medium text-foreground">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Road Ahead */}
      <section className="py-24 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-4">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold text-accent">Coming Soon</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              The Road Ahead
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {roadAhead.map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-card rounded-2xl p-6 border border-border shadow-soft text-center hover:border-accent/50 transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <p className="font-medium text-foreground text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
