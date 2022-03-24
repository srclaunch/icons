import { memo, ReactElement, SVGProps } from 'react';
export const Flight = memo(
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
          d="M2 14.5C2 14.8135 2.14706 15.1089 2.39725 15.2979C2.64744 15.4869 2.97178 15.5476 3.27338 15.4619L10.6393 13.3684H13.3607L20.7266 15.4619C21.0282 15.5476 21.3526 15.4869 21.6028 15.2979C21.8529 15.1089 22 14.8135 22 14.5V13.2737C22 12.1082 21.3249 11.0481 20.2687 10.5552L13.9229 7.59382C13.7905 7.53202 13.6461 7.5 13.5 7.5H10.5C10.3539 7.5 10.2095 7.53202 10.0771 7.59382L3.73134 10.5552C2.67512 11.0481 2 12.1082 2 13.2737V14.5Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M7.5 21.5C7.5 21.8565 7.68976 22.186 7.99807 22.3649C8.30639 22.5438 8.68664 22.5451 8.99614 22.3682L12 20.6518L15.0039 22.3682C15.3134 22.5451 15.6936 22.5438 16.0019 22.3649C16.3102 22.186 16.5 21.8565 16.5 21.5V19C16.5 18.3705 16.2036 17.7777 15.7 17.4L14.5 16.5V4C14.5 2.61929 13.3807 1.5 12 1.5C10.6193 1.5 9.5 2.61929 9.5 4L9.5 16.5L8.3 17.4C7.79639 17.7777 7.5 18.3705 7.5 19V21.5Z"
          fill="url(#paint1_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12"
            y1="7.5"
            x2="12"
            y2="15.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="12"
            y1="1.5"
            x2="12"
            y2="22.5"
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
