"use client";

import { useEffect, useState, type ComponentProps } from "react";
import DigitalRain from "./ascii-rain";

type AsciiRainProps = ComponentProps<typeof DigitalRain>;

export default function AsciiRainMotionSafe(props: AsciiRainProps) {
  const [motionOk, setMotionOk] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setMotionOk(!mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return motionOk ? <DigitalRain {...props} /> : null;
}
