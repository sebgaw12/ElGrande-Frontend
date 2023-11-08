import styled from "styled-components";

export const MainPageContainer = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  grid-template-columns: repeat(6, 0.75fr);
  grid-template-rows: 0.2fr 0.8fr 0.2fr;
  grid-template-areas: 
          "nav nav nav nav nav nav" 
          "left-panel left-panel left-panel right-panel right-panel right-panel" 
          "footer footer footer footer footer footer";
  //grid-gap: 0.2rem;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 12px;
  color: #004d40;
  text-align: center;

  @media (max-width: 850px) or (orientation: portrait) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.2fr 1fr 1fr 0.15fr;
    grid-template-areas: "nav" "left-panel" "right-panel" "footer";
  }
`;

export const Nav = styled.nav`
  background: #a7ffeb;
  grid-area: nav;
  border-radius: 5px;
  padding-top: 5px;
  position: relative;

  .nav-content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
  }
`;

export const LeftPanel = styled.div`
  background: #6fffd2;
  grid-area: left-panel;
  border-radius: 5px;
  padding-top: 5px;
`;

export const RightPanel = styled.div`
  background: #64ffda;
  grid-area: right-panel;
  border-radius: 5px;
  //padding-top: 5px;
`;

export const StyleFooter = styled.footer`
  background: #1de9b6;
  grid-area: footer;
  border-radius: 5px;
  padding-top: 5px;
`;

export const Link = styled.a`
  text-align: center;
  display: block;
  font-family: inherit;
  text-decoration: none;
  font-weight: bold;
  margin: 1rem;
`;
