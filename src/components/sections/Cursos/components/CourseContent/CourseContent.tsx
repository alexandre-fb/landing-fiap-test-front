// components/Marquee.tsx
import { useEffect, useRef } from "react";
import styles from "./CourseContent.module.scss";
import { gsap } from "gsap";

type CourseContentProps = {
  category: string;
  courseList: { title: string; modality: string }[];
};

export default function CourseContent({
  category,
  courseList,
}: CourseContentProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);

  // Fade in ao montar/trocar
  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }
    if (itemsRef.current.length) {
      gsap.fromTo(
        itemsRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.12,
          delay: 0.1,
        }
      );
    }
  }, [category, courseList]);

  return (
    <div className={styles.courseContainer}>
      <h3 ref={titleRef} className={styles.courseTitle}>
        {category}
      </h3>
      <ul className={styles.courseContent}>
        {courseList.map((course, index) => (
          <li
            ref={(el) => {
              itemsRef.current[index] = el;
            }}
            key={index}
            className={styles.courseContentItem}
          >
            <h5>{course.title}</h5>
            <span>{course.modality}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
