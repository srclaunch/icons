import { memo, ReactElement, SVGProps } from 'react';
export const Pen = memo(
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
          d="M11.269 2.28326L6.48938 7.40423C5.60154 8.35549 5.42815 9.77064 6.06008 10.9081L9.44445 17H14.5556L17.9399 10.9081C18.5719 9.77064 18.3985 8.35549 17.5106 7.40423L12.7311 2.28326C12.3357 1.85968 11.6643 1.85968 11.269 2.28326Z"
          fill="url(#paint0_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V8.26756C10.4022 8.61337 10 9.25972 10 10C10 11.1046 10.8954 12 12 12C13.1046 12 14 11.1046 14 10C14 9.25972 13.5978 8.61337 13 8.26756V3Z"
          fill="url(#paint1_linear)"
        />
        <rect
          x="6"
          y="17"
          width="12"
          height="5"
          rx="2.5"
          fill="url(#paint2_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12"
            y1="1.96558"
            x2="12"
            y2="17"
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
            y2="12"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="12"
            y1="17"
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
