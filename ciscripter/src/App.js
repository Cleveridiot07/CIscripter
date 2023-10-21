import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Codeeditor from "./codeeditor";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Codeeditor />
      </div>
    </BrowserRouter>
  );
}

export default App;
