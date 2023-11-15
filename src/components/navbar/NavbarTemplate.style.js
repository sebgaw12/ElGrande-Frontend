import styled, {keyframes} from "styled-components";
import logo from "../../images/food-spot-circle-borderless.png";
import logo2 from "../../images/food-spot-transparent-with-name.png";

export const NavbarContainer = styled.div`
  display: flex;
  background-color: #61dafb;
  justify-content: left;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

export const LeftPanel = styled.div`
  width: 50%;
  background: #ffffff;
`;

export const RightPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 50%;
  box-sizing: border-box;
  background-color: #eef1fc;
`;

export const Menu = styled.div`
  margin-right: 2rem;
  position: relative;
  width: 70px;
  height: 70px;
  min-height: 70px;
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

  &.active {
    width: 50%;
    min-width: 320px;
  }
`;

const slideIn = keyframes`
  //0% {
  //  transform: translateY(200%);
  //}
  //100% {
  //  transform: translateY(0);
  //}
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

export const Overlay = styled.div`
  opacity: 0;
  width: 98%;
  height: 80%;
  position: absolute;
  background: #edeef2;
  top: 50%;
  right: 100%;
  min-width: 250px;
  transform: translate(-50%, -50%);
  border-radius: 60px;
  box-shadow: inset 6px 6px 9px #d0d0da, inset -6px -6px 9px #ffffff, 1px 1px 4px rgba(219, 221, 224, 0.5019607843);
 
   &.active {
     opacity: 50;
     transition: 5s;
     right: -50%;
     animation: ${slideIn} 1s ease;
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

  svg {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(0);

    &:hover {
      background: #edeef2;
      border-radius: 5px;
      box-shadow: -1px -1px 2px #ffffff,
      inset 3px 3px 4px #f7ff3f3,
      3px 3px 4px rgba(221, 210, 212, 0.8745098039),
      2px 2px 4px #dadbe4;
    }
  }
`;

export const Hamburger = styled.div`
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

  span {
    width: 60%;
    height: 6px;
    background: #ff7b00;
    border-radius: 5px;
    box-shadow: -1px -1px 2px #ffffff, inset 1px 1px 3px rgba(255, 251, 0, 0.3137254902), 2px 2px 3px #b8b6b0;
    transition: 0.3s ease;
  }

  &:hover {
    span {
      transform: translateX(5px);
    }
  }

  &.active {
    span:nth-child(1) {
      transform: rotateZ(45deg) translateY(10px) translateX(10px);
    }

    span:nth-child(2) {
      opacity: 0;
    }

    span:nth-child(3) {
      transform: rotateZ(-45deg) translateY(-10px) translateX(10px);
    }
  }
`;

export const NavbarLogo = styled.img`
  display: flex;
  align-self: end;
  //width: 5rem;
  //height: 5rem;
  margin-left: 1rem;
  background: #ff7b00 no-repeat;
  background-size: cover;
  border-radius: 10%;
  box-shadow: -2px -2px 1px #ffffff, inset 2px 2px 1.5px #f0f0f0, 2px 2px 1px #d2d4df, 4px 4px 8px 4px #dadbe4;

  &:hover {
    box-shadow: inset -2px -2px 1px #ffffff, 2px 2px 1.5px #f0f0f0, 2px 2px 1px #d2d4df, 4px 4px 8px 4px #dadbe4;
  }
`;
