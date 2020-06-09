import React, { useState, useEffect, useContext } from "react";

import { LayoutContext } from "../shared/context";

import Burger from "../utils/burger";

export default function Header({ className }) {
  const [scrollOffset, setScrollOffset] = useState(0);
  const [direction, setDirection] = useState("down");
  const [position, setPosition] = useState(0);
  const { sidebarOpen } = useContext(LayoutContext);

  useEffect(() => {
    let top = document.documentElement.scrollTop;
    setPosition(document.getElementById("headerElem").offsetHeight);

    const handleScroll = () => {
      let scroll = document.documentElement.scrollTop;
      setScrollOffset(scroll);

      // get direction
      scroll > top ? setDirection("down") : setDirection("up");
      top = scroll;
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      id="headerElem"
      className={`${
        scrollOffset > position ? "header--fixed" : ""
      } header--fixed_${direction} ${sidebarOpen ? "shrink" : ""}`}
    >
      <div className="header">
        <div className="header_icon"></div>
        <h1 className="header_title">whoisnyl</h1>
        <Burger />
      </div>
    </header>
  );
}
