import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Smartphone, MapPin, FileText, Bell, Shield, Clock } from "lucide-react";

const features = [
  { icon: MapPin, title: "Real-time Tracking", description: "Track your assigned pilot live on the map" },
  { icon: FileText, title: "Digital Reports", description: "Access spray records and documentation anytime" },
  { icon: Bell, title: "Instant Notifications", description: "Get updates on bookings and pilot arrivals" },
  { icon: Shield, title: "Verified Pilots", description: "All pilots are certified and background-verified" },
  { icon: Clock, title: "Easy Scheduling", description: "Book slots that work for your farm schedule" },
  { icon: Smartphone, title: "Simple Interface", description: "Designed for ease of use in rural areas" },
];

export default function Download() {
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
              Mobile App
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Your Farm Operations. Simplified.
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-10">
              Book drone sprays, track pilots, access reports, and manage everything from the Atomik app.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.523 15.341a.91.91 0 0 0-.545.258c-.133.132-.254.294-.363.487a3.976 3.976 0 0 0-.294.643 4.4 4.4 0 0 0-.182.705c-.034.213-.054.405-.063.576a2.23 2.23 0 0 0 .018.402.666.666 0 0 0 .09.267c.045.07.108.113.19.127a.575.575 0 0 0 .309-.054c.11-.05.228-.127.353-.228.125-.102.254-.223.386-.363.133-.14.263-.296.39-.467.127-.17.248-.351.363-.545.114-.193.217-.392.308-.596a4.1 4.1 0 0 0 .218-.576c.05-.177.082-.334.1-.471a1.57 1.57 0 0 0 .008-.336.575.575 0 0 0-.081-.236.356.356 0 0 0-.182-.154.592.592 0 0 0-.281-.045c-.12.008-.257.044-.409.108a2.24 2.24 0 0 0-.333.153zM3.018 15.1l4.318 7.478c.11.193.276.29.5.29h8.327c.224 0 .39-.097.5-.29l4.318-7.478c.11-.19.11-.39 0-.58L16.664 7.04a.57.57 0 0 0-.5-.29H7.836a.57.57 0 0 0-.5.29L3.018 14.52c-.11.19-.11.39 0 .58z"/>
                </svg>
                Download for Android
              </Button>
              <Button variant="heroOutline" size="xl" disabled className="opacity-70">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Coming Soon for iOS
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
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
              App Features
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Everything You Need
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border shadow-soft hover:shadow-medium transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Phone Preview */}
      <section className="py-24 bg-muted">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-12 justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-md text-center lg:text-left"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Manage Your Farm From Anywhere
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                The Atomik app puts the power of precision agriculture in your pocket. Book services, monitor progress, and access records—all from your smartphone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="default" size="lg">
                  Download Now
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Phone frame */}
              <div className="relative w-64 h-[500px] bg-foreground rounded-[3rem] p-3 shadow-strong">
                <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden flex flex-col">
                  {/* Status bar */}
                  <div className="h-8 bg-primary flex items-center justify-center">
                    <div className="w-20 h-1 bg-primary-foreground/30 rounded-full" />
                  </div>
                  
                  {/* App content */}
                  <div className="flex-1 p-4 space-y-4">
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto rounded-xl gradient-hero flex items-center justify-center mb-2">
                        <span className="text-primary-foreground font-bold">A</span>
                      </div>
                      <h4 className="font-bold text-foreground text-sm">Atomik</h4>
                      <p className="text-xs text-muted-foreground">Precision Farming</p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="bg-accent/10 rounded-xl p-3 border border-accent/30">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs font-medium text-foreground">Next Booking</span>
                          <span className="text-xs text-accent font-semibold">Tomorrow</span>
                        </div>
                        <p className="text-xs text-muted-foreground">10 acres • Cotton • 8:00 AM</p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-primary/10 rounded-lg p-3 text-center">
                          <div className="text-lg font-bold text-primary">24</div>
                          <div className="text-[10px] text-muted-foreground">Total Sprays</div>
                        </div>
                        <div className="bg-secondary/10 rounded-lg p-3 text-center">
                          <div className="text-lg font-bold text-secondary">156</div>
                          <div className="text-[10px] text-muted-foreground">Acres Covered</div>
                        </div>
                      </div>

                      <Button className="w-full" size="sm">
                        Book New Spray
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
