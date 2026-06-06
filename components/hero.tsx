import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-section sm:h-screen min-h-[80vh] md:min-h-[776px] sm:max-h-[65vw] flex flex-col items-between justify-between">
      <div />
      <div className="flex flex-col gap-1">
        <span className="text-md">Hello!</span>
        <span className="text-5xl font-bold">I am Anshu Raikwar</span>
        <span className="text-md">Frontend Engineer based in India.</span>
      </div>
      <div className="w-fit flex flex-col gap-1 relative">
        <div className="text-sm flex align-center justify-between absolute w-full -top-2 md:top-0 lg:top-4">
          <span>Welcom to my</span>
        </div>
        <div className="flex align-start overflow-hidden" style={{ fontSize: "min(30vw, 450px)" }}>
          <h1 className="-ms-[0.07em] font-medium leading-[1em]">
            <span className="tracking-[-0.08em]">P</span>
            <span className="tracking-[-0.055em]">o</span>
            <span className="tracking-[-0.09em]">rtf</span>
            <span className="tracking-[-0.055em]">oli</span>
            o
          </h1>
        </div>
      </div>
    </section>
  );
}
