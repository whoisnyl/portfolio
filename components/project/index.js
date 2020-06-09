import React, { useContext, useState, useEffect } from "react";

import { LayoutContext } from "../shared/context";

import ProjectList from "./list";

export default function Projects({ data }) {
  const { sidebarOpen } = useContext(LayoutContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    data &&
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
  }, []);

  return (
    <div
      className={`projects ${sidebarOpen ? "shrink" : ""} ${
        isLoading ? "loading" : ""
      }`}
    >
      {!isLoading && data ? (
        data.map((item) => (
          <div key={item.id} className="projects-container">
            {
              <ProjectList
                id={{
                  title: item.title,
                  description: item.description,
                  image: item.image,
                  href: item.href,
                }}
                title={item.title}
                description={item.description}
              />
            }
          </div>
        ))
      ) : (
        <h3 className="projects_headline">No project to display here.</h3>
      )}
    </div>
  );
}
