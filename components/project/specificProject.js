import React, { useState, useEffect, useContext } from "react";
import { Scrollbars } from "react-custom-scrollbars";

import { LayoutContext } from "../shared/context";

import Button from "../utils/button";

export default function SpecificProject({ pid }) {
  const { project } = useContext(LayoutContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    project &&
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
  }, []);

  return (
    <Scrollbars style={{ height: "100vh", width: "100%" }}>
      <div className={`inner ${isLoading ? "loading" : ""}`}>
        {project && (
          <section className="project">
            <div className="project_image">
              <canvas
                style={{ backgroundImage: `url('${project.image.url}')` }}
              ></canvas>
            </div>
            <h2 className="project_title">{project.title}</h2>
            <div className="project_description">
              {project.description.split("\n").map((text, key) => (
                <p key={key}>
                  {text}
                  <br />
                </p>
              ))}
            </div>
            <div className="project_action">
              <Button href={project.href} className="btn btn-primary">
                VIEW PROJECT
              </Button>
            </div>
          </section>
        )}
      </div>
    </Scrollbars>
  );
}
