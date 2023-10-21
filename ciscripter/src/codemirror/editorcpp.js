import React, { useState, useCallback } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { cpp } from "@codemirror/lang-cpp";

export default function EditorCpp() {
  const onChange = useCallback((value, viewUpdate) => {
    console.log("value:", value);
  }, []);

  return (
    <div>
      <CodeMirror
        value="cout << 'hello world!' << endl;"
        height="70vh"
        theme="dark"
        extensions={[cpp()]}
        onChange={onChange}
      />
    </div>
  );
}
