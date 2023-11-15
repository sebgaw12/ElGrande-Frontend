import styled from "styled-components";

export const PointingLeftArrow = styled.button `
  cursor: pointer;
  margin-left: auto;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.25);
  }

  &:active {
    transform: scale(1);
  }
`