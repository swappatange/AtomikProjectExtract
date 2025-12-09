import { Link } from "react-router-dom";
import { MapPin, FileText, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { icon: MapPin, text: "Track pilots in real time" },
  { icon: FileText, text: "Access digital spray reports" },
  { icon: Bell, text: "Get booking notifications" },
];

export function AppDownloadSection() {
  return (
    <section className="py-24 gradient-hero overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Farm operations, now{" "}
              <span className="text-accent">inside your phone</span>
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-lg mx-auto lg:mx-0">
              Manage bookings, track pilots in real time, and access spray records through the Atomik mobile app.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Button variant="hero" size="xl" asChild>
                <Link to="/download">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.523 15.341a.91.91 0 0 0-.545.258c-.133.132-.254.294-.363.487a3.976 3.976 0 0 0-.294.643 4.4 4.4 0 0 0-.182.705c-.034.213-.054.405-.063.576a2.23 2.23 0 0 0 .018.402.666.666 0 0 0 .09.267c.045.07.108.113.19.127a.575.575 0 0 0 .309-.054c.11-.05.228-.127.353-.228.125-.102.254-.223.386-.363.133-.14.263-.296.39-.467.127-.17.248-.351.363-.545.114-.193.217-.392.308-.596a4.1 4.1 0 0 0 .218-.576c.05-.177.082-.334.1-.471a1.57 1.57 0 0 0 .008-.336.575.575 0 0 0-.081-.236.356.356 0 0 0-.182-.154.592.592 0 0 0-.281-.045c-.12.008-.257.044-.409.108a2.24 2.24 0 0 0-.333.153zM3.018 15.1l4.318 7.478c.11.193.276.29.5.29h8.327c.224 0 .39-.097.5-.29l4.318-7.478c.11-.19.11-.39 0-.58L16.664 7.04a.57.57 0 0 0-.5-.29H7.836a.57.57 0 0 0-.5.29L3.018 14.52c-.11.19-.11.39 0 .58z"/>
                  </svg>
                  Download for Android
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" disabled className="opacity-70">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  Coming Soon for iOS
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              {features.map((feature) => (
                <div
                  key={feature.text}
                  className="flex items-center gap-2 text-primary-foreground/80"
                >
                  <feature.icon className="w-5 h-5 text-accent" />
                  <span className="text-sm">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Phone mockup */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full scale-75" />
              
              {/* Phone frame */}
              <div className="relative w-64 h-[500px] bg-foreground rounded-[3rem] p-3 shadow-strong">
                <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden flex flex-col">
                  {/* Status bar */}
                  <div className="h-8 bg-primary flex items-center justify-center">
                    <div className="w-20 h-1 bg-primary-foreground/30 rounded-full" />
                  </div>
                  
                  {/* App content preview */}
                  <div className="flex-1 p-4 space-y-4">
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto rounded-xl gradient-hero flex items-center justify-center mb-2">
                        <span className="text-primary-foreground font-bold">A</span>
                      </div>
                      <h4 className="font-bold text-foreground text-sm">Atomik</h4>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="bg-muted rounded-xl p-3">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-6 h-6 rounded-full bg-primary/20" />
                          <div className="h-2 bg-foreground/10 rounded flex-1" />
                        </div>
                        <div className="h-2 bg-foreground/10 rounded w-3/4" />
                      </div>
                      
                      <div className="bg-accent/10 rounded-xl p-3 border border-accent/30">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs font-medium text-foreground">Active Booking</span>
                          <span className="text-xs text-accent font-semibold">In Progress</span>
                        </div>
                        <div className="h-2 bg-accent/30 rounded-full overflow-hidden">
                          <div className="h-full w-2/3 bg-accent rounded-full" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-primary/10 rounded-lg p-2 text-center">
                          <div className="text-lg font-bold text-primary">12</div>
                          <div className="text-[10px] text-muted-foreground">Sprays Done</div>
                        </div>
                        <div className="bg-secondary/10 rounded-lg p-2 text-center">
                          <div className="text-lg font-bold text-secondary">48</div>
                          <div className="text-[10px] text-muted-foreground">Acres Covered</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}