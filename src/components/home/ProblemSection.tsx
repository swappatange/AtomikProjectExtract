import farmerImage from "@/assets/images/farmer.png";
import pilotImage from "@/assets/images/drone-operator.png";

const farmerChallenges = [
  { title: "Lack of Access", description: "Difficulty finding certified drone service providers in their region" },
  { title: "High Costs", description: "Manual spraying increases labor expenses and time requirements" },
  { title: "Inefficiency", description: "Uneven chemical application and direct health risks from exposure" },
  { title: "Trust Deficit", description: "No standardized pricing or quality assurance mechanisms" },
  { title: "Timing Issues", description: "Unavailable spray services during critical periods like pest outbreaks" },
];

const pilotChallenges = [
  { title: "Underutilized Assets", description: "Drones sit idle due to inconsistent booking patterns" },
  { title: "Limited Visibility", description: "No structured platform for operators to be discovered by farmers" },
  { title: "Fragmented Operations", description: "Payment collection and scheduling create operational bottlenecks" },
  { title: "Market Fragmentation", description: "Lack of coordinated ecosystem for sustainable business growth" },
];

export function ProblemSection() {
  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Problem Statement:{" "}
            <span className="text-primary">Bridging the Technology Gap</span>
          </h2>
        </div>

        <div className="space-y-16">
          <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-center">
            <div className="w-full md:w-2/5">
              <div 
                className="h-64 md:h-80 rounded-xl bg-cover bg-center"
                style={{ backgroundImage: `url(${farmerImage})` }}
              />
            </div>
            <div className="w-full md:w-3/5">
              <h3 className="text-2xl font-bold text-primary mb-6">Farmer Challenges</h3>
              <ul className="space-y-4">
                {farmerChallenges.map((challenge) => (
                  <li key={challenge.title} className="text-background/90">
                    <span className="font-bold text-background">{challenge.title}:</span>{" "}
                    {challenge.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse gap-8 lg:gap-12 items-center">
            <div className="w-full md:w-2/5">
              <div 
                className="h-64 md:h-80 rounded-xl bg-cover bg-center"
                style={{ backgroundImage: `url(${pilotImage})` }}
              />
            </div>
            <div className="w-full md:w-3/5">
              <h3 className="text-2xl font-bold text-primary mb-6">Drone Operator Challenges</h3>
              <ul className="space-y-4">
                {pilotChallenges.map((challenge) => (
                  <li key={challenge.title} className="text-background/90">
                    <span className="font-bold text-background">{challenge.title}:</span>{" "}
                    {challenge.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
