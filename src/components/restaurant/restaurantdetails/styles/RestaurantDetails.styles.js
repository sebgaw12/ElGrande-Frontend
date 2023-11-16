import styled, {css} from "styled-components";

const white = `#FFFFFF`
const greyLight2 = `#afb6c9`
const greyDark = `#373949`

const innerShadow = `
    inset .2rem .2rem .5rem ${greyLight2}, 
    inset -.2rem -.2rem .5rem ${white}`

const shadow = `
    .3rem .3rem .6rem ${greyLight2}, 
    -.2rem -.2rem .5rem ${white}`

const button = css`
  width: 8em;
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
  margin-bottom: 10px;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 1rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  grid-column: span 2;
  margin: 0 0.5rem 0 0.5rem;
  padding: 0.5rem 0 0.5rem;
`;

export const StyleButton = styled.button`
  ${button}

  &:hover {
    background-color: #1da1f2;
    color: white;
  }

  &:active {
    box-shadow: ${innerShadow};
  }

  p {
    font-size: 1.6em;
  }
`;

export const HideBtn = styled.button`
  ${button}
  
  &:hover {
    background-color: #f21d1d;
    color: white;
  }

  &:active {
    box-shadow: ${innerShadow};
  }

  p {
    font-size: 1.6em;
  }
`;

export const DetailsElementsContainer = styled.div`
  display: flex;
`;

export const ImageContainer = styled.div`
  width: 50%;
  height: auto;
`;

export const ActiveElementContainer = styled.div`
  margin-left: 1rem;
  width: 50%;
  font-family: 'Kalam', cursive;
`;
