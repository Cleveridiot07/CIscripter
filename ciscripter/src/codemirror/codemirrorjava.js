import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { java } from "@codemirror/lang-java"; // Import the Java language mode

export default function CodemirrorJava() {
  const onChange = React.useCallback((value, viewUpdate) => {
    console.log("value:", value);
  }, []);

  return (
    <div>
      <CodeMirror
        value="class HelloWorld {
    public static void main(String[] args) {
        System.out.println('Hello, World!');
    }
}"
        height="200px"
        theme="dark"
        language="java" // Set the language to "java"
        onChange={onChange}
        extensions={[java()]} // Use the Java language mode
      />
    </div>
  );
}
