import { memo, ReactElement, SVGProps } from 'react';
export const Cast = memo(
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
          x="2"
          y="4"
          width="20"
          height="16"
          rx="3"
          fill="url(#paint0_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 12C2 11.4477 2.44772 11 3 11C7.41828 11 11 14.5817 11 19C11 19.5523 10.5523 20 10 20C9.44772 20 9 19.5523 9 19C9 15.6863 6.31371 13 3 13C2.44772 13 2 12.5523 2 12Z"
          fill="url(#paint1_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 15.5C2 14.9477 2.44772 14.5 3 14.5C5.48528 14.5 7.5 16.5147 7.5 19C7.5 19.5523 7.05228 20 6.5 20C5.94772 20 5.5 19.5523 5.5 19C5.5 17.6193 4.38071 16.5 3 16.5C2.44772 16.5 2 16.0523 2 15.5Z"
          fill="url(#paint2_linear)"
        />
        <circle cx="3" cy="19" r="1" fill="url(#paint3_linear)" />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12"
            y1="4"
            x2="12"
            y2="20"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="6.5"
            y1="11"
            x2="6.5"
            y2="20"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="4.75"
            y1="14.5"
            x2="4.75"
            y2="20"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint3_linear"
            x1="3"
            y1="18"
            x2="3"
            y2="20"
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
