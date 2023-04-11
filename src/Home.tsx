import React, { useState, useEffect } from "react";



export default function Home() {
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
    <div className="slide">
      <video
        autoPlay={true}
        muted
        loop
        className="w-screen h-screen object-cover"
      >
        <source src={require("./media/firewatch.mp4")} type="video/mp4" />
      </video>
      <div className="z-10 absolute m-auto inset-0 w-fit h-fit vertical text-center text-primary-100 not-about first-slide last-slide">
        <h1 className="text-2xl md:text-4xl lg:text-6xl">Jefferson Law</h1>
        <h2 className="text-xs md:text-sm lg:text-base">CS Student</h2>
      </div>
    </div>
  );
}
