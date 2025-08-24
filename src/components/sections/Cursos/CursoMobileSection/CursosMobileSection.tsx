import { useState } from "react";
import styles from "./CursosMobileSection.module.scss";
import { courses, courseListByCategory, courseValue } from "../CoursesData";
import CourseContent from "../components/CourseContent/CourseContent";
import SectionTitle from "../../../global/SectionTitle/SectionTitle";

export default function CursosMobileSection() {
  const [openTab, setOpenTab] = useState<courseValue | null>(null);

  const handleAccordion = (tabValue: courseValue) => {
    setOpenTab(openTab === tabValue ? null : tabValue);
  };

  return (
    <div className={styles.cursosContainer}>
      <div className={styles.titleContainer}>
        <SectionTitle title="Cursos" subtitle="Cursos de Curta Duração" />
      </div>

      <div className={styles.accordionContainer}>
        <ul className={styles.accordionList}>
          {courses.map((course) => (
            <li key={course.value} className={styles.accordionItem}>
              <button
                type="button"
                className={styles.accordionButton}
                onClick={() => handleAccordion(course.value as courseValue)}
              >
                <h3>{course.label}</h3>
                <span
                  className={`${styles.accordionIcon} ${
                    openTab === course.value ? styles.active : ""
                  }`}
                >
                  {openTab === course.value ? "-" : "+"}
                </span>
              </button>
              {openTab === course.value && (
                <div className={styles.accordionPanel}>
                  <CourseContent
                    category={course.label}
                    courseList={
                      courseListByCategory[course.value as courseValue]
                    }
                  />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
