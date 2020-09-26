import styled from "styled-components";

export const ListStyle = styled.ul`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  list-style: none;
  box-sizing: border-box;
  margin-top: 0;
  padding-left: 0;
`;

export const Task = styled.li`
  width: 100% !important;
  height: auto;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 5px;
  align-text: center;
  font-size: 13pt;
  background: violet;
  box-sizing: border-box;
  padding-left: 10px;
  margin-left: 0;
  margin-bottom: 10px;
  position: relative;
  text-decoration: ${({ isDone }) => (isDone ? "line-through" : "normal")};

  span {
    background: green;
    position: absolute;
    right: 5px;
    font-size: 11pt;
    padding: 5px;
    cursor: default;
    border-radius: 5px;
    color: white;
    margin-left: 20px;
  }

  button {
    padding: 5px;
    border: none;
    background: gray;
    border-radius: 5px;
    color: white;
    margin-right: 20px;
  }
`;
