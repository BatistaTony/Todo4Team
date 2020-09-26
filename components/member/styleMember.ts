import styled from "styled-components";
import { InputStyle } from "./../input/inputStyle";

export const FormSTyle = styled(InputStyle)`
  width: 100%;
  height: 200px;
  grid-template-columns: 90%;
  grid-template-rows: 35px 35px;

  input,
  button {
    width: 100%;
  }

  button {
    grid-row: 2;
  }
`;
