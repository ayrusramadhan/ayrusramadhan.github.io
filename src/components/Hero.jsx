import { useEffect, useRef, useState } from "react";

const CORNERS = [
  "-left-[7px] -top-[7px]",
  "-right-[7px] -top-[7px]",
  "-bottom-[7px] -left-[7px]",
  "-bottom-[7px] -right-[7px]",
];

function Cursor({ name, color, className }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute z-[2] ${className}`}
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill={color}>
        <path d="M3 2l14 7.5-6 2-2.2 6.5z" />
      </svg>
      <span
        className="-mt-1 ml-3.5 block rounded-[0_14px_14px_14px] px-3 py-1.5 font-sans text-[13px] font-semibold leading-none text-ink"
        style={{ background: color }}
      >
        {name}
      </span>
    </div>
  );
}

// The headline is a "selected layer": frame, handles, and a live width x height label.
export default function Hero() {
  const ref = useRef(null);
  const [size, setSize] = useState("");

  useEffect(() => {
    const ro = new ResizeObserver(() => {
      const r = ref.current.getBoundingClientRect();
      setSize(`${Math.round(r.width)} × ${Math.round(r.height)}`);
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  return (
    <div className="relative pb-[72px] pt-14">
      <div
        ref={ref}
        className="relative block w-fit max-w-full border-2 border-cobalt px-[.16em] py-[.1em] font-sans text-[clamp(36px,9.5vw,140px)] font-extrabold leading-[.95]"
      >
        <h1 tabIndex={-1} className="tracking-[-.045em]">
          {["I design flows", "people actually", "finish."].map((line, i) => (
            <span
              key={line}
              className="rise block"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {line}
            </span>
          ))}
        </h1>
        {CORNERS.map((c) => (
          <i
            key={c}
            aria-hidden
            className={`absolute size-2.5 rounded-[2px] border-2 border-cobalt bg-white ${c}`}
          />
        ))}
        <span
          aria-hidden
          className="absolute -right-0.5 top-full mt-2.5 rounded-md bg-cobalt px-2.5 py-1.5 font-sans text-[13px] font-semibold leading-none text-white"
        >
          {size}
        </span>
      </div>
      <Cursor
        name="Surya, UI/UX"
        color="#FF6B2C"
        className="drift-a right-[5%] top-5"
      />
      <Cursor
        name="Rivan, Dev"
        color="#9BE8C8"
        className="drift-b -bottom-2 left-[10%] hidden md:block"
      />
    </div>
  );
}
