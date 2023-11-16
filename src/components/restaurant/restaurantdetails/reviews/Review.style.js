import styled, {css} from "styled-components";

const greyDark = `#373949`;
const white = `#FFFFFF`
const greyLight2 = `#afb6c9`
const shadowColor = `#718096`;

const shadow = `
    .3rem .3rem .6rem ${greyLight2}, 
    -.2rem -.2rem .5rem ${white}`;

const innerShadow = `
    inset .2rem .2rem .5rem ${greyLight2}, 
    inset -.2rem -.2rem .5rem ${white}`

const shadowOutside = `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 4px 10px ${shadowColor};`;

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

export const AddReviewStyleBtn = styled.button`
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

export const ReviewDetails = styled.div`
  padding: 0.5rem;
  box-shadow: ${shadowOutside};
  margin: 0.5rem;
  display: flex;
  flex-direction: column;

  > div {
    margin-bottom: 0.5rem;
    overflow-wrap: break-word;
  }

  > div:nth-child(3) {
    align-self: flex-end;
  }

  > div:last-child {
    align-self: flex-end;
  }
`;