// components/Marquee.tsx
import styles from "./MarqueeText.module.scss";

type MarqueeProps = {
  items: string[];
  duration?: number;
  direction?: "left" | "right";
  className?: string;
};

export default function Marquee({
  items,
  duration = 10,
  direction = "left",
  className = "",
}: MarqueeProps) {
  const animationName = direction === "left" ? styles.scrollLeft : styles.scrollRight;

  return (
    <div className={`${styles.marquee} ${className}`}>
      {[0, 1].map((dup) => (
        <ul
          key={dup}
          aria-hidden={dup === 1}
          className={`${styles.marqueeList} ${animationName}`}
          style={{ animationDuration: `${duration}s` }}
        >
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      ))}
    </div>
  );
}