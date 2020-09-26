import Navbar from "./../components/navbar/navbar";
import ListTask from "./../components/ListTask/listTask";
import styled from "styled-components";
import FormTask from "../components/input/FormTask";
import { ContextProvider } from "../components/todoContext";
import Member from "../components/member/member";

const InSTyle = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Content = styled.div`
  width: 95%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-tems: flex-start;
  margin-top: 20px;
`;

export default function Index() {
  return (
    <InSTyle>
      <ContextProvider>
        <Navbar />
        <Content>
          <Member />
          <FormTask />
          <ListTask />
        </Content>
      </ContextProvider>
    </InSTyle>
  );
}
