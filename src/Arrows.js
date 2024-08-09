import * as React from "react-dom";

export function UpArrow({ isNavigating }) {
  return (
    <svg
      className={`arrow-up ${isNavigating ? "highlight-forward" : ""}`}
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.2252 20.1055L12.9878 6.10751"
        stroke="#0556f3"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.10752 13.2252L12.9878 6.10751L20.1055 12.9878"
        stroke="#0556f3"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export function LeftArrow({ isNavigating }) {
  return (
    <svg
      className={`arrow-backward ${isNavigating ? "highlight-backward" : ""}`}
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.1062 12.0441L5.10679 12.1689"
        stroke="#0556f3"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.1689 19.1062L5.10679 12.1689L12.0441 5.10679"
        stroke="#0556f3"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export function RightArrow({ isNavigating }) {
  return (
    <svg
      className={`arrow-forward ${isNavigating ? "highlight-forward" : ""}`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 12H19"
        stroke="#0556f3"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 5L19 12L12 19"
        stroke="#0556f3"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export function DownArrow({ isNavigating }) {
  return (
    <svg
      className={`arrow-down ${isNavigating ? "highlight-forward" : ""}`}
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.1896 6.107L13.0234 20.106"
        stroke="#0556f3"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.106 13.1896L13.0234 20.106L6.107 13.0234"
        stroke="#0556f3"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
