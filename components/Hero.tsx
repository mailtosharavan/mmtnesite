// Hero.tsx

import React, { useState, useEffect } from "react";
import Image from "next/image";

// --- CONFIGURATION SECTION ---
const CENTRAL_LABEL = "T";
const ICON_SIZE_PX = 48; // Size of the SVG icons inside their containers
const CONTAINER_SIZE_PX = 96; // Size of the rounded square containers
const DIAGRAM_RADIUS = 160; // Radius for the icon distribution in pixels (adjust this for spacing)
const CENTRAL_ICON_URL = "logo-mindsmiratus.png"; // URL for the central AWS icon in your target screenshot

type DiagramNode = {
  label: string;
  url: string;
  // Position will be calculated in the array
};

// Animation Timing (in milliseconds)
const ROTATION_DURATION = 1500; // Time taken to rotate between icons
const FOCUS_DURATION = 2000;   // Time the icon stays zoomed/focused at the top


const NODES_CONFIG: DiagramNode[] = [
  // Icon, arranged roughly in order from top-left, clockwise
  { label: "ASP Net", url: "/icons/net.svg" },
  { label: "PHP Storm", url: "/icons/phpstorm.svg" },
  { label: "Azure", url: "/icons/azure.svg" },
  { label: ".NET", url: "/icons/net.svg" },
  { label: "SQL DB", url: "/icons/sqldatabase.svg" },
 {label: "React", url: "/icons/react.svg" },
  { label: "AWS", url: "/icons/aws.svg" }, // This node is intentionally repeated/used for structure
  { label: "Next.js", url: "/icons/nextjs.svg" },
  { label: "Node.js", url: "/icons/nodejs.svg" },
];

const NUM_NODES = NODES_CONFIG.length;
const ANGLE_STEP_DEG = 360 / NUM_NODES; // Angle difference between nodes in degrees

// Calculate Positions (Used for both CSS absolute and SVG line coordinates)
function calculateNodePositions(nodes: DiagramNode[], radius: number) {
  const angleStep = (Math.PI * 2) / nodes.length;

  const positionedNodes = nodes.map((node, index) => {
    // Start near the top and go clockwise
    const angle = (Math.PI / 2) - (index * angleStep); 
    return {
      ...node,
      x: radius * Math.cos(angle),
      y: -radius * Math.sin(angle),
    };
  });
  return positionedNodes;
}

// --- COMPONENTS ---

// Component for a single peripheral icon container
const IconBlock: React.FC<{ 
    node: ReturnType<typeof calculateNodePositions>[number]; 
    index: number; 
    isFocused: boolean; 
    currentRotationAngle: number; // Added new prop
}> = ({ node, index, isFocused, currentRotationAngle }) => (
  <div 
    className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-20 transition-transform duration-500 ease-in-out"
    style={{ 
      width: `${CONTAINER_SIZE_PX}px`, 
      height: `${CONTAINER_SIZE_PX}px`,
      left: `calc(50% + ${node.x}px)`,
      top: `calc(50% + ${node.y}px)`,
      // CORRECTED: Apply the *positive* rotation angle to counteract the parent's negative rotation.
      transform: `translate(-50%, -50%) rotate(${currentRotationAngle}deg)`,
    }}
  >
    {/* Icon Wrapper matching the soft design (White, Rounded, Shadow) */}
    {/* Icon Wrapper: Scale up if focused */}
    <div 
        className="bg-white p-3 rounded-2xl shadow-lg ring-1 ring-gray-100/50 transition-all duration-500 hover:scale-105"
        style={{
            transform: isFocused ? 'scale(1.3)' : 'scale(1)', // Apply zoom when focused
        }}
    >
      <Image
        src={node.url}
        alt={node.label}
        width={ICON_SIZE_PX}
        height={ICON_SIZE_PX}
        unoptimized 
      />
    </div>
    {/* Label */}
    <span className="mt-1 text-xs font-medium text-gray-700 whitespace-nowrap">
      {node.label}
    </span>
  </div>
);

