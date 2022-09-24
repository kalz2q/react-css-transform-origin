import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    document.title = "react-css-transform-origin"
  })
  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <div className="box box1">500ms</div>
        </div>
        <div className="container">
          <div className="box box2">1s</div>
        </div>
        <div className="container">
          <div className="box box3">4s</div>
        </div>


      </div>
    </div>
  );
}

export default App;
