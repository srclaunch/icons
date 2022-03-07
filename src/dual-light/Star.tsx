import { memo, ReactElement, SVGProps } from 'react';

export const Star = memo((props: SVGProps<SVGSVGElement>): ReactElement => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0)">
        <path
          d="M10.1109 3.43478C10.7335 1.64366 13.2665 1.64366 13.8891 3.43478L14.8347 6.15493C15.1093 6.94508 15.8467 7.48082 16.683 7.49786L19.5622 7.55653C21.4581 7.59517 22.2409 10.0043 20.7298 11.1499L18.4349 12.8897C17.7683 13.3951 17.4867 14.2619 17.7289 15.0626L18.5628 17.819C19.112 19.634 17.0627 21.1229 15.5062 20.0398L13.1424 18.3949C12.4557 17.9171 11.5443 17.9171 10.8576 18.3949L8.49383 20.0398C6.93734 21.1229 4.88805 19.634 5.43715 17.819L6.27107 15.0626C6.51331 14.2619 6.23165 13.3951 5.56506 12.8897L3.27022 11.1499C1.75915 10.0043 2.54191 7.59517 4.43776 7.55653L7.31697 7.49786C8.15331 7.48082 8.89069 6.94508 9.16535 6.15494L10.1109 3.43478Z"
          fill="url(#paint0_linear)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="12"
          y1="-2"
          x2="12"
          y2="26"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#D1DAEE" />
        </linearGradient>
        <clipPath id="clip0">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
});
