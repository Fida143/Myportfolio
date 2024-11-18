import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import Main from "./components/Main";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <Routes>
        <Route path="/projects" element={<Projects />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
