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

export const FormStyle = styled.div`
  position: absolute;
  top: 25%;
  left: 20%;
  margin: 0;
  padding: 0;
  min-height: 30%;
  width: 60%;
  box-sizing: border-box;
  justify-content: center;
  font-family: "Inter", sans-serif;
  background-color: #E4EBF5;
  box-shadow: ${innerShadow};
  
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  gap: 1em; 
  margin-top: 1rem;
  margin-bottom: 1rem;


`;

export const FormBtn = styled.button`
  width: 10em;
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

export const FormInput = styled.input`
  width: 90%;
  height: 4rem;
  border: none;
  border-radius: 1rem;
  font-size: 1.4rem;
  padding-left: 1.4rem;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 1.4rem;
  margin-top: 1.4rem;
  box-shadow: ${innerShadow};
  background: none;
  font-family: inherit;
  color: ${greyDark};

  &::placeholder {
    color: ${greyLight3};
  }

  &:focus {
    outline: none;
    box-shadow: ${shadow};
  }
`;

const TimeInput = styled.input`
  width: 7em;
  height: 2em;
  border-radius: 0.5em;
  justify-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: .3s ease;
  margin: 0.5rem;
`;

export const TimePicker = ({ id, label, defaultValue, onChange, index }) => (
    <div className="mb1">
        <label htmlFor={id}>{label}</label>
        <TimeInput
            type="time"
            data-index={index}
            id={id}
            name={id}
            defaultValue={defaultValue}
            onChange={onChange}
            required
        />
    </div>
);

const DayContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5em;
`;

const DayName = styled.span`
  font-weight: bold;
  width: 100px;
  display: inline-block;
  text-align: right;
  padding-right: 10px;
`;

export const DaySchedule = ({ dayOfWeek, index, updateDataList }) => (
    <DayContainer>
        <DayName>{dayOfWeek}</DayName>
        <TimePicker
            id={`day-${index}-open`}
            label="Open: "
            defaultValue="08:00"
            onChange={updateDataList}
            index={index}
        />
        <TimePicker
            id={`day-${index}-close`}
            label="Close: "
            defaultValue="16:00"
            onChange={updateDataList}
            index={index}
        />
    </DayContainer>
);