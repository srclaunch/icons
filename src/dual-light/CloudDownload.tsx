import { memo, ReactElement, SVGProps } from 'react';
export const CloudDownload = memo(
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
          d="M22 9C22 12.866 18.866 16 15 16H7C4.23858 16 2 13.7614 2 11C2 8.23858 4.23858 6 7 6C7.54527 6 8.07015 6.08728 8.56143 6.24864C9.63037 3.75042 12.1108 2 15 2C18.866 2 22 5.13401 22 9Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M9.70711 17.2929C9.31658 16.9024 8.68342 16.9024 8.29289 17.2929C7.90237 17.6834 7.90237 18.3166 8.29289 18.7071L11.2929 21.7071C11.4874 21.9016 11.7421 21.9992 11.997 22L12 22L12.003 22C12.1375 21.9996 12.2657 21.9727 12.3828 21.9241C12.5007 21.8753 12.6112 21.803 12.7071 21.7071L15.7071 18.7071C16.0976 18.3166 16.0976 17.6834 15.7071 17.2929C15.3166 16.9024 14.6834 16.9024 14.2929 17.2929L13 18.5858V13C13 12.4477 12.5523 12 12 12C11.4477 12 11 12.4477 11 13V18.5858L9.70711 17.2929Z"
          fill="url(#paint1_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12"
            y1="2"
            x2="12"
            y2="16"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="12"
            y1="22"
            x2="12"
            y2="12"
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
