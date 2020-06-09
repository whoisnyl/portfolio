import React, { useState, useEffect } from "react";
import { Scrollbars } from "react-custom-scrollbars";

export default function About({ data }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    data &&
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
  }, []);

  return (
    <Scrollbars style={{ height: "100vh", width: "100%" }}>
      <div className={`inner ${isLoading ? "loading" : ""}`}>
        {!isLoading && data && (
          <section className="about">
            <div className="about_header">
              <canvas
                className="about_header-image"
                style={{ backgroundImage: `url('${data.image.url}')` }}
              />
              <h3 className="about_header-name">{data.name}</h3>
            </div>
            <div className="about_description">
              {data.description.split("\n").map((text, key) => (
                <p key={key}>
                  {text}
                  <br />
                </p>
              ))}
            </div>
          </section>
        )}
      </div>
    </Scrollbars>
  );
}
