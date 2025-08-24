import { useEffect, useRef, Fragment } from "react";
import Image from "next/image";
import styles from "./IntroSection.module.scss";
import MarqueeText from "../../global/MarqueeText/MarqueeText";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function IntroSection() {
  const firstScrollMarqueeItems = ["SKILLS", "CONHECIMENTO"];
  const repeatedScrollMarqueeItems = [
    ...firstScrollMarqueeItems,
    ...firstScrollMarqueeItems,
    ...firstScrollMarqueeItems,
  ];

  const lastScrollMarqueeItems = ["MUITO.", "MUITO ALÉM DOS TUTORIAIS"];
  const repeatedLastScrollMarqueeItems = [
    ...lastScrollMarqueeItems,
    ...lastScrollMarqueeItems,
    ...lastScrollMarqueeItems,
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const firstMarqueeScrollRef = useRef<HTMLDivElement>(null);
  const lastMarqueeScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animação da imagem
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { clipPath: "inset(0 0 100% 0)" },
          {
            clipPath: "inset(0 0 0% 0)",
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: imageRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Animação lateral do texto com scroll
      if (firstMarqueeScrollRef.current) {
        gsap.to(firstMarqueeScrollRef.current, {
          x: 600,
          ease: "none",
          scrollTrigger: {
            trigger: firstMarqueeScrollRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      if (lastMarqueeScrollRef.current) {
        gsap.to(lastMarqueeScrollRef.current, {
          x: -600,
          ease: "none",
          scrollTrigger: {
            trigger: lastMarqueeScrollRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }); 
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.introContainer} ref={containerRef}>
      {/* infinit marquee */}
      <div className={styles.infiniteMarqueeContainer}>
        <div className={styles.infiniteMarqueeItem}>
          <MarqueeText
            items={["CURSOS E IMERSÕES. UMA NOVA CULTURA DE MERCADO."]}
            duration={18}
            direction="left"
          />
        </div>

        <div className={styles.infiniteMarqueeItem}>
          <MarqueeText
            items={["TECNOLOGIA, INOVAÇÃO E NEGÓCIOS. PRESENTE E FUTURO."]}
            duration={20}
            direction="right"
          />
        </div>
      </div>

      {/* image */}
      <div className={styles.imageScrollMarqueeScrollContainer}>
        <div className={styles.imageWrapper} ref={imageRef}>
          <Image
            src="/images/intro_1.webp"
            alt="Mulher sentada em uma almofada em um ambiente moderno com fones de ouvido e uma expressão pensativa."
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>

        {/* scroll marquee */}
        <div className={styles.marqueeScrollContainer}>
          <div className={styles.marqueeScrollContainer}>
            <div
              className={`${styles.marqueeScroll} ${styles.marqueeScroll__first}`}
              ref={firstMarqueeScrollRef}
            >
              {repeatedScrollMarqueeItems.map((item, i) => (
                <Fragment key={i}>
                  <span className={styles.marqueeScrollItem}>
                    {item}
                  </span>
                  {i < repeatedScrollMarqueeItems.length - 1 && (
                    <span
                      key={`divisor-${i}`}
                      className={`${styles.marqueeScrollItem} ${styles.marqueeScrollItem__divisor}`}
                    ></span>
                  )}
                </Fragment>
              ))}
            </div>
            <div
              className={`${styles.marqueeScroll} ${styles.marqueeScroll__last}`}
              ref={lastMarqueeScrollRef}
            >
              {repeatedLastScrollMarqueeItems.map((item, i) => (
                <Fragment key={i}>
                  <span className={styles.marqueeScrollItem}>
                    {item}
                  </span>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
