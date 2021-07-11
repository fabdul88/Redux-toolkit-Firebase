import React from "react";
import "./App.css";
import styled from "styled-components";
import { Header } from "./components/Header";
import { Home } from "./components/Home";

function App() {
  return (
    <Container className="App">
      <Header />
      <Home />
    </Container>
  );
}

const Container = styled.div`
  color: white;
`;

export default App;
