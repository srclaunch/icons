import { memo, SVGProps, ReactElement } from 'react';

export const Inbox = memo((props: SVGProps<SVGSVGElement>): ReactElement => {
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
        d="M2 14C2 13.4477 2.44772 13 3 13H8.38197C8.76074 13 9.107 13.214 9.27639 13.5528L9.5 14L9.99724 14.9945C9.99893 14.9979 10.0024 15 10.0062 15H13.9938C13.9976 15 14.0011 14.9979 14.0028 14.9945L14.7236 13.5528C14.893 13.214 15.2393 13 15.618 13H21C21.5523 13 22 13.4477 22 14V18C22 19.6569 20.6569 21 19 21H5C3.34315 21 2 19.6569 2 18V14Z"
        fill="url(#paint0_linear)"
      />
      <path
        d="M7.2629 3C5.92346 3 4.74631 3.88793 4.37833 5.17584L2.07695 13.2307C2.0259 13.4094 2 13.5943 2 13.7801V14C2 13.4477 2.44772 13 3 13H8.38197C8.76074 13 9.107 13.214 9.27639 13.5528L9.99724 14.9945C9.99893 14.9979 10.0024 15 10.0062 15H13.9938C13.9976 15 14.0011 14.9979 14.0028 14.9945L14.7236 13.5528C14.893 13.214 15.2393 13 15.618 13H21C21.5523 13 22 13.4477 22 14V13.7801C22 13.5943 21.9741 13.4094 21.923 13.2307L19.6217 5.17584C19.2537 3.88793 18.0765 3 16.7371 3H7.2629Z"
        fill="url(#paint1_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="12"
          y1="13"
          x2="12"
          y2="21"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6073D8" />
          <stop offset="1" stopColor="#5C5ACA" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="12"
          y1="3"
          x2="12"
          y2="15"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#D1DAEE" />
        </linearGradient>
      </defs>
    </svg>
  );
});
