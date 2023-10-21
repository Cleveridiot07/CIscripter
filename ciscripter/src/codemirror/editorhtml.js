import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

export default function Editorhtml() {
  const onChange = React.useCallback((value, viewUpdate) => {
    console.log("value:", value);
  }, []);
  return (
    <div>
      <CodeMirror
        value="<!DOCTYPE html>
<html lang='en'>
<head>
  <meta charset='UTF-8'>
  <meta http-equiv='X-UA-Compatible' content='IE=edge'>
  <meta name='viewport' content='width=device-width, initial-scale=1.0'>
  <title>Document</title>
</head>
<body>
  
</body>
</html>"
        height="70vh"
        theme="dark"
        extensions={[javascript({ jsx: true })]}
        onChange={onChange}
      />
    </div>
  );
}
