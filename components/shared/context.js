import { createContext } from "react";

export const LayoutContext = createContext({
  sidebarOpen: false,
  setSidebarOpen: () => {},
  sidebarContent: null,
  setSidebarContent: () => {},
  project: null,
  setProject: () => {},
});
