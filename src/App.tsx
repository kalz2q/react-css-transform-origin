import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    document.title = "react-css-transform-origin"
  })
  return (
    <div className="App">
      <div className="wrapper">
        <div className="sphere s1"></div>
        <div className="sphere s2"></div>
        <div className="sphere s3"></div>
        <div className="sphere s4"></div>
        <div className="sphere s5"></div>
      </div>
    </div>
  );
}

export default App;
