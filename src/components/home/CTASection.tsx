import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ctaBackground from "@assets/stock_images/drone_spraying_crops_555b8399.jpg";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${ctaBackground})` }}
      />
      <div className="absolute inset-0 bg-primary/85" />
      
      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to experience{" "}
            <span className="text-accent">precision farming</span>?
          </h2>
          
          <p className="text-lg text-primary-foreground/80 mb-8">
            Join thousands of farmers who have transformed their operations with Atomik's drone spraying services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/book">
                Book a Drone Spray
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
