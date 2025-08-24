import SectionTitle from "../../global/SectionTitle/SectionTitle";
import styles from "./FaqSection.module.scss";

export default function FaqSection() {
  const faqItems = [
    {
      question: "QUANDO POSSO ME MATRICULAR?",
      answer:
        "A FIAP é uma instituição de ensino superior que oferece cursos de graduação, pós-graduação e MBA nas áreas de tecnologia, inovação e negócios.",
    },
    {
      question: "POSSO FAZER DOIS OU MAIS CURSOS AO MESMO TEMPO?",
      answer:
        "Sim. Apenas atente-se às datas, elas devem ser diferentes, porque cada curso tem sua dinâmica.",
    },
    {
      question: "QUAIS OS PRÉ-REQUISITOS?",
      answer:
        "Você pode se inscrever em um curso através do site da FIAP, onde encontrará informações sobre os cursos disponíveis e o processo de inscrição.",
    },
     {
      question: "QUAL A DURAÇÃO DOS CURSOS?",
      answer:
        "A duração dos cursos varia de acordo com o tipo e a modalidade. Os cursos de graduação têm duração média de 4 anos, enquanto os cursos de pós-graduação e MBA podem variar de 1 a 2 anos.",
    },
    {
      question: "PRECISO LEVAR ALGUM MATERIAL PARA AS AULAS?",
      answer:
        "A FIAP oferece uma ampla gama de cursos, incluindo graduação, pós-graduação e cursos de curta duração nas áreas de tecnologia, inovação e negócios.",
    },
    {
      question: "VOU RECEBER CERTIFICADO DE CONCLUSÃO DE CURSO?",
      answer:
        "Sim, ao concluir um curso na FIAP, você receberá um certificado de conclusão.",
    },
  ];

  return (
    <div className={styles.faqContainer}>
      <div className={styles.titleContainer}>
        <SectionTitle title="FAQ" subtitle="Dúvidas Frequentes" />
      </div>

      <ul className={styles.faqList}>
        {faqItems.map((item, index) => (
          <li key={index} className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>{item.question}</h3>
            <div className={styles.faqPanel}>
              <p>{item.answer}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
