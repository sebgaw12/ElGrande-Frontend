import styled from "styled-components";

const shadowColor = `#718096`;
const shadowOutside = `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 4px 10px ${shadowColor};`;

const shadowInside = `inset 0 2px 4px 0 rgba(0, 0, 0, 0.06), 0 0 10px ${shadowColor};`;

export const RestaurantContainer = styled.div`
  padding: 0.5rem;
  border-radius: 0.75rem;
  margin: 1rem;
  background-color: rgb(209 213 219);
  box-shadow: ${(props) => props.isOpen ? shadowInside: shadowOutside};
  min-height: 6vh;
`;

export const RestaurantDetailsContainer = styled.div`
  display: grid;
  margin-left: 3%;
  margin-top: 1%;
  grid-template-columns: 1fr 1fr 1fr 0.1fr;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const MainPageRestaurantListContainer = styled.div `
`