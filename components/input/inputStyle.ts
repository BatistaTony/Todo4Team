import styled from "styled-components";

export const InputStyle = styled.div`
  width: 500px;
  height: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 35px 35px 35px;

  input,
  select {
    width: 90%;
    height: 35px;
    border-radius: 5px;
    border: none;
    font-size: 13pt;
    border: 1px solid gray;
    box-sizing: border-box;
    padding-left: 10px;
  }

  input[name="task"] {
    grid-column: 1/3;
    width: 95%;
    margin-top: 20px;
  }

  button {
    grid-row: 4/4;
    font-size: 13pt;
    height: 35px;
    margin-top: 10px;
    width: 100%;
    background: violet;
    border: none;
    color: white;
    border-radius: 5px;
  }
`;
