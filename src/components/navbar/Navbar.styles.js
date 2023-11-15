import styled, {css, keyframes} from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  background-color: #61dafb;
  justify-content: left;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  height: 10vh;
`;

export const LeftPanel = styled.div`
  width: 50%;
  background: #eef1fc;
`;

export const RightPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 50%;
  box-sizing: border-box;
  background-color: #eef1fc;
`;

export const NavbarMenu = styled.div`
  margin-right: 2rem;
  position: relative;
  width: ${props => props.isMenuActive ? `50%` : `70px`};
  height: 70px;
  min-height: 70px;
  ${props => props.isMenuActive ? `min-width: 320px;` : ``}
  background: #f0f1f6;
  border-radius: 70px;
  box-shadow: -2px -2px 1px #ffffff, inset 2px 2px 1.5px #f0f0f0, 2px 2px 1px #d2d4df, 4px 4px 8px 4px #dadbe4;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-evenly;
  cursor: pointer;
  z-index: 999;
  transition: 0.5s ease-out;
  
`;

const navbarOverlayActive = css`
  animation: overlay 0.5s ease backwards 0.5s;
  user-select: none;
  padding-right: 50px;
`;

export const NavbarOverlay = styled.div`
  width: 98%;
  height: 80%;
  position: absolute;
  background: #edeef2;
  top: 50%;
  min-width: 250px;
  transform: translate(-50%, -50%);
  border-radius: 60px;
  box-shadow: inset 6px 6px 9px #d0d0da, inset -6px -6px 9px #ffffff, 1px 1px 4px #dbdde080;

  opacity: ${props => props.isMenuActive ? 1 : 0};
  left: ${props => props.isMenuActive ? `50%` : `-100%`};
  
  ${({isMenuActive}) => isMenuActive && navbarOverlayActive}
`;

const iKey = keyframes`
  0%
  {
    transform: translateY(200%);
  }
  100%
  {
    transform: translateY(0);
  }
`;

export const NavbarOverlaySpan = styled.span`
  &:nth-child(1) {
    animation: ${iKey} 0.5s ease backwards 0.6s;
  }
  &:nth-child(2) {
    animation: ${iKey} 0.5s ease backwards 0.8s;
  }
  &:nth-child(3) {
    animation: ${iKey} 0.5s ease backwards 1s;
  }
`;


export const OverlayItems = styled.div`
  color: #ff820e;
  margin-left: 30px;
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 10px;
  overflow: hidden;

  & svg{
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(0);
    
    &:hover {
      background: #edeef2;
      border-radius: 5px;
      box-shadow: -1px -1px 2px #ffffff, inset 3px 3px 4px #f7ff3f3, 3px 3px 4px #ddd2d4df, 2px 2px 4px #dadbe4;
    }
  }
`;

const xAnimation = css`
  & span:nth-child(1) {
    transform: rotateZ(45deg) translateY(10px) translateX(10px);
  }

  & span:nth-child(2) {
    opacity: 0;
  }

  & span:nth-child(3) {
    transform: rotateZ(-45deg) translateY(-10px) translateX(10px);
  }

`;

export const NavbarHamburger = styled.div`
  margin: 0 5px 0 0;
  width: 60px;
  height: 50px;
  min-height: 50px;
  min-width: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  z-index: 2;
  ${({isMenuActive}) => isMenuActive && xAnimation}
`;

export const NavbarHamburgerSpan= styled.span`
  width: 60%;
  height: 6px;
  background: #ff7b00;
  border-radius: 5px;
  box-shadow: -1px -1px 2px #ffffff, inset 1px 1px 3px #fffb0050, 2px 2px 3px #b8b6b0;
  transition: 0.3s ease;
`;

export const NavbarLogo = styled.img`
  display: flex;
  cursor: pointer;
  height: 100%;
  align-self: end;
  margin-left: 1rem;
  background: #ff7b00 no-repeat;
  background-size: cover;
  border-radius: 10%;
  box-shadow: -2px -2px 1px #ffffff, inset 2px 2px 1.5px #f0f0f0, 2px 2px 1px #d2d4df, 4px 4px 8px 4px #dadbe4;

  &:hover {
    box-shadow: inset -2px -2px 1px #ffffff, 2px 2px 1.5px #f0f0f0, 2px 2px 1px #d2d4df, 4px 4px 8px 4px #dadbe4;
  }
`;
