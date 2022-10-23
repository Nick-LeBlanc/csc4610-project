import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Stages from "./Pages/Stages";
import Characters from "./Pages/Characters";
import Players from "./Pages/Players"
import SpecChar from './Pages/specChar';
import SpecStage from './Pages/specStage';
import SpecPlayer from './Pages/specPlayer';
import NavBar from './Component/NavBar';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="Characters" element={<Characters />} />  
        <Route path="Characters/:name" element={<SpecChar />} />
      <Route path="Stages" element={<Stages />} />
        <Route path="Stages/:name" element={<SpecStage />} /> 
      <Route path="Players" element={<Players />} />
        <Route path="Players/:name" element={<SpecPlayer />} />
      <Route path="*" element={<main style={{ padding: "1rem" }}><p>There's nothing here!</p></main>}/>

    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
