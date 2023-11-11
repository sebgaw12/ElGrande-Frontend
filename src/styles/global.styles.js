import styled from "styled-components";

const white = `#FFFFFF`
const greyLight = `#E4EBF5`
const greyLight2 = `#c8d0e7`
const primary = `#6d5dfc`
const greyDark = `#9baacf`

const innerShadow = `
    inset .2rem .2rem .5rem ${greyLight}, 
    inset -.2rem -.2rem .5rem ${white}`

const shadow =`
    .3rem .3rem .6rem ${greyLight2}, 
    -.2rem -.2rem .5rem ${white}`

export const GlobalStyle = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  justify-content: center;
  font-family: "Inter", sans-serif;
  background-color: #E4EBF5;
`;

export const PrimaryBtn = styled.button`
  width: 5em;
  height: 3em;
  border-radius: 1em;
  box-shadow: ${shadow};
  justify-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: .3s ease;
  grid-column: 1 / 2;
  grid-row: 5 / 6;
  color: ${greyDark};

  &:hover {
    color: ${primary}
  }

  &:active {
    box-shadow: ${innerShadow};
  }

  p {
    font-size: 1.6em;
  }
`;
