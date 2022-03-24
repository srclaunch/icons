import { memo, ReactElement, SVGProps } from 'react';
export const Wind = memo(
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
          d="M9 5C8.63112 5 8.30758 5.19922 8.13317 5.50073C7.85663 5.97879 7.2449 6.14215 6.76684 5.86561C6.28878 5.58906 6.12542 4.97733 6.40196 4.49927C6.91916 3.60518 7.88832 3 9 3C10.6569 3 12 4.34315 12 6C12 7.65685 10.6569 9 9 9H4C3.44772 9 3 8.55228 3 8C3 7.44772 3.44772 7 4 7H9C9.55228 7 10 6.55228 10 6C10 5.44772 9.55228 5 9 5Z"
          fill="url(#paint0_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14 19C13.6311 19 13.3076 18.8008 13.1332 18.4993C12.8566 18.0212 12.2449 17.8579 11.7668 18.1344C11.2888 18.4109 11.1254 19.0227 11.402 19.5007C11.9192 20.3948 12.8883 21 14 21C15.6569 21 17 19.6569 17 18C17 16.3431 15.6569 15 14 15H4C3.44772 15 3 15.4477 3 16C3 16.5523 3.44772 17 4 17H14C14.5523 17 15 17.4477 15 18C15 18.5523 14.5523 19 14 19Z"
          fill="url(#paint1_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17 7C16.1307 7 15.3886 7.5551 15.1135 8.33325C14.9295 8.85396 14.3582 9.12689 13.8375 8.94284C13.3167 8.75879 13.0438 8.18747 13.2279 7.66675C13.7765 6.11451 15.2568 5 17 5C19.2091 5 21 6.79086 21 9C21 11.2091 19.2091 13 17 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17C18.1046 11 19 10.1046 19 9C19 7.89543 18.1046 7 17 7Z"
          fill="url(#paint2_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="7.5"
            y1="3"
            x2="7.5"
            y2="9"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="10"
            y1="21"
            x2="10"
            y2="15"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="12"
            y1="5"
            x2="12"
            y2="13"
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
