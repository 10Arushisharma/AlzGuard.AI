import { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";

const NeuralNetwork = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const neuronsRef = useRef([]);
  const animationRef = useRef(null);
  const scrollProgressRef = useRef(0);

  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0
  });

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      scrollProgressRef.current = value;
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: document.documentElement.scrollHeight
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    const observer = new ResizeObserver(updateDimensions);
    observer.observe(document.body);

    return () => {
      window.removeEventListener("resize", updateDimensions);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!dimensions.width || !dimensions.height) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const neuronCount = Math.floor(
      (dimensions.width * dimensions.height) / 12000
    );

    const neurons = [];

    for (let i = 0; i < neuronCount; i++) {
      const x = Math.random() * dimensions.width;
      const y = Math.random() * dimensions.height;

      neurons.push({
        id: i,
        x,
        y,
        baseX: x,
        baseY: y,
        size: Math.random() * 3 + 1.5,
        pulseDelay: Math.random() * Math.PI * 2,
        spawnProgress: (y / dimensions.height) * 0.8
      });
    }

    neuronsRef.current = neurons;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      time += 0.008;

      const scroll = scrollProgressRef.current;
      const growthFactor = 0.3 + scroll * 0.7;
      const maxDistance = 100 + scroll * 150;

      neurons.forEach((n) => {
        n.x = n.baseX + Math.sin(time + n.pulseDelay) * 25;
        n.y = n.baseY + Math.cos(time * 0.6 + n.pulseDelay) * 20;
      });

      const visible = neurons.filter(
        (n) => scroll >= n.spawnProgress * 0.5
      );

      const getAlpha = (n) => {
        const delta = scroll - n.spawnProgress * 0.5;
        if (delta < 0) return 0;
        return Math.min(1, delta * 3 + 0.4);
      };

      for (let i = 0; i < visible.length; i++) {
        for (let j = i + 1; j < visible.length; j++) {
          const a = visible[i];
          const b = visible[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha =
              (1 - dist / maxDistance) *
              Math.min(getAlpha(a), getAlpha(b));

            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `hsla(127,56%,50%,${alpha})`;
            ctx.lineWidth = 0.8 + growthFactor;
            ctx.stroke();
          }
        }
      }

      visible.forEach((n) => {
        const alpha = getAlpha(n);
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.size * alpha * 2, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(127,56%,60%,${alpha})`;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current)
        cancelAnimationFrame(animationRef.current);
    };
  }, [dimensions]);

  return (
    <motion.div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0"
    >
      <canvas
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
        className="absolute top-0 left-0"
        style={{ width: "100%", height: dimensions.height }}
      />
    </motion.div>
  );
};

export default NeuralNetwork;
