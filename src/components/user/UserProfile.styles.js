import styled, {css} from "styled-components";

const white = `#FFFFFF`
const greyLight = `#E4EBF5`
const greyLight2 = `#c8d0e7`
const greyLight3 = `#bec8e4`
const primary = `#6d5dfc`
const greyDark = `#9baacf`

const innerShadow = `
    inset .2rem .2rem .5rem ${greyLight2}, 
    inset -.2rem -.2rem .5rem ${white}`

const shadow = `
    .3rem .3rem .6rem ${greyLight2}, 
    -.2rem -.2rem .5rem ${white}`

const baseButtonStyles = css`
  width: 20em;
  height: 2em;
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
  margin-bottom: 10px;

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

export const EditButton = styled.button`
  ${baseButtonStyles}
  &:hover {
    background-color: #1da1f2;
    color: white;
  }
`

export const DangerButton = styled.button`
  ${baseButtonStyles}
  &:hover {
    background-color: #ea2929;
    color: white;
  }
`

export const InfoButton = styled.button`
  ${baseButtonStyles}
  &:hover {
    background-color: #93ff1d;
    color: black;
  }
`

export const UserProfileGrid = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 0.5fr 1fr;
`

export const UserProfileDetails = styled.div`
  margin: 5vh 0 0 5vh;
  height: 90vh;
  width: 28vw;
  border-radius: 1em;
  box-shadow: ${shadow};
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const UserContributePanel = styled.div`
  display: grid;
  grid-template-rows: 0.1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 5vh 0 0 5vh;
  height: 90vh;
  width: 64vw;
  border-radius: 1em;
  box-shadow: ${shadow};
`

export const UserCredentialsPanel = styled.div`
  justify-content: flex-start;
  width: 20em;
  padding: 10px 0 10px 0;
`

export const UserImage = styled.img`
  padding: 10px;
`

export const ReviewGridPlace = styled.div `
  grid-column-start: 1;
  grid-row-start: 1;
  margin: auto;
`
export const RestaurantGridPlace = styled.div `
  grid-column-start: 2;
  grid-row-start: 1;
  margin: auto;
`
export const OwnedRestaurantGridPlace = styled.div `
  grid-column-start: 3;
  grid-row-start: 1;
  margin: auto;
`

export const ContributeContentList = styled.div `
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  margin: auto;
`
