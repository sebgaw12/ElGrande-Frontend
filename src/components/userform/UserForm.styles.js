import styled from "styled-components"

const white = `#FFFFFF`
const greyLight = `#E4EBF5`
const greyLight2 = `#c8d0e7`
const primary = `#6d5dfc`
const greyDark = `#9baacf`

const innerShadow = `
    inset .2rem .2rem .5rem ${greyLight2}, 
    inset -.2rem -.2rem .5rem ${white}`

const shadow =`
    .3rem .3rem .6rem ${greyLight2}, 
    -.2rem -.2rem .5rem ${white}`


export const GoogleButton = styled.button`
  width: 20.4rem;
  height: 4rem;
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
  
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=);
  background-color: ${greyLight};
  background-repeat: no-repeat;
  background-position: 1rem center;
`

export const SubmitFormButton = styled.button `
  width: 20.4rem;
  height: 2rem;
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

export const UserForm = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`

export const UserPage = styled.div `
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const RightSideOfColumnDiv = styled.div `
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const RedirectText = styled.p `
  &:hover {
    color: #6d5dfc;
  }
`
