import { memo, ReactElement, SVGProps } from 'react';
export const Cloud = memo(
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
          d="M22 12C22 15.866 18.866 19 15 19H7C4.23858 19 2 16.7614 2 14C2 11.2386 4.23858 9 7 9C7.54527 9 8.07015 9.08728 8.56143 9.24864C9.63037 6.75042 12.1108 5 15 5C18.866 5 22 8.13401 22 12Z"
          fill="url(#paint0_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12"
            y1="5"
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
