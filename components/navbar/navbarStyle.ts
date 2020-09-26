import styled from "styled-components";

export const StyledNavbar = styled.div`
  width: 100%;
  height: 100px;
  background: violet;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding-left: 30px;
  padding-right: 30px;
`;

export const Title = styled.h1`
  font-size: 16pt;
  color: black;
`;

export const NumbTaskStyle = styled(Title)`
  font-size: 12pt;
  color: green;

  span {
    color: white;
  }
`;
