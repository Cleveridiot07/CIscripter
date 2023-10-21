import "./App.css";
import Codemirrorjs from "./codemirror/codemirrorjavascript";
import CodemirrorCpp from "./codemirror/codemirrorcpp";
import Codemirrorhtml from "./codemirror/codemirrorhtml";
import CodemirrorPython from "./codemirror/codemirrorpython";
import Codemirrorjava from "./codemirror/codemirrorjava";
import CodemirrorCSS from "./codemirror/codemirrorcss";
import CodemirrorC from "./codemirror/codemirrorc";

function App() {
  return (
    <div className="App">
      {/* <Codemirrorjs />
      <CodemirrorCpp />
      <CodemirrorPython />
      <Codemirrorhtml /> */}
      {/* <Codemirrorjava /> */}
      {/* <CodemirrorCSS /> */}
      <CodemirrorC />
    </div>
  );
}

export default App;
