import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from "./Components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Projects from "./pages/Projects";

function App() {
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vg;
  overflow: hidden;
`