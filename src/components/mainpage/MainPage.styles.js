import styled from "styled-components";

export const MainPageContainer = styled.div`
  display: grid;
  grid-template-rows: 0.15fr 1fr 0.07fr;
  height: 100vh;
`;

export const ContentContainer = styled.div`
  height: 85vh;
  display: flex;
  justify-content: space-around;
`;
export const NavbarStyle = styled.div`
  height: 100%;
`;

export const RestaurantListStyle = styled.div`
  height: 100%;
  width: 50%;
  align-self: center;
`;

export const MapComponentStyle = styled.div`
  height: 100%;
  width: 50%;
  align-self: center;
`;

export const FooterStyle = styled.div`
  height: 100%;
  
  @media (max-width: 768px) {
    background-color: #0e7537;
  }
`;
