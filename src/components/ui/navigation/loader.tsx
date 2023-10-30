import { ReactElement } from "react";

const loader = (): ReactElement => (
  <div id="loader" className="flex w-full items-start">
    <svg
      className="mx-auto"
      xmlns="http://www.w3.org/2000/svg"
      width="200px"
      height="200px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <rect x="34" y="34" width="10" height="10" fill="#191919">
        <animate
          attributeName="fill"
          values="#d87d4a;#191919;#191919"
          keyTimes="0;0.125;1"
          dur="1.3333333333333333s"
          repeatCount="indefinite"
          begin="0s"
          calcMode="discrete"
        ></animate>
      </rect>
      <rect x="45" y="34" width="10" height="10" fill="#191919">
        <animate
          attributeName="fill"
          values="#d87d4a;#191919;#191919"
          keyTimes="0;0.125;1"
          dur="1.3333333333333333s"
          repeatCount="indefinite"
          begin="0.16666666666666666s"
          calcMode="discrete"
        ></animate>
      </rect>
      <rect x="56" y="34" width="10" height="10" fill="#191919">
        <animate
          attributeName="fill"
          values="#d87d4a;#191919;#191919"
          keyTimes="0;0.125;1"
          dur="1.3333333333333333s"
          repeatCount="indefinite"
          begin="0.3333333333333333s"
          calcMode="discrete"
        ></animate>
      </rect>
      <rect x="34" y="45" width="10" height="10" fill="#191919">
        <animate
          attributeName="fill"
          values="#d87d4a;#191919;#191919"
          keyTimes="0;0.125;1"
          dur="1.3333333333333333s"
          repeatCount="indefinite"
          begin="1.1666666666666667s"
          calcMode="discrete"
        ></animate>
      </rect>
      <rect x="56" y="45" width="10" height="10" fill="#191919">
        <animate
          attributeName="fill"
          values="#d87d4a;#191919;#191919"
          keyTimes="0;0.125;1"
          dur="1.3333333333333333s"
          repeatCount="indefinite"
          begin="0.5s"
          calcMode="discrete"
        ></animate>
      </rect>
      <rect x="34" y="56" width="10" height="10" fill="#191919">
        <animate
          attributeName="fill"
          values="#d87d4a;#191919;#191919"
          keyTimes="0;0.125;1"
          dur="1.3333333333333333s"
          repeatCount="indefinite"
          begin="1s"
          calcMode="discrete"
        ></animate>
      </rect>
      <rect x="45" y="56" width="10" height="10" fill="#191919">
        <animate
          attributeName="fill"
          values="#d87d4a;#191919;#191919"
          keyTimes="0;0.125;1"
          dur="1.3333333333333333s"
          repeatCount="indefinite"
          begin="0.8333333333333334s"
          calcMode="discrete"
        ></animate>
      </rect>
      <rect x="56" y="56" width="10" height="10" fill="#191919">
        <animate
          attributeName="fill"
          values="#d87d4a;#191919;#191919"
          keyTimes="0;0.125;1"
          dur="1.3333333333333333s"
          repeatCount="indefinite"
          begin="0.6666666666666666s"
          calcMode="discrete"
        ></animate>
      </rect>
    </svg>
  </div>
);

export default loader;
