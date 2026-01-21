"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  // Smooth fade for title
  const titleOpacity = useTransform(scrollYProgress, [0, 0.15, 0.3], [1, 0.5, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.3], [0, -30]);

  return (
    <div
      className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}
    >
      <div
        className="py-10 md:py-40 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        {/* Title centered */}
        <Header titleComponent={titleComponent} opacity={titleOpacity} y={titleY} />
        {/* Card below */}
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ 
  titleComponent,
  opacity,
  y,
}: { 
  titleComponent: React.ReactNode;
  opacity: MotionValue<number>;
  y: MotionValue<number>;
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className="max-w-5xl mx-auto text-center mb-10"
    >
      <motion.div
        style={{
          opacity,
          y,
        }}
      >
        {titleComponent}
      </motion.div>
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  translate,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        translateY: translate,
        boxShadow:
          "0 0 30px rgba(6, 182, 212, 0.15), 0 9px 20px rgba(0,0,0,0.4), 0 37px 37px rgba(0,0,0,0.3)",
      }}
      className="max-w-5xl mx-auto h-[30rem] md:h-[40rem] w-full border border-gray-800 p-2 md:p-6 bg-gray-950 rounded-[30px] shadow-2xl relative z-10"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black md:rounded-2xl md:p-4">
        {children}
      </div>
    </motion.div>
  );
};
