import React, {useState} from 'react';

import './App.css';

////Components////
import IndexPage from './components/IndexPage';
import SongPage from './components/SongPage';
import Navbar from './components/Navbar';
import PlacePage from './components/PlacePage';
import UpNextPage from './components/UpNextPage';

function App() {
  const [activePage, setActivePage] = useState('index');

  const onSetActivePage = (page) => {
    setActivePage(page)
  }

  return (
    <div className="App">
      <Navbar setActivePage={onSetActivePage}/>
      {activePage == 'index' && <IndexPage />}
      {activePage == 'song' && <SongPage />}
      {activePage == 'place' && <PlacePage />}
      {activePage == 'upNext' && <UpNextPage />}
      
    </div>
  );
}

export default App;
