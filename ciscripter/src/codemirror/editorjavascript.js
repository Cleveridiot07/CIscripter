import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import Clipboard from "clipboard";

export default function Editorjava() {
  // State to store the code and whether it's locked or not
  const [code, setCode] = useState(`console.log('hello world!');
`);
  const [isLocked, setIsLocked] = useState(true);

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

  const toggleLock = () => {
    setIsLocked(!isLocked);
  };

  const onChange = React.useCallback((value, viewUpdate) => {
    console.log("value:", value);
    setCode(value);
  }, []);
  return (
    <div>
      <div className="buttons w-full h-10 bg-gray-700 rounded-md justify-around items-center">
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

      {isLocked ? (
        <CodeMirror
          value={code}
          height="70vh"
          theme="dark"
          onChange={!isLocked ? undefined : onChange}
          extensions={[javascript({ jsx: true })]}
        />
      ) : (
        <CodeMirror
          value={code}
          height="70vh"
          theme="dark"
          onChange={!isLocked ? undefined : onChange}
          readOnly
          extensions={[javascript({ jsx: true })]}
        />
      )}
    </div>
  );
}
