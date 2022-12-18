import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ThemeProvider from "./context/ThemeProvider";
import Header from "./components/Header/Header";
import { Home } from "./pages/Home/Home";
import { Page404 } from "./pages/Page404/Page404";
import './App.scss';

function App() {
  return (
    <ThemeProvider>
      <Header />
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;