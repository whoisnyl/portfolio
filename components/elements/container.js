import React, { useContext } from "react";

import { LayoutContext } from "../shared/context";

export default function Container({ children }) {
  const { sidebarOpen } = useContext(LayoutContext);

  return (
    <main className={`${sidebarOpen ? "shrink" : ""}`}>
      <div className="container">{children}</div>
    </main>
  );
}
