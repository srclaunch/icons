import { memo, ReactElement, SVGProps } from 'react';
export const VolumeHigh = memo(
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
          d="M15.2361 15.8042C15.4068 16.3295 15.9782 16.6251 16.4591 16.3535C17.0797 16.003 17.6216 15.5218 18.0451 14.9389C18.6658 14.0847 19 13.0559 19 12C19 10.9441 18.6658 9.91529 18.0451 9.06106C17.6216 8.47819 17.0797 7.99701 16.4591 7.64646C15.9782 7.37483 15.4068 7.6705 15.2361 8.19576C15.0654 8.72101 15.3691 9.27406 15.8096 9.6072C16.0439 9.78437 16.2523 9.99606 16.4271 10.2366C16.7995 10.7492 17 11.3664 17 12C17 12.6335 16.7995 13.2508 16.4271 13.7633C16.2523 14.0039 16.0439 14.2156 15.8096 14.3928C15.3691 14.7259 15.0654 15.279 15.2361 15.8042Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M17.1631 18.6574C17.3337 19.1827 17.9015 19.4757 18.4014 19.2409C19.6178 18.6695 20.6758 17.7982 21.4721 16.7023C22.4651 15.3355 22.9999 13.6894 22.9999 12C22.9999 10.3106 22.4651 8.6645 21.4721 7.29772C20.6758 6.20179 19.6178 5.33054 18.4014 4.75913C17.9015 4.52431 17.3337 4.81735 17.1631 5.34261C16.9924 5.86786 17.2854 6.42489 17.775 6.68033C18.5933 7.10721 19.3063 7.71936 19.854 8.47329C20.5988 9.49838 20.9999 10.7329 20.9999 12C20.9999 13.2671 20.5988 14.5016 19.854 15.5267C19.3063 16.2806 18.5933 16.8928 17.775 17.3197C17.2854 17.5751 16.9924 18.1321 17.1631 18.6574Z"
          fill="url(#paint1_linear)"
        />
        <path
          d="M14 19.5925V4.40754C14 2.68922 11.9762 1.77086 10.683 2.90238L6 7H4C2.34315 7 1 8.34315 1 10V14C1 15.6569 2.34315 17 4 17H6L10.683 21.0976C11.9762 22.2291 14 21.3108 14 19.5925Z"
          fill="url(#paint2_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="17.094"
            y1="7.5437"
            x2="17.094"
            y2="16.4563"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="20.057"
            y1="4.67719"
            x2="20.057"
            y2="19.3228"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="7.5"
            y1="0"
            x2="7.5"
            y2="24"
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
