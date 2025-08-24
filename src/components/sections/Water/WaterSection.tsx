"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./WaterSection.module.scss";

gsap.registerPlugin(ScrollTrigger);

export default function WaterSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameCount = 190; 
  const currentFrame = (index: number) =>
  `/images/water/water_${index.toString().padStart(3, "0")}.jpg`;


  useEffect(() => {
    const canvas = canvasRef.current!;
    const context = canvas.getContext("2d")!;
    const images: HTMLImageElement[] = [];
    const imgSeq = { frame: 0 };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    gsap.to(imgSeq, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        scrub: true,
        pin: false,
        trigger: canvas,
        end: "90%", 
      },
      onUpdate: () => render(),
    });

    function render() {
      const img = images[imgSeq.frame];
      if (img) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, 0, 0, canvas.width, canvas.height);
      }
    }

    images[0].onload = render;
  }, []);

  return (
    <div className={styles.waterContainer}>
      <canvas ref={canvasRef} width={1920} height={1080}></canvas>
    </div>
  );
}
