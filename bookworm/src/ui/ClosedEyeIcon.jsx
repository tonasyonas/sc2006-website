import { memo, SVGProps } from 'react';

const ClosedEyeIcon = () => (
  <svg preserveAspectRatio='none' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg' >
    <g clipPath='url(#clip0_2024_2)'>
      <path
        d='M11.2125 11.2125C10.1441 12.0269 8.84319 12.478 7.5 12.5C3.125 12.5 0.625 7.5 0.625 7.5C1.40243 6.05119 2.48071 4.78538 3.7875 3.7875M6.1875 2.65C6.61771 2.5493 7.05817 2.49896 7.5 2.5C11.875 2.5 14.375 7.5 14.375 7.5C13.9956 8.20975 13.5432 8.87796 13.025 9.49375M8.825 8.825C8.65334 9.00922 8.44634 9.15697 8.21635 9.25945C7.98635 9.36193 7.73806 9.41704 7.48631 9.42148C7.23455 9.42592 6.98448 9.37961 6.75101 9.28531C6.51754 9.191 6.30545 9.05064 6.1274 8.8726C5.94936 8.69455 5.809 8.48246 5.71469 8.24899C5.62039 8.01552 5.57408 7.76545 5.57852 7.51369C5.58296 7.26194 5.63807 7.01365 5.74055 6.78366C5.84303 6.55366 5.99078 6.34666 6.175 6.175'
        stroke='#5E6282'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M0.625 0.625L14.375 14.375'
        stroke='#5E6282'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </g>
    <defs>
      <clipPath id='clip0_2024_2'>
        <rect width={15} height={15} fill='white' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(ClosedEyeIcon);
export { Memo as ClosedEyeIcon };
