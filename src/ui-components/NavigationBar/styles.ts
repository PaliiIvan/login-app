import styled from "styled-components";
import { NavLink } from "react-router";

export const StyledNavigationBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--nav-bar-height);
  padding: 0 2rem;
  background-color: #fff;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6rem;
  height: 2rem;
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.link};

  &.active {
    color: #000;
    position: relative;
    &:after {
      position: absolute;
      content: "";
      display: block;
      width: 100%;
      height: 1.5px;
      background-color: #000;
    }
  }
`;
