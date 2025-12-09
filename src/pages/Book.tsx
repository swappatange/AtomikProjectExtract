import { motion } from "framer-motion";
import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import {
  MapPin,
  Leaf,
  Calendar,
  Clock,
  CheckCircle2,
  Shield,
  Zap,
  FileText,
  BadgeCheck,
} from "lucide-react";

const howItWorks = [
  { icon: Leaf, text: "Enter your crop and location" },
  { icon: MapPin, text: "Choose acreage" },
  { icon: Calendar, text: "Pick a date & time slot" },
  { icon: CheckCircle2, text: "Confirm your booking" },
  { icon: Zap, text: "Pilot arrives & completes spray" },
  { icon: FileText, text: "Receive digital spray report" },
];

const benefits = [
  { icon: Zap, text: "Faster than manual spraying" },
  { icon: Leaf, text: "Chemical savings" },
  { icon: Shield, text: "Safety for farmers" },
  { icon: Clock, text: "Timely operations" },
  { icon: BadgeCheck, text: "Verified pilot guarantee" },
];

export default function Book() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    cropType: "",
    acreage: "",
    preferredDate: "",
    preferredTime: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Request Submitted!",
      description: "We'll confirm your booking slot within 24 hours.",
    });
    setFormData({
      name: "",
      phone: "",
      location: "",
      cropType: "",
      acreage: "",
      preferredDate: "",
      preferredTime: "",
      notes: "",
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
              Book Now
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Book a Drone Spray
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80">
              Book certified drone spraying in minutes. Fast, safe, and precise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
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
              Simple Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              How It Works
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            {howItWorks.map((step, index) => (
              <motion.div
                key={step.text}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex items-start gap-4 p-5 bg-card rounded-xl border border-border shadow-soft"
              >
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {index + 1}
                </div>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="font-medium text-foreground text-sm">{step.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.text}
                className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full"
              >
                <benefit.icon className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-foreground">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-24 bg-muted">
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
                Get Started
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Book Your Spray
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

              <div className="space-y-2">
                <Label htmlFor="location">Farm Location *</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  required
                  placeholder="Village, Taluka, District, State"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="cropType">Crop Type *</Label>
                  <Input
                    id="cropType"
                    value={formData.cropType}
                    onChange={(e) => setFormData({ ...formData, cropType: e.target.value })}
                    required
                    placeholder="e.g., Cotton, Paddy, Sugarcane"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="acreage">Acreage *</Label>
                  <Input
                    id="acreage"
                    type="number"
                    value={formData.acreage}
                    onChange={(e) => setFormData({ ...formData, acreage: e.target.value })}
                    required
                    placeholder="Number of acres"
                    min="1"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="preferredDate">Preferred Date *</Label>
                  <Input
                    id="preferredDate"
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="preferredTime">Preferred Time *</Label>
                  <Input
                    id="preferredTime"
                    type="time"
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Additional Notes (Optional)</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Any specific requirements or information..."
                  rows={3}
                />
              </div>

              <Button type="submit" size="xl" className="w-full">
                <Calendar className="w-5 h-5" />
                Book Now
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                We'll confirm your booking slot within 24 hours via phone call.
              </p>
            </form>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
