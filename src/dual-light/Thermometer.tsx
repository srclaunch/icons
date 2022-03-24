import { memo, ReactElement, SVGProps } from 'react';
export const Thermometer = memo(
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
          d="M10 13.9995C10 14.4328 9.85927 14.8544 9.59899 15.2009C9.22238 15.7021 9 16.3222 9 17C9 18.6569 10.3431 20 12 20C13.6569 20 15 18.6569 15 17C15 16.3222 14.7776 15.7021 14.401 15.2009C14.1407 14.8544 14 14.4328 14 13.9995V6C14 4.89543 13.1046 4 12 4C10.8954 4 10 4.89543 10 6V13.9995ZM8 6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6V13.9995C16.6279 14.8353 17 15.8742 17 17C17 19.7614 14.7614 22 12 22C9.23858 22 7 19.7614 7 17C7 15.8742 7.37209 14.8353 8 13.9995V6Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8V15.2676C10.4022 15.6134 10 16.2597 10 17C10 18.1046 10.8954 19 12 19C13.1046 19 14 18.1046 14 17C14 16.2597 13.5978 15.6134 13 15.2676V8Z"
          fill="url(#paint1_linear)"
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
            x1="12"
            y1="7"
            x2="12"
            y2="19"
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
