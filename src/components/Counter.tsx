import { useEffect, useRef, useState } from "react";

type CounterProps = { target: number; suffix?: string };

export default function Counter({ target, suffix = "" }: CounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let cur = 0;
            const step = Math.max(1, Math.round(target / 40));
            const timer = setInterval(() => {
              cur += step;
              if (cur >= target) {
                cur = target;
                clearInterval(timer);
              }
              setValue(cur);
            }, 30);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  return (
    <span ref={ref} data-count={target}>
      {value}
      {suffix}
    </span>
  );
}
