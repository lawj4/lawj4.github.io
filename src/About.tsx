export default function About() {
  return (
    <div className="about-page invisible bg-black opacity-50 w-screen h-screen position: absolute inset-0 z-20">
      {inner()}
    </div>
  );
}

function inner() {
    return (
        <div className=" w-screen h-screen flex absolute">
        <h1 className="m-auto text-primary-100 text-2xl md:text-4xl lg:text-6xl">
          wassup this is my website
        </h1>
      </div>
    )
}