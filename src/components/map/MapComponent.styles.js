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

export const PopUpContainer = styled.div `
  font-size: 16px;
  text-align: center;
`

export const PopUpButton = styled.button `
  height: 3em;
  width: 10em;
  margin: 5px;
  border-radius: 1em;
  box-shadow: ${shadow};
  cursor: pointer;
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
`