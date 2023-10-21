import React, { useState, useCallback } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { cpp } from "@codemirror/lang-cpp";

export default function CodemirrorC() {
  const onChange = useCallback((value, viewUpdate) => {
    console.log("value:", value);
  }, []);

  return (
    <div>
      <CodeMirror
        value="#include <stdio.h>
int main() {
    printf('Hello, World!');
    return 0;
}"
        height="200px"
        theme="dark"
        extensions={[cpp()]}
        onChange={onChange}
      />
    </div>
  );
}
