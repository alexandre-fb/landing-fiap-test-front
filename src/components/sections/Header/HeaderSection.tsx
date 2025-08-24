import { useEffect, useRef } from "react";
import styles from "./HeaderSection.module.scss";
import { gsap } from "gsap";
import { SplitText } from "gsap/dist/SplitText";
gsap.registerPlugin(SplitText);

export default function HeaderSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (titleRef.current) {
        const split = new SplitText(titleRef.current, { type: "lines" });

        gsap.from(split.lines, {
          y: -16,
          opacity: 0,
          duration: 0.8,
          delay: 0.25,
          ease: "power4.out",
          stagger: 0.2,
        });
      }

      if (subtitleRef.current) {
        gsap.fromTo(
          subtitleRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.7,
            delay: 0.8,
            ease: "power2.out",
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.textWrapper}>
        <h1 ref={titleRef} className={styles.headerTitle}>
          <span className={styles.indented}>A Melhor Faculdade</span>
          <span>de Tecnologia</span>
        </h1>
        <h2 ref={subtitleRef} className={styles.headerSubtitle}>
          SOB<span className={styles.sobreRight}>RE</span>
        </h2>
      </div>
    </header>
  );
}
