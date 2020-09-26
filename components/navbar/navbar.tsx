import { StyledNavbar, Title, NumbTaskStyle } from "./navbarStyle";
import { todoContext } from "./../todoContext";
import { useContext } from "react";

export default function Navbar() {
  const [todos] = useContext(todoContext);

  return (
    <StyledNavbar>
      <Title>TodoJustWithHook and Styled-Component</Title>
      <NumbTaskStyle>
        <span>Tasks:</span> {todos.length}
      </NumbTaskStyle>
    </StyledNavbar>
  );
}
