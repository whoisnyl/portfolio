import React, { useContext } from "react";
import { IoIosClose } from "react-icons/io";
import { FiChevronLeft } from "react-icons/fi";

import { LayoutContext } from "../shared/context";

export default function Sidebar({ children }) {
  const {
    sidebarOpen,
    sidebarContent,
    setSidebarOpen,
    setSidebarContent,
  } = useContext(LayoutContext);

  const closeSidedbar = () => {
    setSidebarOpen(false);
    setSidebarContent(null);
  };

  return (
    <div className={`sidebar ${sidebarOpen ? "show" : ""}`}>
      <div className="sidebar-header">
        {sidebarContent != "menu" && sidebarContent != null ? (
          <span
            className="sidebar-header_back"
            onClick={() => setSidebarContent("menu")}
          >
            <FiChevronLeft />
          </span>
        ) : (
          ""
        )}
        <h2
          className={`sidebar-header_title ${
            sidebarContent != "menu" ? "show" : ""
          }`}
        >
          {
            {
              about: "ABOUT ME",
              project: "PROJECT",
              contact: "LET'S TALK",
              default: "",
            }[sidebarContent]
          }
        </h2>
        <span
          className={`sidebar-header_close ${
            sidebarContent == "menu"
              ? "sidebar-header_close--hidden"
              : "sidebar-header_close--out"
          }`}
          onClick={closeSidedbar}
        >
          <IoIosClose />
        </span>
      </div>
      {children}
    </div>
  );
}
