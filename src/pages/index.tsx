import Head from "next/head";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import styles from "@/styles/Home.module.scss"; 
import NavbarSection from "@/components/sections/Navbar/NavbarSection";
import HeaderSection from "@/components/sections/Header/HeaderSection";
import IntroSection from "@/components/sections/Intro/IntroSection";
import CursosSection from "@/components/sections/Cursos/CursosSection/CursosSection";
import CursosMobileSection from "@/components/sections/Cursos/CursoMobileSection/CursosMobileSection";
import FaqSection from "@/components/sections/FAQ/FaqSection";

export default function Home() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container.current) {

      gsap.to(container.current, {
        x: 100,
        rotation: 10,
        duration: 1,
        repeat: -1, 
        yoyo: true, 
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>FIAP - Landing Teste</title>
        <meta name="description" content="Cursos Presenciais e On-line: Graduação, Pós-Graduação/MBA e Cursos de Curta Duração. FIAP é Tecnologia, Inovação e Empreendedorismo." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <header>
          <NavbarSection />
        </header>
        <main>
          <section>
            <HeaderSection />
          </section>

          <section>
            <IntroSection />
          </section>

          <section>
            <div className={styles.cursosDesktop}><CursosSection /></div>
            <div className={styles.cursosMobile}><CursosMobileSection /></div>
          </section>

          <section>
            <FaqSection />
          </section>
        </main>
      </div>
    </>
  );
}
