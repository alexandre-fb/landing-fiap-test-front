import Head from "next/head";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import styles from "@/styles/Home.module.scss"; 
import Navbar from "@/components/Navbar/Navbar";

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
          <Navbar />
        </header>
        <main>
          <section>
            <div className={styles.sectionContainer}>
              <h2 className={styles.title}>Section</h2>
            </div>
          </section>

          <section>
            <div className={styles.sectionContainer}>
              <h2 className={styles.title}>Section</h2>
            </div>
          </section>

          <section>
            <div className={styles.sectionContainer}>
              <h2 className={styles.title}>Section</h2>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
