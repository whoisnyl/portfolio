import { useContext } from "react";

import { LayoutContext } from "../shared/context";

export default function Burger() {
  const { sidebarOpen, setSidebarOpen, setSidebarContent } = useContext(
    LayoutContext
  );

  const toggleSidebar = (content) => {
    setSidebarOpen(!sidebarOpen);
    setSidebarContent(content);
  };

  return (
    <div
      className={`burger ${sidebarOpen ? "open" : "close"}`}
      onClick={() => toggleSidebar(sidebarOpen ? null : "menu")}
    >
      <span />
      <span />
      <span />
    </div>
  );
}
