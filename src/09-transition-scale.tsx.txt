import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    document.title = "react-css-transform-origin"
  })
  return (
    <div className="App">
      <div className="box"></div>
    </div>
  );
}

export default App;
