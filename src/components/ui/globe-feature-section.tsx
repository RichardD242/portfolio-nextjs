"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import createGlobe, { COBEOptions } from "cobe";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface GlobeFeatureSectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonHref?: string;
}

export default function GlobeFeatureSection({
  title,
  subtitle,
  buttonText,
  buttonHref = "#work",
}: GlobeFeatureSectionProps) {
  return (
    <section className="relative w-full mx-auto">
      {/* Title on top */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
          {title}
        </h1>
      </div>
      
      {/* Globe card */}
      <div className="overflow-hidden rounded-3xl bg-gray-950 border border-gray-800 shadow-md px-6 py-16 md:px-16 md:py-24">
        <div className="flex flex-col-reverse items-center justify-between gap-10 md:flex-row">
          <div className="z-10 max-w-xl text-left">
            <p className="text-2xl md:text-3xl font-light text-gray-400 leading-relaxed">
              {subtitle}
            </p>
            <a href={buttonHref}>
              <Button className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-gray-200">
                {buttonText} <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          </div>
          <div className="relative h-[250px] md:h-[300px] w-full max-w-xl">
            <Globe className="absolute -bottom-20 -right-20 md:-right-40 scale-125 md:scale-150" />
          </div>
        </div>
      </div>
    </section>
  );
}

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [0.1, 0.1, 0.1],
  markerColor: [0.1, 0.8, 0.8],
  glowColor: [0.1, 0.8, 0.8],
  markers: [
    // Central Europe
    { location: [50.0755, 14.4378], size: 0.1 },    // Prague, Czech Republic
    { location: [48.2082, 16.3738], size: 0.08 },   // Vienna, Austria
    { location: [48.1486, 17.1077], size: 0.07 },   // Bratislava, Slovakia
    { location: [50.1109, 8.6821], size: 0.08 },    // Frankfurt, Germany
    { location: [52.52, 13.405], size: 0.08 },      // Berlin, Germany
    { location: [48.1351, 11.582], size: 0.07 },    // Munich, Germany
    { location: [50.9375, 6.9603], size: 0.06 },    // Cologne, Germany
    { location: [53.5511, 9.9937], size: 0.06 },    // Hamburg, Germany
    { location: [47.3769, 8.5417], size: 0.08 },    // Zurich, Switzerland
    { location: [46.2044, 6.1432], size: 0.08 },    // Geneva, Switzerland
    { location: [46.9480, 7.4474], size: 0.05 },    // Bern, Switzerland
    { location: [52.3676, 4.9041], size: 0.08 },    // Amsterdam, Netherlands
    { location: [50.8503, 4.3517], size: 0.07 },    // Brussels, Belgium
    { location: [49.6117, 6.1319], size: 0.06 },    // Luxembourg
    // Western Europe
    { location: [51.5074, -0.1278], size: 0.1 },    // London, UK
    { location: [55.9533, -3.1883], size: 0.06 },   // Edinburgh, UK
    { location: [53.4808, -2.2426], size: 0.06 },   // Manchester, UK
    { location: [48.8566, 2.3522], size: 0.09 },    // Paris, France
    { location: [43.2965, 5.3698], size: 0.06 },    // Marseille, France
    { location: [45.764, 4.8357], size: 0.06 },     // Lyon, France
    { location: [43.7102, 7.262], size: 0.06 },     // Nice, France
    { location: [43.7384, 7.4246], size: 0.08 },    // Monaco
    // Southern Europe
    { location: [41.9028, 12.4964], size: 0.08 },   // Rome, Italy
    { location: [45.4642, 9.19], size: 0.08 },      // Milan, Italy
    { location: [43.7696, 11.2558], size: 0.05 },   // Florence, Italy
    { location: [45.4408, 12.3155], size: 0.05 },   // Venice, Italy
    { location: [40.4168, -3.7038], size: 0.08 },   // Madrid, Spain
    { location: [41.3851, 2.1734], size: 0.08 },    // Barcelona, Spain
    { location: [36.7213, -4.4214], size: 0.05 },   // Marbella, Spain
    { location: [38.7223, -9.1393], size: 0.07 },   // Lisbon, Portugal
    { location: [37.9838, 23.7275], size: 0.07 },   // Athens, Greece
    // Nordic
    { location: [59.3293, 18.0686], size: 0.07 },   // Stockholm, Sweden
    { location: [55.6761, 12.5683], size: 0.07 },   // Copenhagen, Denmark
    { location: [59.9139, 10.7522], size: 0.06 },   // Oslo, Norway
    { location: [60.1699, 24.9384], size: 0.06 },   // Helsinki, Finland
    // Middle East
    { location: [25.2048, 55.2708], size: 0.1 },    // Dubai, UAE
    { location: [24.4539, 54.3773], size: 0.08 },   // Abu Dhabi, UAE
    { location: [25.286, 51.534], size: 0.07 },     // Doha, Qatar
    { location: [26.2285, 50.5860], size: 0.06 },   // Manama, Bahrain
    { location: [24.7136, 46.6753], size: 0.07 },   // Riyadh, Saudi Arabia
    { location: [32.0853, 34.7818], size: 0.07 },   // Tel Aviv, Israel
    // Asia
    { location: [22.3193, 114.1694], size: 0.1 },   // Hong Kong
    { location: [1.3521, 103.8198], size: 0.1 },    // Singapore
    { location: [35.6762, 139.6503], size: 0.09 },  // Tokyo, Japan
    { location: [34.6937, 135.5022], size: 0.07 },  // Osaka, Japan
    { location: [31.2304, 121.4737], size: 0.08 },  // Shanghai, China
    { location: [39.9042, 116.4074], size: 0.08 },  // Beijing, China
    { location: [22.5431, 114.0579], size: 0.07 },  // Shenzhen, China
    { location: [37.5665, 126.978], size: 0.08 },   // Seoul, South Korea
    { location: [25.0330, 121.5654], size: 0.07 },  // Taipei, Taiwan
    { location: [13.7563, 100.5018], size: 0.07 },  // Bangkok, Thailand
    { location: [3.139, 101.6869], size: 0.06 },    // Kuala Lumpur, Malaysia
    { location: [19.076, 72.8777], size: 0.08 },    // Mumbai, India
    // North America
    { location: [40.7128, -74.006], size: 0.1 },    // New York City, USA
    { location: [34.0522, -118.2437], size: 0.1 },  // Los Angeles, USA
    { location: [37.7749, -122.4194], size: 0.08 }, // San Francisco, USA
    { location: [42.3601, -71.0589], size: 0.08 },  // Boston, USA
    { location: [25.7617, -80.1918], size: 0.08 },  // Miami, USA
    { location: [41.8781, -87.6298], size: 0.07 },  // Chicago, USA
    { location: [47.6062, -122.3321], size: 0.07 }, // Seattle, USA
    { location: [33.749, -84.388], size: 0.06 },    // Atlanta, USA
    { location: [29.7604, -95.3698], size: 0.06 },  // Houston, USA
    { location: [32.7767, -96.797], size: 0.06 },   // Dallas, USA
    { location: [36.1699, -115.1398], size: 0.07 }, // Las Vegas, USA
    { location: [43.6532, -79.3832], size: 0.07 },  // Toronto, Canada
    { location: [49.2827, -123.1207], size: 0.06 }, // Vancouver, Canada
    { location: [45.5017, -73.5673], size: 0.06 },  // Montreal, Canada
    // South America
    { location: [-23.5505, -46.6333], size: 0.08 }, // São Paulo, Brazil
    { location: [-22.9068, -43.1729], size: 0.07 }, // Rio de Janeiro, Brazil
    { location: [-34.6037, -58.3816], size: 0.07 }, // Buenos Aires, Argentina
    { location: [-33.4489, -70.6693], size: 0.06 }, // Santiago, Chile
    { location: [19.4326, -99.1332], size: 0.07 },  // Mexico City, Mexico
    { location: [20.6597, -103.3496], size: 0.05 }, // Guadalajara, Mexico
    // Oceania & Africa
    { location: [-33.8688, 151.2093], size: 0.08 }, // Sydney, Australia
    { location: [-37.8136, 144.9631], size: 0.07 }, // Melbourne, Australia
    { location: [-36.8485, 174.7633], size: 0.06 }, // Auckland, New Zealand
    { location: [-33.9249, 18.4241], size: 0.07 },  // Cape Town, South Africa
    { location: [30.0444, 31.2357], size: 0.06 },   // Cairo, Egypt
    { location: [33.5731, -7.5898], size: 0.06 },   // Casablanca, Morocco
  ],
};

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  let phi = 0;
  let width = 0;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const [r, setR] = useState(0);

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      setR(delta / 200);
    }
  };

  const onRender = useCallback(
    (state: Record<string, number>) => {
      if (!pointerInteracting.current) phi += 0.005;
      state.phi = phi + r;
      state.width = width * 2;
      state.height = width * 2;
    },
    [r]
  );

  const onResize = () => {
    if (canvasRef.current) {
      width = canvasRef.current.offsetWidth;
    }
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender,
    });

    setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = "1";
      }
    });
    return () => globe.destroy();
  }, []);

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
        className
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
        )}
        ref={canvasRef}
        onPointerDown={(e) =>
          updatePointerInteraction(
            e.clientX - pointerInteractionMovement.current
          )
        }
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
}
