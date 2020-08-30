import React, { useState } from "react";
import { Provider } from "react-redux";

import { initializeStore } from "./store";

import "./App.css";

////Components////
import Navbar from "./components/Navbar";
import IndexPage from "./components/IndexPage";
import SongPage from "./components/SongPage";
import PlacePage from "./components/PlacePage";
import UpNextPage from "./components/UpNextPage";

function App() {
  const [activePage, setActivePage] = useState("index");

  const onSetActivePage = (page) => {
    setActivePage(page);
  };

  return (
    <Provider store={initializeStore()}>
      <div className='App'>
        <Navbar setActivePage={onSetActivePage} />
        {activePage == "index" && <IndexPage />}
        {activePage == "song" && <SongPage />}
        {activePage == "place" && <PlacePage />}
        {activePage == "upNext" && <UpNextPage />}
      </div>
    </Provider>
  );
}

export default App;
