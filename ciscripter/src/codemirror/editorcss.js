import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { css } from "@codemirror/lang-css";

export default function EditorCSS() {
  const onChange = React.useCallback((value, viewUpdate) => {
    console.log("value:", value);
  }, []);
  return (
    <div>
      <CodeMirror
        value="console.log('hello world!');"
        height="70vh"
        theme="dark"
        extensions={[css()]}
        onChange={onChange}
      />
    </div>
  );
}
