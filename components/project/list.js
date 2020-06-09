import React, { useContext } from "react";
import LinesEllipsis from "react-lines-ellipsis";

import { LayoutContext } from "../shared/context";

import Button from "../utils/button";

export default function ProjectList({ id, title, description }) {
  const { setSidebarOpen, setSidebarContent, setProject } = useContext(
    LayoutContext
  );

  const openSidebar = (content, projectDetails) => {
    setSidebarOpen(true);
    setSidebarContent(content);
    setProject(projectDetails);
  };

  return (
    <div className="project-item">
      <div className="project-item_details">
        <h2 className="project-item_details__title">{title}</h2>
        <LinesEllipsis
          className="project-item_details__description"
          text={description}
          maxLine="2"
          ellipsis="..."
          trimRight
          basedOn="letters"
        />
      </div>
      <Button
        className="btn btn-primary"
        onClick={() => openSidebar("project", id)}
      >
        READ MORE
      </Button>
    </div>
  );
}
