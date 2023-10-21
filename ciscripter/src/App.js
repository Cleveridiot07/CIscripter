import "./App.css";
import Codemirrorjs from "./codemirror/editorjavascript";
import CodemirrorCpp from "./codemirror/editorcpp";
import Codemirrorhtml from "./codemirror/editorhtml";
import CodemirrorPython from "./codemirror/editorpython";
import Codemirrorjava from "./codemirror/editorjava";
import CodemirrorCSS from "./codemirror/editorcss";
import CodemirrorC from "./codemirror/editorc";
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
