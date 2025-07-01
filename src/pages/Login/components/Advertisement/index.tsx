import advertisementImage1 from "../../../../assets/img/pexels-1072179.jpg";
import advertisementImage2 from "../../../../assets/img/pexels-1089455.jpg";
import advertisementImage3 from "../../../../assets/img/pexels-808510.jpg";
import { useCallback, useMemo, useState } from "react";
import { AdvertisementCard } from "./AdvertisementCard";
import { AnimatePresence } from "motion/react";
import { AdvertisementContainer } from "./styles";

export const Advertisement = () => {
  const [currentAdvertisement, setCurrentAdvertisement] = useState(0);
  const advertisementContent = useMemo(() => {
    return [
      {
        image: advertisementImage1,
        title: "AI-Powered Diagnostics Are Revolutionizing Early Detection",
        description:
          "Discover how advanced algorithms help detect diseases faster and more accurately than ever before.",
      },
      {
        image: advertisementImage2,
        title: "Personalized Healthcare Plans Tailored to You",
        description:
          "Our precision-based approach crafts treatment plans based on your genetics, lifestyle, and history for better outcomes.",
      },
      {
        image: advertisementImage3,
        title: "Telemedicine: Expert Care Without Leaving Home",
        description:
          "Connect with top medical professionals anytime, anywhere, through our secure digital health platform.",
      },
    ];
  }, []);

  const handleTimeCircleFinish = useCallback(() => {
    setCurrentAdvertisement((prev) => {
      if (prev === advertisementContent.length - 1) {
        return 0;
      }
      return prev + 1;
    });
  }, [advertisementContent.length]);

  return (
    <AnimatePresence mode="wait">
      <AdvertisementContainer>
        {advertisementContent.map((adv, index) => (
          <AdvertisementCard
            key={adv.title}
            advToDisplay={adv}
            handleTimeCircleFinish={handleTimeCircleFinish}
            isActive={index === currentAdvertisement}
          />
        ))}
      </AdvertisementContainer>
    </AnimatePresence>
  );
};
