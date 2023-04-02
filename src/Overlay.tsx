import React, { useState, useEffect } from "react";
import { HiArrowLongDown, HiArrowLongUp } from "react-icons/hi2";


const SLIDENUM = 3;

function prevPage(val: number, setVal: (x: number) => void) {
  let pages: NodeListOf<HTMLInputElement> = document.querySelectorAll(".slide");
  pages.forEach((e) => (e.style.transform = `translate(0, -${val - 100}%)`));
  let prev : HTMLInputElement | null = document.querySelector(".prev");
  if (prev != null && val === 100) {
    prev.style.visibility = "hidden";
  }
  let next : HTMLInputElement | null = document.querySelector(".next");
  if (next != null) {
    next.style.visibility = "visible";
  }
  setVal(val - 100);
}

function nextPage(val: number, setVal: (x: number) => void) {
  let pages: NodeListOf<HTMLInputElement> = document.querySelectorAll(".slide");
  pages.forEach((e) => (e.style.transform = `translate(0, -${val + 100}%)`));
  let prev : HTMLInputElement | null = document.querySelector(".prev");
  if (prev != null) {
    prev.style.visibility = "visible";
  }
  let next : HTMLInputElement | null = document.querySelector(".next");
  if (next != null && val === (SLIDENUM-1)*100) {
    next.style.visibility = "hidden";
  }
  setVal(val + 100);
}

export default function Overlay() {
  const [mouseX, setMouseX] = useState(-1);
  const [mouseY, setMouseY] = useState(-1);
  const [offset, setOffset] = useState(0);
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
        className=" text-primary-100 text-sm position: absolute w-fit h-fit transform: -rotate-90 z-10 hover:text-primary-200 m-auto top-0 bottom-0 left-0"
      >
        About
      </button>
      <button
        onClick={() => alert("resume")}
        className="text-primary-100 text-sm position: absolute w-fit h-fit transform: rotate-90 z-10 hover:text-primary-200 m-auto top-0 bottom-0 right-[-8px]"
      >
        Resume
      </button>
      <button
        onClick={() => prevPage(offset, setOffset)}
        className="prev invisible text-primary-100 position: absolute left-0 top-[10px] z-10 right-0 m-auto w-fit"
      >
        <HiArrowLongUp size={40} />
      </button>
      <button
        onClick={() => nextPage(offset, setOffset)}
        className="next visible text-primary-100 position: absolute left-0 bottom-[10px] z-10 right-0 m-auto w-fit"
      >
        <HiArrowLongDown size={40} />
      </button>
    </div>
  );
}
