import { Link as RouterLink } from "react-router";
import { StyledLink } from "./styles";

type LinkProps = {
  children: string;
  href: string;
  global?: boolean;
};

export const Link = ({ children, href, global = false }: LinkProps) => {
  return global ? (
    <StyledLink as="a" href={href}>
      {children}{" "}
    </StyledLink>
  ) : (
    <StyledLink as={RouterLink} to={href}>
      {children}
    </StyledLink>
  );
};
