import * as React from "react-dom";

export function InterChapterTopArrow({ classNames }) {
  return (
    <svg
      className={classNames}
      width="7"
      height="16"
      viewBox="0 0 7 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.89838 14.0738C4.64477 2.663 5.51055 13.2632 4.89835 1.87021"
        stroke="#2C334E"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.65381 1.09644C4.38541 1.3238 3.96018 2.16735 3.87099 2.33355C3.41246 3.18798 3.10648 3.81938 2.69381 4.69991C2.30384 5.53198 1.94315 6.37704 1.54872 7.20694"
        stroke="#2C334E"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export function InterChapterBottomArrow({ classNames }) {
  return (
    <svg
      className={classNames}
      width="7"
      height="15"
      viewBox="0 0 7 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.14118 1C1.24454 8.59836 1.58638 5.17654 1.86709 12.7624"
        stroke="#2C334E"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.11133 13.5361C2.37973 13.3088 2.80496 12.4652 2.89415 12.299C3.35268 11.4446 3.65865 10.8132 4.07133 9.93266C4.46129 9.10058 4.82199 8.25553 5.21642 7.42563"
        stroke="#2C334E"
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
      width="42"
      height="7"
      viewBox="0 0 42 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40.9366 1C29.5293 1.38213 13.1564 1.24612 1.771 1.98663"
        stroke="#2C334E"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1 2.23975C1.23038 2.50557 2.07866 2.92127 2.24585 3.00858C3.1054 3.45746 3.7402 3.7563 4.62532 4.15903C5.46174 4.5396 6.3108 4.89076 7.14509 5.27581"
        stroke="#2C334E"
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
      width="42"
      height="8"
      viewBox="0 0 42 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.00192 6.74561C12.4092 6.36347 28.7821 5.49949 40.1675 4.75897"
        stroke="#2C334E"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M40.9385 4.50586C40.7081 4.24004 39.8598 3.82433 39.6926 3.73702C38.8331 3.28815 38.1983 2.9893 37.3132 2.58657C36.4767 2.206 35.6277 1.85485 34.7934 1.46979"
        stroke="#2C334E"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export function ProgramizUpArrow() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.1265 19.9989L12.8736 6.00114"
        stroke="#0556F3"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.00116 13.1264L12.8736 6.00114L19.9989 12.8736"
        stroke="#0556F3"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export function ProgramizDownArrow() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.0104 6.00001L12.9896 20"
        stroke="#0556F3"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20 13.0104L12.9896 20L6.00002 12.9896"
        stroke="#0556F3"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export function ProgramizLeftArrow() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.0176 12.967L6.01801 13.0686"
        stroke="#0556F3"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.0686 20.0176L6.01801 13.0686L12.967 6.018"
        stroke="#0556F3"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export function ProgramizRightArrow() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.08728 13.1687L20.0863 13.0049"
        stroke="#0556F3"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.0049 6.08727L20.0863 13.0049L13.1687 20.0863"
        stroke="#0556F3"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
