import { memo, ReactElement, SVGProps } from 'react';
export const Mic = memo(
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
        <rect
          x="9"
          y="2"
          width="6"
          height="12"
          rx="3"
          fill="url(#paint0_linear)"
        />
        <path
          d="M7 11C7 10.4477 6.55228 10 6 10C5.44772 10 5 10.4477 5 11C5 14.5265 7.60771 17.4439 11 17.9291V20H9C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22H15C15.5523 22 16 21.5523 16 21C16 20.4477 15.5523 20 15 20H13V17.9291C16.3923 17.4439 19 14.5265 19 11C19 10.4477 18.5523 10 18 10C17.4477 10 17 10.4477 17 11C17 13.7614 14.7614 16 12 16C9.23858 16 7 13.7614 7 11Z"
          fill="url(#paint1_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12"
            y1="2"
            x2="12"
            y2="14"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="12"
            y1="10"
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
