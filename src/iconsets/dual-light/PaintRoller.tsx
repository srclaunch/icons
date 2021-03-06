import { memo, ReactElement, SVGProps } from 'react';
export const PaintRoller = memo(
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
          d="M17 5C17 4.44772 17.4477 4 18 4H19C20.6569 4 22 5.34315 22 7V8.86039C22 10.2904 20.9906 11.5217 19.5883 11.8021L12.8039 13.159C12.3365 13.2525 12 13.6629 12 14.1396V15C12 15.5523 11.5523 16 11 16C10.4477 16 10 15.5523 10 15V14.1396C10 12.7096 11.0094 11.4783 12.4117 11.1979L19.1961 9.84097C19.6635 9.74749 20 9.33707 20 8.86039V7C20 6.44772 19.5523 6 19 6H18C17.4477 6 17 5.55228 17 5Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M6 2C4.34315 2 3 3.34315 3 5V6C3 7.65685 4.34315 9 6 9H16C17.6569 9 19 7.65685 19 6V5C19 3.34315 17.6569 2 16 2H6Z"
          fill="url(#paint1_linear)"
        />
        <rect
          x="10"
          y="15"
          width="2"
          height="6"
          rx="1"
          stroke="url(#paint2_linear)"
          stroke-width="2"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="16"
            y1="4"
            x2="16"
            y2="16"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="11"
            y1="2"
            x2="11"
            y2="9"
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
            y2="22"
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
