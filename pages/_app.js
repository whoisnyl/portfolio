import React, { useState } from "react";
import { LayoutContext } from "../components/shared/context";

import "../sass/styles.scss";

function MyApp({ Component, pageProps }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarContent, setSidebarContent] = useState(null);
  const [project, setProject] = useState(null);

  const value = {
    sidebarOpen,
    setSidebarOpen,
    sidebarContent,
    setSidebarContent,
    project,
    setProject,
  };

  return (
    <LayoutContext.Provider value={value}>
      <Component {...pageProps} />
    </LayoutContext.Provider>
  );
}

export default MyApp;
