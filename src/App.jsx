import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ThemeProvider from "./context/ThemeProvider";
import LangProvider from "./context/LangProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home/Home";
import Page404 from "./pages/Page404/Page404";
import Projects from "./pages/Projects/Projects";
import "./App.scss";

function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        <main className="main">
          <BrowserRouter>
            <Header />
            <Routes>
              <Route index element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </main>
      </LangProvider>
    </ThemeProvider>
  );
}

export default App;
