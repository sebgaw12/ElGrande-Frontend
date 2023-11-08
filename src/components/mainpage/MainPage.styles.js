import styled from "styled-components";

export const MainPageContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
`;

export const ContentContainer = styled.div`
  //width: 100vw;
  height: 100%;
  display: flex;
  justify-content: space-around;
  border: black dashed 1px;
  background-color: red;
`;
export const NavbarStyle = styled.div`
  height: 100%;
  border: black solid 1px;
`;

export const RestaurantListStyle = styled.div`
  height: 100%;
  width: 50%;
  align-self: center;
  border: black dotted 1px;
  background-color: yellow;
`;

export const MapComponentStyle = styled.div`
  height: 100%;
  align-self: center;
  border: black solid 1px;
  background-color: blue;
`;

export const FooterStyle = styled.div`
  height: 100%;
  border: black double 1px;
  background-color: hotpink;
`;
