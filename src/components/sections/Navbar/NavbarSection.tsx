import { useEffect, useRef } from "react";
import styles from "./NavbarSection.module.scss";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const scrollBarRef = useRef<HTMLDivElement>(null);
  const navbarContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (navbarContentRef.current) {
      ScrollTrigger.create({
        trigger: document.body,
        start: "top top",
        onEnter: () => navbarContentRef.current?.classList.add(styles.scrolled),
        onLeaveBack: () =>
          navbarContentRef.current?.classList.remove(styles.scrolled),
      });
    }

    if (scrollBarRef.current) {
      gsap.to(scrollBarRef.current, {
        width: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          onUpdate: (self) => {
            if (scrollBarRef.current) {
              scrollBarRef.current.style.width = `${self.progress * 100}%`;
            }
          },
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <nav
      className={styles.nav}
      role="navigation"
      aria-label="Barra de navegação"
    >
      <div ref={navbarContentRef} className={styles.navbarContent}>
        {/* Barra de progresso */}
        <div ref={scrollBarRef} className={styles.scrollBar} />

        {/* Logo */}
        <div className={styles.logoContainer}>
          <Image
            src="/images/logo-fiap.svg"
            alt="Logo FIAP"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
      </div>
    </nav>
  );
}
