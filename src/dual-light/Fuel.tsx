import { memo, ReactElement, SVGProps } from 'react';
export const Fuel = memo(
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
          d="M4 5C4 3.34315 5.34315 2 7 2H13C14.6569 2 16 3.34315 16 5V20H4V5Z"
          fill="url(#paint0_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.2929 5.29289C18.6834 4.90237 19.3166 4.90237 19.7071 5.29289L21.4142 7C21.7893 7.37507 22 7.88378 22 8.41421V16.5C22 17.8807 20.8807 19 19.5 19C18.1193 19 17 17.8807 17 16.5V15C17 14.4477 16.5523 14 16 14V12C17.6569 12 19 13.3431 19 15V16.5C19 16.7761 19.2239 17 19.5 17C19.7761 17 20 16.7761 20 16.5V10.4142L19.5858 10C19.2107 9.62493 19 9.11622 19 8.58579V7.41421L18.2929 6.70711C17.9024 6.31658 17.9024 5.68342 18.2929 5.29289Z"
          fill="url(#paint1_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 21C2 20.4477 2.44772 20 3 20H17C17.5523 20 18 20.4477 18 21C18 21.5523 17.5523 22 17 22H3C2.44772 22 2 21.5523 2 21Z"
          fill="url(#paint2_linear)"
        />
        <path
          d="M6 5C6 4.44772 6.44772 4 7 4H13C13.5523 4 14 4.44772 14 5V9C14 9.55228 13.5523 10 13 10H7C6.44772 10 6 9.55228 6 9V5Z"
          fill="url(#paint3_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="10"
            y1="2"
            x2="10"
            y2="20"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="19"
            y1="5"
            x2="19"
            y2="19"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="10"
            y1="20"
            x2="10"
            y2="22"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint3_linear"
            x1="10"
            y1="4"
            x2="10"
            y2="10"
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
