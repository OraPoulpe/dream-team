import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ThemeProvider from "./context/ThemeProvider";
import LangProvider from "./context/LangProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Home } from "./pages/Home/Home";
import { Page404 } from "./pages/Page404/Page404";

import './App.scss'

function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        <Header />
        <main className="container">
          <BrowserRouter>
            <Routes>
              <Route index element={<Home />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </BrowserRouter>
        </main>
        <Footer />
      </LangProvider>
    </ThemeProvider>
  );
}

export default App;