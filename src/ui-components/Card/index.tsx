import { CardContainer } from "./styles";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};
export const Card = ({ children, className }: CardProps) => {
  return <CardContainer className={className}>{children}</CardContainer>;
};
