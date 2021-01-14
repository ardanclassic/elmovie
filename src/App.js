import React from 'react';
import './App.css';
import Hero from './components/hero/hero'
import { MovieState } from './context/MovieContext'
// import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <MovieState>
      <Hero />
    </MovieState>
  );
}

export default App;
