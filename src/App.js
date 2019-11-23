import React from "react";
import "./App.css";
import NasaList from './components/NasaList';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <p>The Eagle has landed</p>
      <NasaList />
    </div>
  );
}

export default App;
