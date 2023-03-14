import { useState } from "react";
import styled from "@emotion/styled";
import Header from "./components/AppBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
    </>
  );
}

export default App;
