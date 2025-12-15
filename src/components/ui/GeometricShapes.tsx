import geometricShapes from "@/assets/images/geometric-shapes.png";

interface GeometricShapesProps {
  position?: "bottom-left" | "bottom-right" | "top-left" | "top-right";
  className?: string;
  opacity?: number;
  size?: "sm" | "md" | "lg";
  flip?: boolean;
}

export function GeometricShapes({ 
  position = "bottom-right", 
  className = "",
  opacity = 0.15,
  size = "md",
  flip = false
}: GeometricShapesProps) {
  const positionClasses = {
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
  };

  const sizeClasses = {
    sm: "w-48 md:w-64",
    md: "w-64 md:w-80 lg:w-96",
    lg: "w-80 md:w-96 lg:w-[500px]",
  };

  return (
    <div 
      className={`absolute pointer-events-none ${positionClasses[position]} ${className}`}
      style={{ opacity }}
    >
      <img 
        src={geometricShapes} 
        alt=""
        className={`${sizeClasses[size]} h-auto ${flip ? "scale-x-[-1]" : ""}`}
        aria-hidden="true"
      />
    </div>
  );
}
