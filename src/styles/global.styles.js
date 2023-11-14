import styled from "styled-components";

const white = `#FFFFFF`
const greyLight = `#E4EBF5`
const greyLight2 = `#c8d0e7`
const greyLight3 = `#bec8e4`
const primary = `#6d5dfc`
const greyDark = `#9baacf`

const innerShadow = `
    inset .2rem .2rem .5rem ${greyLight2}, 
    inset -.2rem -.2rem .5rem ${white}`

const shadow =`
    .3rem .3rem .6rem ${greyLight2}, 
    -.2rem -.2rem .5rem ${white}`

export const GlobalStyle = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  justify-content: center;
  !important font-family: "Inter", sans-serif;
  background-color: ${greyLight};
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

export const PrimaryInput = styled.input`
  grid-column: 3 / 4;
  grid-row: 3 / 4;
  width: 20.4rem;
  height: 4rem;
  border: none;
  border-radius: 1rem;
  font-size: 1.4rem;
  padding-left: 1.4rem;
  margin-bottom: 1rem;
  box-shadow: ${innerShadow};
  background: none;
  font-family: inherit;
  color: ${greyDark};

  &::placeholder {
    color: ${greyDark};
  }
  
  &:-webkit-autofill {
    -webkit-text-fill-color: ${greyDark}
  }

  &:focus {
    outline: none;
    box-shadow: ${shadow};
  }
`;

export const CrossButtonImage = styled.button `
  padding-right: 20px;
  padding-bottom: 6px;
  font-size: 26px;
  color: #f31818;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.25);
  }

  &:active {
    transform: scale(1);
  }
`