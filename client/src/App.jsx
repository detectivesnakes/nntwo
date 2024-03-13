import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import './pages/RecipeSubmit.jsx'
import {useState, useEffect} from "react";

import { getTest } from './functions/test';

function App() {
  const [data, setData] = useState('Lorem Ipsum');
  useEffect(() => {
    getTest()
      .then((res) => {
        setData(res.message);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div>
      <h1>{data}</h1>
    </div>
  )
}

export default App
// with love from snakes
