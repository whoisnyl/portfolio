import React, { useContext } from "react";

import { LayoutContext } from "../shared/context";

export default function Menu() {
  const { setSidebarOpen, setSidebarContent } = useContext(LayoutContext);

  const loadSidebar = (content) => {
    setSidebarOpen(true);
    setSidebarContent(content);
  };

  return (
    <nav className="nav">
      <ul>
        <li onClick={() => loadSidebar("about")}>About</li>
        <li onClick={() => loadSidebar("contact")}>Contact</li>
      </ul>
    </nav>
  );
}