// Component to draw all dashed lines using an SVG overlay
const DashedLineSVG: React.FC<{ nodes: ReturnType<typeof calculateNodePositions> }> = ({ nodes }) => {
  const svgWidth = DIAGRAM_RADIUS * 2 + CONTAINER_SIZE_PX; // Width based on radius + buffer
  const svgHeight = DIAGRAM_RADIUS * 2 + CONTAINER_SIZE_PX; // Height based on radius + buffer
  const centerX = svgWidth / 2;
  const centerY = svgHeight / 2;
  const lineStartOffset = 25; // Offset line start from center 'T'
  const lineEndOffset = CONTAINER_SIZE_PX / 2; // Offset line end from icon container edge

  return (
    <svg
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"
      width={svgWidth}
      height={svgHeight}
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
    >
      {nodes.map((node, index) => {
        // if (node.label === "AWS") return null; // Skip drawing line for the central icon if it's in the list
          

        // Calculate vector from center (centerX, centerY) to node position
        const dx = node.x;
        const dy = node.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        const unitX = dx / distance;
        const unitY = dy / distance;

        // Line starts away from the center 'T'
        const x1 = centerX + unitX * lineStartOffset;
        const y1 = centerY + unitY * lineStartOffset;

        // Line ends away from the icon container
        const x2 = centerX + unitX * (distance - lineEndOffset);
        const y2 = centerY + unitY * (distance - lineEndOffset);

        return (
          <line
            key={index}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#cccccc"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
        );
      })}
    </svg>
  );
};


// --- MAIN COMPONENT ---

export default function Hero() {
  const [currentFocusIndex, setCurrentFocusIndex] = useState(0);
  const positionedNodes = calculateNodePositions(NODES_CONFIG, DIAGRAM_RADIUS);

  // Calculate the required rotation angle (clockwise rotation means negative degrees applied to the container)
  const rotationAngle = currentFocusIndex * ANGLE_STEP_DEG;

  // Animation Loop: Rotates the diagram every ROTATION_DURATION + FOCUS_DURATION
  useEffect(() => {
    const totalStepTime = ROTATION_DURATION + FOCUS_DURATION;
    
    const interval = setTimeout(() => {
        // Move to the next icon (circularly)
        setCurrentFocusIndex(prevIndex => (prevIndex + 1) % NUM_NODES);
    }, totalStepTime);

    // Cleanup the timeout
    return () => clearTimeout(interval);
  }, [currentFocusIndex]);
  return (
    // Main container uses flex/grid to separate text (left) and diagram (right)
    <div className="container mx-auto px-4 flex justify-center">
      
      {/* Icon Diagram Container */}
      <div className="relative w-full max-w-4xl h-[450px] overflow-hidden">
        
        {/* DIAGRAM INNER WRAPPER: Rotated based on currentFocusIndex */}
        <div 
            className="absolute inset-0 transition-transform"
            style={{ 
                // Rotate the entire inner content (icons, lines) clockwise by -rotationAngle degrees
                transform: `rotate(${-rotationAngle}deg)`,
                transitionDuration: `${ROTATION_DURATION}ms`,
                transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)', // Bouncy transition
            }}
        >
        {/* 1. Dashed Lines SVG Overlay */}
        <DashedLineSVG nodes={positionedNodes} />

       {/* 2. Peripheral Icons */}
            {positionedNodes.map((node, index) => (
                <IconBlock 
                    key={index} 
                    node={node} 
                    index={index}
                    isFocused={index === currentFocusIndex}
                    currentRotationAngle={rotationAngle}
                />
            ))}
         </div>
        
        {/* 3. Central "T" Icon and Label */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center"
        >
          {/* Central Icon Container */}
          <div className="relative w-[150px] h-[150px] flex items-center justify-center">
            {/* AWS Icon with large 'T' text overlay */}
            <Image
              src={CENTRAL_ICON_URL}
              alt="Central Icon"
              width={150}
              height={150}
              className="opacity-20" // Reduce opacity for the background icon
              unoptimized
            />
            <div className="absolute text-[80px] font-black text-purple-600 z-40 select-none">
              {CENTRAL_LABEL}
            </div>
          </div>
          <span className="mt-1 text-sm font-semibold text-gray-700">
            {/* Optional: Central Icon Label */}
          </span>
        </div>

      </div>
    </div>
  );
}