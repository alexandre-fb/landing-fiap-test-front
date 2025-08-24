import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./CursosSection.module.scss";
import MarqueeText from "../../global/MarqueeText/MarqueeText";

import { courses, courseListByCategory, courseValue } from "../CoursesData";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import CourseContent from "../components/CourseContent/CourseContent";
gsap.registerPlugin(ScrollTrigger);

export default function CursosSection() {

  const [selectedTab, setSelectedTab] = useState<courseValue>(
    courses[0].value as courseValue
  );
  const selectedLabel =
    courses.find((tab) => tab.value === selectedTab)?.label || "";
  const selectedCourses = courseListByCategory[selectedTab];

  useEffect(() => {}, []);

  return (
    <div className={styles.cursosContainer}>
      
      {/* title */}
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Cursos</h2>
        <h4 className={styles.subtitle}>Cursos de Curta Duração</h4>
      </div>

      {/* tab navigation */}
      <div className={styles.tabNavigation}>
        <ul className={styles.tabList}>
          {courses.map((course) => (
            <li
              key={course.value}
              className={`${styles.tabItem} ${
                selectedTab === course.value ? styles.tabItem__active : ""
              }`}
              onClick={() => setSelectedTab(course.value as courseValue)}
              tabIndex={0}
              role="button"
              aria-pressed={selectedTab === course.value}
            >
              {course.label}
            </li>
          ))}
        </ul>
      </div>

      {/* course detail */}
      <div className={styles.courseDetail}>
        <CourseContent category={selectedLabel} courseList={selectedCourses} />
      </div>
    </div>
  );
}
