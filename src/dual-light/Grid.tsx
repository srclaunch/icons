import { memo, ReactElement, SVGProps } from 'react';
export const Grid = memo(
  (props: SVGProps<SVGSVGElement>): ReactElement<SVGElement> => {
    return (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 3C9.55228 3 10 3.44772 10 4V8H14V4C14 3.44772 14.4477 3 15 3C15.5523 3 16 3.44772 16 4V8H20C20.5523 8 21 8.44772 21 9C21 9.55228 20.5523 10 20 10H16V14H20C20.5523 14 21 14.4477 21 15C21 15.5523 20.5523 16 20 16H16V20C16 20.5523 15.5523 21 15 21C14.4477 21 14 20.5523 14 20V16H10V20C10 20.5523 9.55228 21 9 21C8.44772 21 8 20.5523 8 20V16H4C3.44772 16 3 15.5523 3 15C3 14.4477 3.44772 14 4 14H8V10H4C3.44772 10 3 9.55228 3 9C3 8.44772 3.44772 8 4 8H8V4C8 3.44772 8.44772 3 9 3ZM14 14V10H10V14H14Z"
          fill="url(#paint0_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19 4H5C4.44771 4 4 4.44772 4 5V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V5C20 4.44771 19.5523 4 19 4ZM5 2C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V5C22 3.34315 20.6569 2 19 2H5Z"
          fill="url(#paint1_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12"
            y1="3"
            x2="12"
            y2="21"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="12"
            y1="2"
            x2="12"
            y2="22"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
        </defs>
      </svg>
    );
  },
);
