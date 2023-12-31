import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { java } from "@codemirror/lang-java";
import Clipboard from "clipboard";

export default function EditorJava() {
  // State to store the code and whether it's locked or not
  const [code, setCode] = useState(`class HelloWorld {
    public static void main(String[] args) {
        System.out.println('Hello, World!');
    }
  `);
  const [isLocked, setIsLocked] = useState(true);

  // Function to handle code changes
  const onChange = React.useCallback((value, viewUpdate) => {
    console.log("value:", value);
    setCode(value);
  }, []);

  // Function to handle copying code to clipboard
  const handleCopyClick = () => {
    const clipboard = new Clipboard(".copy-button", {
      text: () => code,
    });

    clipboard.on("success", (e) => {
      console.log("Code copied to clipboard");
      clipboard.destroy();
    });

    clipboard.on("error", (e) => {
      console.error("Failed to copy code to clipboard");
      clipboard.destroy();
    });
  };

  // Function to toggle locking/unlocking the code
  const toggleLock = () => {
    setIsLocked(!isLocked);
  };

  return (
    <div>
      {/* Buttons for copying and locking code */}
      <div className="buttons w-full h-10 bg-gray-700 rounded-md justify-around items-center">
        {/* Button for copying code */}
        <button
          type="button"
          onClick={handleCopyClick}
          className="p-2 copy-button text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
            />
          </svg>
        </button>

        {/* Button for locking/unlocking code */}
        <button
          onClick={toggleLock}
          type="button"
          className={`p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 ${
            !isLocked
              ? "bg-red-500 text-white"
              : "hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
        </button>
      </div>

      {/* Code editor */}
      {isLocked ? (
        <CodeMirror
          value={code}
          height="70vh"
          theme="dark"
          language="java"
          onChange={!isLocked ? undefined : onChange}
          extensions={[java()]}
        />
      ) : (
        <CodeMirror
          value={code}
          height="70vh"
          theme="dark"
          language="java"
          readOnly
          extensions={[java()]}
        />
      )}
    </div>
  );
}
