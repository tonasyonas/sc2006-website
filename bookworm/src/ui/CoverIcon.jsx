import { memo } from "react";

const CoverIcon = () => (
  <svg
    preserveAspectRatio="none"
    viewBox="0 0 720 713"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_2018_2)">
      <path
        d="M311.747 60.4316C316.013 50.5155 325.278 43.656 336.007 42.4693L703.351 1.84136C712.234 0.858911 720 7.81331 720 16.7505V698C720 706.284 713.284 713 705 713H76.5651C55.0097 713 40.4886 690.945 49.0072 671.144L311.747 60.4316Z"
        fill="#4475F2"
      />
    </g>
    <g filter="url(#filter1_d_2018_2)">
      <path
        d="M0 0H720V713H473.7C456.467 713 440.449 704.126 431.31 689.516L0 0Z"
        fill="#4475F2"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_2018_2"
        x={-13.4674}
        y={-28.2513}
        width={793.467}
        height={831.251}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={30} />
        <feGaussianBlur stdDeviation={30} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.278431 0 0 0 0 0.290196 0 0 0 0 0.341176 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_2018_2"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_2018_2"
          result="shape"
        />
      </filter>
      <filter
        id="filter1_d_2018_2"
        x={-60}
        y={-30}
        width={840}
        height={833}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={30} />
        <feGaussianBlur stdDeviation={30} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.278431 0 0 0 0 0.290196 0 0 0 0 0.341176 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_2018_2"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_2018_2"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
const Memo = memo(CoverIcon);
export { Memo as CoverIcon };
