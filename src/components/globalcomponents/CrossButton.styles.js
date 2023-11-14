import styled from "styled-components";

export const CrossButtonImage = styled.button `
  overflow: hidden;
  position: relative;
  padding: 0;
  width: 2em;
  height: 2em;
  background: transparent;
  color: #f31818;
  text-indent: 100%;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.25);
  }

  &:active {
    transform: scale(1);
  }
`