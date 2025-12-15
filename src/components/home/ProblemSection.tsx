import farmerImage from "@/assets/images/farmer.png";
import pilotImage from "@/assets/images/drone-operator.png";

const farmerChallenges = [
  { title: "Lack of Access", description: "Finding certified drone service providers in their region" },
  { title: "High Costs", description: "Manual spraying increases labor expenses and time" },
  { title: "Inefficiency", description: "Uneven chemical application and health risks" },
  { title: "Trust Deficit", description: "No standardized pricing or quality assurance" },
  { title: "Timing Issues", description: "Unavailable services during critical pest outbreaks" },
];

const pilotChallenges = [
  { title: "Underutilized Assets", description: "Drones sit idle due to inconsistent bookings" },
  { title: "Limited Visibility", description: "No platform to be discovered by farmers" },
  { title: "Fragmented Operations", description: "Payment and scheduling bottlenecks" },
  { title: "Market Fragmentation", description: "No ecosystem for sustainable growth" },
];

export function ProblemSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Problem Statement:{" "}
            <span className="text-primary">Bridging the Technology Gap</span>
          </h2>
        </div>

        <div className="space-y-12">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/50">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-2/5 flex-shrink-0">
                <div 
                  className="h-56 md:h-72 rounded-xl bg-cover bg-center shadow-xl"
                  style={{ backgroundImage: `url(${farmerImage})` }}
                />
              </div>
              <div className="w-full md:w-3/5">
                <h3 className="text-xl md:text-2xl font-bold text-cyan-400 mb-5">Farmer Challenges</h3>
                <ul className="space-y-3">
                  {farmerChallenges.map((challenge) => (
                    <li key={challenge.title} className="flex items-start gap-2">
                      <span className="font-semibold text-white whitespace-nowrap">{challenge.title}:</span>
                      <span className="text-gray-300">{challenge.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/50">
            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="w-full md:w-2/5 flex-shrink-0">
                <div 
                  className="h-56 md:h-72 rounded-xl bg-cover bg-center shadow-xl"
                  style={{ backgroundImage: `url(${pilotImage})` }}
                />
              </div>
              <div className="w-full md:w-3/5">
                <h3 className="text-xl md:text-2xl font-bold text-cyan-400 mb-5">Drone Operator Challenges</h3>
                <ul className="space-y-3">
                  {pilotChallenges.map((challenge) => (
                    <li key={challenge.title} className="flex items-start gap-2">
                      <span className="font-semibold text-white whitespace-nowrap">{challenge.title}:</span>
                      <span className="text-gray-300">{challenge.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
