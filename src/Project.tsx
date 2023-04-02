import React, { useState, useEffect } from "react";



export default function Project(props : {text: string}) {
  return (
    <div className="slide bg-black w-screen h-screen flex">


        <h1 className="z-10 m-auto text-primary-100 text-2xl md:text-4xl lg:text-6xl">{props.text}</h1>

    </div>
  );
}
