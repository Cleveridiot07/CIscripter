import React, { useState, useCallback } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { cpp } from "@codemirror/lang-cpp";

export default function CodemirrorCpp() {
  const onChange = useCallback((value, viewUpdate) => {
    console.log("value:", value);
  }, []);

  return (
    <div>
      <CodeMirror
        value="cout << 'hello world!' << endl;"
        height="200px"
        theme="dark"
        extensions={[cpp()]}
        onChange={onChange}
      />
    </div>
  );
}
