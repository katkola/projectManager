import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from "../src/components/Main";
import Detail from '../src/components/Detail'
import Update from '../src/components/Update'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route element={<Main/>} path="/projects/" />
            <Route element={<Detail/>} path="/projects/:id" /> 
          <Route element={<Main />} path="/home" default />
          <Route elemen={<Update/>} path="/projects/edit/:id"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

