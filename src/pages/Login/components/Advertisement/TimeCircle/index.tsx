import { useEffect, useState } from "react";
import { TimeCircleContainer } from "./styles";

type TimeCircleProps = {
  duration?: number;
  onFinish?: () => void;
  isActive: boolean;
};

export const TimeCircle = ({
  duration = 10,
  onFinish,
  isActive,
}: TimeCircleProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isActive) {
      setProgress(0);
    }
  }, [isActive]);

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 100 / (duration * 100);
        if (newProgress >= 100) {
          onFinish?.();
          clearInterval(interval);
          return 100;
        }
        return newProgress;
      });
    }, 10);

    return () => clearInterval(interval);
  }, [duration, onFinish, isActive]);

  return <TimeCircleContainer progress={progress} />;
};
