import React, { useState, useCallback } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";

export default function CodemirrorPython() {
  const onChange = useCallback((value, viewUpdate) => {
    console.log("value:", value);
  }, []);

  return (
    <div>
      <CodeMirror
        value="print('hello world!')"
        height="200px"
        theme="dark"
        extensions={[python()]}
        onChange={onChange}
      />
    </div>
  );
}
