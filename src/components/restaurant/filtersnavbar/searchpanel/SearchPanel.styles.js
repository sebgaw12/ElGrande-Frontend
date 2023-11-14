import styled from "styled-components";

const white = `#FFFFFF`
const greyLight = `#E4EBF5`
const greyLight2 = `#c8d0e7`
const greyLight3 = `#bec8e4`
const primary = `#6d5dfc`
const greyDark = `#9baacf`
const lightRed = `#fd4848`

const innerShadow = `
    inset .2rem .2rem .5rem ${greyLight2}, 
    inset -.2rem -.2rem .5rem ${white}`

const shadow =`
    .3rem .3rem .6rem ${greyLight2}, 
    -.2rem -.2rem .5rem ${white}`

export const SearchPanelContainer = styled.div`
  display: flex;
  width: 50vw;
  padding: 0.5rem;
  margin: 0.5rem 0 0 0.5rem;
`;
export const SearchPanelInput = styled.input`
  grid-column: 3 / 4;
  grid-row: 3 / 4;
  width: 20.4rem;
  height: 3rem;
  border: none;
  border-radius: 1rem;
  font-size: 1.4rem;
  padding-left: 1.4rem;
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

export const SearchPanelButton = styled.button `
  width: 5em;
  height: 3rem;
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
  margin-left: 10px ;

  &:hover {
    color: ${primary}
  }

  &:active {
    box-shadow: ${innerShadow};
    background-color: #1da1f2;
  }

  p {
    font-size: 1.6em;
  }
`

export const ClearFilterButton = styled.button `
  width: 5em;
  height: 3rem;
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
  margin-left: 10px ;

  &:hover {
    color: ${lightRed}
  }

  &:active {
    box-shadow: ${innerShadow};
    background-color: red;
  }

  p {
    font-size: 1.6em;
  }
`

export const FilterTag = styled.div `
  height: 3em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 1em;
  padding-left: 10px;
  box-shadow: ${shadow};
  color: ${greyDark};

  p {
    font-size: 1.6em;
  }
`

export const TagsContainer = styled.div `
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 10px;
`


export const filterLogo = "M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 " +
    "01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 " +
    "2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z";

