import styled from "styled-components";
import logoImg from "../../images/food-spot-transparent.png";

export const LandingPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(to right top, #ff820e, #fc861a, #fa8923, #f78d2b, #f59033, #f3973c, #f29d45, #f0a34e, #efad5c, #edb76b, #ecc17b, #ecca8b);
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  width: 320px;
  height: 320px;
  background-image: url(${logoImg});
  background-repeat: no-repeat;
  justify-content: center;
`;
