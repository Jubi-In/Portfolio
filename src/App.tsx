import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import GlobalStyles from "./components/GlobalStyles";
import ProjectDetail from "./pages/ProjectDetail";
function App() {
  return (
    <div className="App">
      <>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/project" element={<ProjectDetail />} />
          </Routes>
        </Router>
        <GlobalStyles />
      </>
    </div>
  );
}

export default App;
