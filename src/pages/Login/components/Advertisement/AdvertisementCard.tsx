import { TimeCircle } from "./TimeCircle";
import { motion } from "motion/react";
import { memo } from "react";
import {
  AdvertisementCard as AdvertisementCardContainer,
  AdvertisementContainerText,
  AdvertisementContainerTextTitle,
  AdvertisementContainerTextDescription,
  AdvertisementContainerImage,
} from "./styles";

type AdvertisementCardProps = {
  advToDisplay: {
    image: string;
    title: string;
    description: string;
  };
  handleTimeCircleFinish: () => void;
  isActive: boolean;
};

export const AdvertisementCard_ = ({
  advToDisplay,
  handleTimeCircleFinish,
  isActive,
}: AdvertisementCardProps) => {
  return (
    <AdvertisementCardContainer active={isActive}>
      <AdvertisementContainerText>
        <div className="advertisement-container-progress">
          <TimeCircle onFinish={handleTimeCircleFinish} isActive={isActive} />
        </div>
        <AdvertisementContainerTextTitle>
          {advToDisplay.title}
        </AdvertisementContainerTextTitle>
        <AdvertisementContainerTextDescription>
          {advToDisplay.description}
        </AdvertisementContainerTextDescription>
      </AdvertisementContainerText>
      <AdvertisementContainerImage>
        <motion.img src={advToDisplay.image} alt={advToDisplay.title} />
      </AdvertisementContainerImage>
    </AdvertisementCardContainer>
  );
};

export const AdvertisementCard = memo(AdvertisementCard_);
