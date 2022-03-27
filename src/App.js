// import "./App.css";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyles";
import { LightTheme } from "./utils/Theme";
import { Route, Routes, useLocation } from "react-router-dom";
import Main from "./pages/Main";
import AboutPage from "./pages/AboutPage";
import WorkPage from "./pages/WorkPage";
import SkillsPage from "./pages/SkillsPage";
import { AnimatePresence, motion } from "framer-motion";
import MotionCompnent from "./components/MotionCompnent";
import ContactPage from "./pages/ContactPage";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <ThemeProvider theme={LightTheme}>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path="/" exact element={<Main />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/skills" element={<SkillsPage />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </div>
  );
}

export default App;
