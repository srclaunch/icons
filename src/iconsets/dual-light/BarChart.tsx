import { memo, ReactElement, SVGProps } from 'react';
export const BarChart = memo(
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
          d="M3 2C3.55228 2 4 2.44772 4 3V19C4 19.5523 4.44772 20 5 20H21C21.5523 20 22 20.4477 22 21C22 21.5523 21.5523 22 21 22H5C3.34315 22 2 20.6569 2 19V3C2 2.44772 2.44772 2 3 2Z"
          fill="url(#paint0_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 8C7.55228 8 8 8.44772 8 9V17C8 17.5523 7.55228 18 7 18C6.44772 18 6 17.5523 6 17V9C6 8.44772 6.44772 8 7 8Z"
          fill="url(#paint1_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11 14C11.5523 14 12 14.4477 12 15V17C12 17.5523 11.5523 18 11 18C10.4477 18 10 17.5523 10 17V15C10 14.4477 10.4477 14 11 14Z"
          fill="url(#paint2_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15 4C15.5523 4 16 4.44772 16 5V17C16 17.5523 15.5523 18 15 18C14.4477 18 14 17.5523 14 17V5C14 4.44772 14.4477 4 15 4Z"
          fill="url(#paint3_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19 10C19.5523 10 20 10.4477 20 11V17C20 17.5523 19.5523 18 19 18C18.4477 18 18 17.5523 18 17V11C18 10.4477 18.4477 10 19 10Z"
          fill="url(#paint4_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12"
            y1="2"
            x2="12"
            y2="22"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="7"
            y1="8"
            x2="7"
            y2="18"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="11"
            y1="14"
            x2="11"
            y2="18"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint3_linear"
            x1="15"
            y1="4"
            x2="15"
            y2="18"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint4_linear"
            x1="19"
            y1="10"
            x2="19"
            y2="18"
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
