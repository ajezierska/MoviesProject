import "./App.css";
import React from "react";
import { MoviesListing } from "./containers/MoviesListing";

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={<div>loading data...</div>}>
        <MoviesListing />
      </React.Suspense>
    </div>
  );
}

export default App;
