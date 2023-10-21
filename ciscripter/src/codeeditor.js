import React, { useState, useRef, useEffect } from "react";
import Editorjs from "./codemirror/editorjavascript";
import EditorCpp from "./codemirror/editorcpp";
import Editorhtml from "./codemirror/editorhtml";
import EditorPython from "./codemirror/editorpython";
import Editorjava from "./codemirror/editorjava";
import EditorCSS from "./codemirror/editorcss";
import EditorC from "./codemirror/editorc";
import { Link, Routes, Route } from "react-router-dom";

const Codeeditor = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownButtonRef = useRef(null);
  const dropdownMenuRef = useRef(null);

  // Function to toggle the dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const lockcode = () => {
    console.log("code is locked");
  };
  // Close the dropdown when clicking outside of it
  const handleClickOutside = (event) => {
    if (
      dropdownButtonRef.current &&
      !dropdownButtonRef.current.contains(event.target) &&
      dropdownMenuRef.current &&
      !dropdownMenuRef.current.contains(event.target)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      window.addEventListener("click", handleClickOutside);
    } else {
      window.removeEventListener("click", handleClickOutside);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isDropdownOpen]);
  return (
    <div className="editor min-w-[100vw] min-h-[100vh]  bg-slate-200">
      <div className="max-w-6xl pt-2 mx-auto ">
        <form>
          <div className="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
            <div className="flex justify-between items-center py-2 px-3 border-b dark:border-gray-600">
              <div className="flex flex-wrap items-center  divide-gray-200 sm:divide-x dark:divide-gray-600">
                <div className="flex items-center space-x-1 sm:pr-4">
                  <button
                    onClick={lockcode}
                    type="button"
                    className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                      />
                    </svg>
                  </button>

                  {/* Add more buttons as needed */}
                </div>
                <div className="flex flex-wrap items-center space-x-1 sm:pl-4">
                  <div className="dropdowmed ">
                    <div className="bg-gray-800 rounded-md flex items-center justify-center">
                      <div className="relative inline-block  text-left">
                        <button
                          type="button"
                          ref={dropdownButtonRef}
                          className="inline-flex justify-center rounded-md w-full px-4 py-2 text-sm font-medium text-gray-200 bg-gray-600 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
                          onClick={toggleDropdown}
                        >
                          Language
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 ml-2 -mr-1"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </button>
                        <div
                          ref={dropdownMenuRef}
                          className={`origin-top-right absolute z-40 right-0 mt-2 w-48 rounded-md shadow-lg bg-gray-600 ring-1 ring-black ring-opacity-5 ${
                            isDropdownOpen ? "" : "hidden"
                          }`}
                        >
                          <div
                            className="py-2 p-2"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="dropdown-button"
                          >
                            <Link to="/">
                              <a
                                className="flex block rounded-md px-4 py-2 text-sm text-gray-200 hover:text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer"
                                role="menuitem"
                              >
                                C
                              </a>
                            </Link>

                            <Link to="/cpp">
                              <a
                                className="flex block rounded-md px-4 py-2 text-sm text-gray-200 hover:text-gray-700 hover:bg-gray-100 active.bg-blue-100 cursor-pointer"
                                role="menuitem"
                              >
                                C++
                              </a>
                            </Link>
                            <Link to="/java">
                              <a
                                className="flex block rounded-md px-4 py-2 text-sm text-gray-200 hover:text-gray-700 hover:bg-gray-100 active.bg-blue-100 cursor-pointer"
                                role="menuitem"
                              >
                                Java
                              </a>
                            </Link>
                            <Link to="/javascript">
                              <a
                                className="flex block rounded-md px-4 py-2 text-sm text-gray-200 hover:text-gray-700 hover:bg-gray-100 active.bg-blue-100 cursor-pointer"
                                role="menuitem"
                              >
                                JavaScript
                              </a>
                            </Link>
                            <Link to="/python">
                              <a
                                className="flex block rounded-md px-4 py-2 text-sm text-gray-200 hover:text-gray-700 hover:bg-gray-100 active.bg-blue-100 cursor-pointer"
                                role="menuitem"
                              >
                                Python
                              </a>
                            </Link>
                            <Link to="/html">
                              <a
                                className="flex block rounded-md px-4 py-2 text-sm text-gray-200 hover:text-gray-700 hover:bg-gray-100 active.bg-blue-100 cursor-pointer"
                                role="menuitem"
                              >
                                Html
                              </a>
                            </Link>
                            <Link to="/css">
                              <a
                                className="flex block rounded-md px-4 py-2 text-sm text-gray-200 hover:text-gray-700 hover:bg-gray-100 active.bg-blue-100 cursor-pointer"
                                role="menuitem"
                              >
                                CSS
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Add more buttons as needed */}
                </div>
              </div>
              <button
                type="button"
                data-tooltip-target="tooltip-fullscreen"
                className="p-2 text-gray-500 rounded cursor-pointer sm:ml-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <div
                id="tooltip-fullscreen"
                role="tooltip"
                className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
              >
                Show full screen
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
            </div>
            <div className="py-2 px-4 bg-white rounded-b-lg dark:bg-gray-800">
              <label for="editor" className="sr-only">
                Publish post
              </label>
              <Routes>
                <Route path="/" element={<EditorC />}></Route>
                <Route path="/cpp" element={<EditorCpp />}></Route>
                <Route path="/python" element={<EditorPython />}></Route>
                <Route path="/java" element={<Editorjava />}></Route>
                <Route path="/javascript" element={<Editorjs />}></Route>
                <Route path="/html" element={<Editorhtml />}></Route>
                <Route path="/css" element={<EditorCSS />}></Route>
              </Routes>
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
          >
            Save Code
          </button>
        </form>
      </div>
    </div>
  );
};

export default Codeeditor;
