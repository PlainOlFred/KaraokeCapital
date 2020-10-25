import React, { useState } from "react";
import { Provider } from "react-redux";

import { initializeStore } from "./store";

import "./App.css";

////Components and Containers////
import IndexPage from "./containers/IndexPage";
import Navbar from "./components/Navbar";


function App() {
  const [activePage, setActivePage] = useState("index");

  const onSetActivePage = (page) => {
    setActivePage(page);
  };

  return (
    <Provider store={initializeStore()}>
      <div className='App'>
        <Navbar setActivePage={onSetActivePage} />
        {activePage === "index" && <IndexPage />}
      </div>
    </Provider>
  );
}

export default App;
