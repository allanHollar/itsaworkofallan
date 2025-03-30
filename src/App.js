import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import AppHeader from "./components/shared/AppHeader";
import "./css/App.css";
import "./css/main.css";
import UseScrollToTop from "./hooks/useScrollToTop";

const Home = lazy(() => import("./pages/Home"));
const ProjectSingle = lazy(() => import("./pages/ProjectSingle.jsx"));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppHeader />
      <AnimatePresence mode="wait">
        <Suspense>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:projectId" element={<ProjectSingle />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
      <UseScrollToTop />
    </Router>
  );
}

export default App;
