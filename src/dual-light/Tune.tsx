import { memo, ReactElement, SVGProps } from 'react';
export const Tune = memo(
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
          d="M3 7C3 6.44772 3.44772 6 4 6L20 6C20.5523 6 21 6.44772 21 7C21 7.55228 20.5523 8 20 8L4 8C3.44772 8 3 7.55228 3 7Z"
          fill="url(#paint0_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 17C3 16.4477 3.44772 16 4 16L20 16C20.5523 16 21 16.4477 21 17C21 17.5523 20.5523 18 20 18L4 18C3.44772 18 3 17.5523 3 17Z"
          fill="url(#paint1_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 20C11.6569 20 13 18.6569 13 17C13 15.3431 11.6569 14 10 14C8.34315 14 7 15.3431 7 17C7 18.6569 8.34315 20 10 20Z"
          fill="url(#paint2_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14 10C15.6569 10 17 8.65685 17 7C17 5.34315 15.6569 4 14 4C12.3431 4 11 5.34315 11 7C11 8.65685 12.3431 10 14 10Z"
          fill="url(#paint3_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12"
            y1="6"
            x2="12"
            y2="8"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="12"
            y1="16"
            x2="12"
            y2="18"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="10"
            y1="14"
            x2="10"
            y2="20"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint3_linear"
            x1="14"
            y1="4"
            x2="14"
            y2="10"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
        </defs>
      </svg>
    );
  },
);
