import styled from "styled-components";

const mainRadius = "5px";
const mainPadding = "5px";

export const RootContainer = styled.div`
  font-family: "Inter", sans-serif;
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const Container = styled.div`
  display: grid;
  height: 100%;
  width: 100vw;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 0.2fr 2fr 0.15fr;
  grid-template-areas:
    "nav nav nav nav nav nav"
    "left-panel left-panel left-panel right-panel right-panel right-panel"
    "footer footer footer footer footer footer";
  grid-gap: 0.2rem;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 12px;
  color: #004d40;
  text-align: center;

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.2fr 1fr 1fr 0.15fr;
    grid-template-areas:
      "nav"
      "left-panel"
      "right-panel"
      "footer";
  }
`;

export const Nav = styled.nav`
  background: #a7ffeb;
  grid-area: nav;
  border-radius: ${mainRadius};
  padding-top: ${mainPadding};
  position: relative;
`;

export const LeftPanel = styled.div`
  background: #6fffd2;
  grid-area: left-panel;
  border-radius: ${mainRadius};
  padding-top: ${mainPadding};
`;

export const RightPanel = styled.div`
  background: #64ffda;
  grid-area: right-panel;
  border-radius: ${mainRadius};
  padding-top: ${mainPadding};
`;

export const Footer = styled.footer`
  background: #1de9b6;
  grid-area: footer;
  border-radius: ${mainRadius};
  padding-top: ${mainPadding};
`;

export const Link = styled.a`
  text-align: center;
  display: block;
  font-family: inherit;
  text-decoration: none;
  font-weight: bold;
  margin: 1rem;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;
