import React from 'react';

import './App.css';

////Components////
import IndexPage from './components/IndexPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <IndexPage />
      
    </div>
  );
}

export default App;
