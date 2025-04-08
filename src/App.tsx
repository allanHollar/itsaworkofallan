import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ScrollToTop from "./utilities/ScrollToTop";

import AppHeader from "./components/shared/AppHeader";
import "./css/App.css";
import "./css/main.css";

const Home = lazy(() => import("./pages/Home"));
const ProjectSingle = lazy(() => import("./pages/ProjectSingle"));

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
    </Router>
  );
}

export default App;
