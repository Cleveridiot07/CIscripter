import React, { useState, useRef, useEffect } from "react";
import Editorjs from "./codemirror/editorjavascript";
import EditorCpp from "./codemirror/editorcpp";
import Editorhtml from "./codemirror/editorhtml";
import EditorPython from "./codemirror/editorpython";
import Editorjava from "./codemirror/editorjava";
import EditorCSS from "./codemirror/editorcss";
import EditorC from "./codemirror/editorc";
import { Link, Routes, Route } from "react-router-dom";
import logo from "./background.jpg";

const Codeeditor = () => {
  const backgroundStyle = {
    backgroundImage: `url(${logo})`,
    backgroundSize: "cover", // You can customize these background properties
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  };

  const [selectedLanguage, setSelectedLanguage] = useState("Language");

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownButtonRef = useRef(null);
  const dropdownMenuRef = useRef(null);

  // Function to toggle the dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
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
    <div className="editor min-w-[100vw] min-h-[100vh]" style={backgroundStyle}>
      <div className="max-w-6xl pt-2 mx-auto ">
        <form>
          <div className="mb-4 w-full mt-10 shadow-md shadow-violet-200 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
            <div className="flex justify-between items-center py-2 px-3 border-b dark:border-gray-600">
              <div className="flex flex-wrap items-center  divide-gray-200 sm:divide-x dark:divide-gray-600">
                <div className="flex items-center space-x-1 sm:pr-4 text-slate-100 font-extrabold">
                  CIScripter
                </div>
                <div className="flex flex-wrap items-center space-x-1 sm:pl-4">
                  <div className="dropdowmed ">
                    <div className="bg-gray-800 rounded-md flex items-center justify-center">
                      <div className="relative inline-block  text-left">
                        <button
                          type="button"
                          ref={dropdownButtonRef}
                          className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-200 bg-gray-600 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
                          onClick={toggleDropdown}
                        >
                          {selectedLanguage}
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
                                className="flex  rounded-md px-4 py-2 text-sm text-gray-200 hover:text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer"
                                role="menuitem"
                                onClick={() => setSelectedLanguage("C")}
                              >
                                C
                              </a>
                            </Link>

                            <Link to="/cpp">
                              <a
                                className="flex  rounded-md px-4 py-2 text-sm text-gray-200 hover:text-gray-700 hover:bg-gray-100 active.bg-blue-100 cursor-pointer"
                                role="menuitem"
                                onClick={() => setSelectedLanguage("C++")}
                              >
                                C++
                              </a>
                            </Link>
                            <Link to="/java">
                              <a
                                className="flex  rounded-md px-4 py-2 text-sm text-gray-200 hover:text-gray-700 hover:bg-gray-100 active.bg-blue-100 cursor-pointer"
                                role="menuitem"
                                onClick={() => setSelectedLanguage("Java")}
                              >
                                Java
                              </a>
                            </Link>
                            <Link to="/javascript">
                              <a
                                className="flex  rounded-md px-4 py-2 text-sm text-gray-200 hover:text-gray-700 hover:bg-gray-100 active.bg-blue-100 cursor-pointer"
                                role="menuitem"
                                onClick={() =>
                                  setSelectedLanguage("JavaScript")
                                }
                              >
                                JavaScript
                              </a>
                            </Link>
                            <Link to="/python">
                              <a
                                className="flex  rounded-md px-4 py-2 text-sm text-gray-200 hover:text-gray-700 hover:bg-gray-100 active.bg-blue-100 cursor-pointer"
                                role="menuitem"
                                onClick={() => setSelectedLanguage("Python")}
                              >
                                Python
                              </a>
                            </Link>
                            <Link to="/html">
                              <a
                                className="flex  rounded-md px-4 py-2 text-sm text-gray-200 hover:text-gray-700 hover:bg-gray-100 active.bg-blue-100 cursor-pointer"
                                role="menuitem"
                                onClick={() => setSelectedLanguage("Html")}
                              >
                                Html
                              </a>
                            </Link>
                            <Link to="/css">
                              <a
                                className="flex rounded-md px-4 py-2 text-sm text-gray-200 hover:text-gray-700 hover:bg-gray-100 active.bg-blue-100 cursor-pointer"
                                role="menuitem"
                                onClick={() => setSelectedLanguage("CSS")}
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
        </form>
      </div>
    </div>
  );
};

export default Codeeditor;
