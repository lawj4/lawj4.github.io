import React, { useState, useEffect } from "react";

export default function Overlay() {
  const [mouseX, setMouseX] = useState(-1);
  const [mouseY, setMouseY] = useState(-1);
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouseX(event.clientX);
      setMouseY(event.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <button
        onClick={() => alert("about")}
        className="text-primary-100 text-sm  position: absolute w-fit h-fit transform: -rotate-90 z-10 hover:text-primary-200 m-auto top-0 bottom-0 left-0"
      >
        About
      </button>
      <button
        onClick={() => alert("resume")}
        className="text-primary-100 text-sm  position: absolute w-fit h-fit transform: rotate-90 z-10 hover:text-primary-200 m-auto top-0 bottom-0 right-[-8px]"
      >
        Resume
      </button>
    </div>
  );
}
