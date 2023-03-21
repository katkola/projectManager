import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from "../src/components/Main";
import Detail from '../src/components/Detail'
import Update from '../src/components/Update'
import ProjectForm from './components/ProjectForm';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route element={<Main/>} path="/projects/" />
            <Route element={<Detail/>} path="/projects/:id" />
            <Route element={<ProjectForm/>} path="/projects/new"/>
          <Route element={<Main />} path="/home" default />
          <Route element={<Update/>} path="/projects/edit/:id"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

