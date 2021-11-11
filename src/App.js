import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Home from "./Pages/Home";
import Movie from "./Pages/Movie";
import New from "./Pages/New";
import Edit from "./Pages/Edit";
import Error from "./Pages/Error";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/movies/:id" element={<Movie />} />
          <Route path="/New" element={<New />} />
          <Route path="/Edit" element={<Edit />} />
          <Route path="*" element={<Error />} />
          <Route component={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
