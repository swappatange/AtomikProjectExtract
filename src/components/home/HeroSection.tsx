import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://player.vimeo.com/progressive_redirect/playback/12345678/rendition/1080p/file.mp4?loc=external&signature=abc123" type="video/mp4" />
        </video>
        {/* Green overlay to maintain theme and ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-primary/40 to-primary/20 mix-blend-multiply" />
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxOTc1NmMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djJoNHYtMmgtNHptLTI0IDBoLTJ2LTJoLTJ2NmgyVjM2aDJ2LTJoNHYtMkgxMnpNMTIgMjJoLTJ2LTJoLTJ2MmgtMnYyaDJ2NGgydjJoMlYyNmg0di0yaDJ2LTJoLTJ2LTJoLTR2LTJoLTJ6bTAgMHYyaDR2LTJoLTR6bTI0IDBoLTJ2LTJoLTJ2NmgyVjIyaDJ2LTJoNHYtMmgtNHptLTEyIDBoLTR2LTJoNHYyem0yNCAwaC0ydjJoLTR2LTJoLTJ2NmgyVjIyaDJ2LTJoNHYtMnpNMzYgMTBoLTR2LTJoNHYyem0yNCAwaC0ydjJoLTR2LTJoLTJ2NmgyVjEyaDJ2LTJoNHYtMnpNMTIgMzRoNHYtMmg0di0yaDJ2NmgtMlYzNmg0djJoLTZWMzR6bTI0IDBoNHYtMmg0di0yaDJ2NmgtMlYzNmg0djJoLTZWMzR6TTAgMGg2MHY2MEgweiIvPjwvZz48L2c+PC9zdmc+')" }} />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto lg:mx-0">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm text-primary-foreground/90">Trusted agri-tech ecosystem for modern India</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Precision Farming.{" "}
              <span className="text-accent">Delivered</span> to Your Field.
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0">
              Atomik connects farmers with certified drone pilots through a unified platform—bringing speed, safety, and accuracy to every farm operation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" asChild>
                <Link to="/book">
                  Book a Drone Spray
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/pilots">Join as a Drone Pilot</Link>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}