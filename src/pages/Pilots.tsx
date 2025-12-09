import { motion } from "framer-motion";
import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import {
  Calendar,
  CreditCard,
  BadgeCheck,
  TrendingUp,
  Briefcase,
  FileText,
  Plane,
  Phone,
  Building,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const benefits = [
  { icon: Calendar, text: "Continuous bookings" },
  { icon: CreditCard, text: "Guaranteed, transparent payments" },
  { icon: BadgeCheck, text: "Verified pilot badge" },
  { icon: TrendingUp, text: "Increase drone utilization" },
  { icon: Briefcase, text: "Build your business with predictable demand" },
];

const requirements = [
  { icon: FileText, text: "Valid drone pilot license" },
  { icon: BadgeCheck, text: "Training certification (DGCA approved)" },
  { icon: Plane, text: "Drone details" },
  { icon: Phone, text: "Contact information" },
  { icon: Building, text: "Bank information" },
];

const howItWorks = [
  "Apply online",
  "Submit verification documents",
  "Get approved",
  "Start receiving bookings immediately",
];

export default function Pilots() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    licenseNumber: "",
    droneDetails: "",
    experience: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "We'll review your application and get back to you within 48 hours.",
    });
    setFormData({
      name: "",
      phone: "",
      email: "",
      location: "",
      licenseNumber: "",
      droneDetails: "",
      experience: "",
    });
  };

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
              For Drone Pilots
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Join as a Drone Pilot
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80">
              Grow your drone business with predictable bookings, transparent payments, and a verified network.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
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
              Why Join Atomik?
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.text}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 p-5 bg-card rounded-xl border border-border shadow-soft"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-accent" />
                </div>
                <p className="font-medium text-foreground">{benefit.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements & How It Works */}
      <section className="py-24 bg-muted">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Requirements */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-2xl p-8 border border-border shadow-soft"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">Requirements</h3>
              <ul className="space-y-4">
                {requirements.map((req, index) => (
                  <li key={req.text} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <req.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{req.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* How It Works */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card rounded-2xl p-8 border border-border shadow-soft"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">How It Works</h3>
              <ul className="space-y-4">
                {howItWorks.map((step, index) => (
                  <li key={step} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 text-secondary-foreground font-bold">
                      {index + 1}
                    </div>
                    <span className="text-muted-foreground">{step}</span>
                    {index < howItWorks.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-muted-foreground/50 ml-auto hidden sm:block" />
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-24 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-10">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Apply Now
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Join as a Drone Pilot
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 border border-border shadow-medium space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder="Your full name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    placeholder="you@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location *</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    required
                    placeholder="City, State"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="licenseNumber">Drone Pilot License Number *</Label>
                <Input
                  id="licenseNumber"
                  value={formData.licenseNumber}
                  onChange={(e) => setFormData({ ...formData, licenseNumber: e.target.value })}
                  required
                  placeholder="DGCA License Number"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="droneDetails">Drone Details *</Label>
                <Textarea
                  id="droneDetails"
                  value={formData.droneDetails}
                  onChange={(e) => setFormData({ ...formData, droneDetails: e.target.value })}
                  required
                  placeholder="Drone model, tank capacity, spray rate, etc."
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Experience (Optional)</Label>
                <Textarea
                  id="experience"
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  placeholder="Tell us about your drone spraying experience..."
                  rows={3}
                />
              </div>

              <Button type="submit" size="xl" className="w-full">
                <CheckCircle2 className="w-5 h-5" />
                Submit Application
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
