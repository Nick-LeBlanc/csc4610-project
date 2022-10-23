import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Login';
import MoviePage from './Pages/MoviePage'
import NavBar from './Component/NavBar';

//https://colorhunt.co/palette/b3ffaef8ffdbff6464ff7d7d 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="Login" element={<Login />} />
      <Route path="MoviePage" element={<MoviePage />} />
      <Route path="*" element={<main style={{ padding: "1rem" }}><p>There's nothing here!</p></main>}/>

    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
