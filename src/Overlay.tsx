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
function handleAbout(offset : number) {
  let aboutPage : HTMLInputElement | null = document.querySelector(".about-page");
  let aboutButton : HTMLInputElement | null = document.querySelector(".about-button");
  let notAbout : NodeListOf<HTMLInputElement> = document.querySelectorAll(".not-about");
  if (aboutButton?.innerHTML === "About") {
    aboutButton.innerHTML = "Close";
    if (aboutPage) {
      aboutPage.style.visibility = "visible";
    }
    notAbout.forEach((e) => (e.style.visibility = "hidden"));
  } else if (aboutButton?.innerHTML === "Close") {
    aboutButton.innerHTML = "About";
    if (aboutPage) {
      aboutPage.style.visibility = "hidden";
    }
    if (offset === 0) {
      let firstSlide : NodeListOf<HTMLInputElement> = document.querySelectorAll(".first-slide");
      firstSlide.forEach((e) => (e.style.visibility = "visible"));
    } else if (offset === (SLIDENUM)*100) {
      let lastSlide : NodeListOf<HTMLInputElement> = document.querySelectorAll(".last-slide");
      lastSlide.forEach((e) => (e.style.visibility = "visible"));
    } else {
      
      notAbout.forEach((e) => (e.style.visibility = "visible"));
    }
    
  }


  var rect = aboutPage?.getBoundingClientRect();
if (rect) {
  var position = {
    top: rect.top + window.pageYOffset,
    left: rect.left + window.pageXOffset
  };
  console.log(position);
}

}

function handleResume() {
  
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
  setVal(val+100);

}

export default function Overlay() {
  const [offset, setOffset] = useState(0);

  return (
    <div>
      <button
        onClick={() => handleAbout(offset)}
        className="about-button text-primary-100 text-sm position: absolute w-fit h-fit transform: -rotate-90 z-20 hover:text-primary-200 m-auto top-0 bottom-0 left-0"
      >
        About
      </button>
      <button
        className="text-primary-100 text-sm position: absolute w-fit h-fit transform: rotate-90 z-20 hover:text-primary-200 m-auto top-0 bottom-0 right-[-8px] not-about first-slide last-slide"
      >
        <a href={require("./media/JeffersonLawResume.pdf")} download="resume">Resume</a>
      </button>
      <button
        onClick={() => prevPage(offset, setOffset)}
        className="prev invisible text-primary-100 position: absolute left-0 top-[10px] z-20 right-0 m-auto w-fit not-about last-slide"
      >
        <HiArrowLongUp size={40} />
      </button>
      <button
        onClick={() => nextPage(offset, setOffset)}
        className="next visible text-primary-100 position: absolute left-0 bottom-[10px] z-20 right-0 m-auto w-fit not-about first-slide"
      >
        <HiArrowLongDown size={40} />
      </button>
    </div>
  );
}
