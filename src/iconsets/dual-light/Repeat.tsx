import { memo, ReactElement, SVGProps } from 'react';
export const Repeat = memo(
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
          d="M16.2071 2.7929C15.8166 2.40237 15.1834 2.40237 14.7929 2.79289C14.4024 3.18341 14.4024 3.81658 14.7929 4.2071L15.582 4.99622H10C6.13401 4.99622 3 8.13022 3 11.9962V12.9962C3 13.5485 3.44772 13.9962 4 13.9962C4.55228 13.9962 5 13.5485 5 12.9962V11.9962C5 9.23479 7.23858 6.99622 10 6.99622H15.5866L14.7929 7.78992C14.4024 8.18045 14.4024 8.81362 14.7929 9.20414C15.1834 9.59466 15.8166 9.59465 16.2071 9.20412L18.352 7.05916C18.9378 6.47337 18.9378 5.52363 18.352 4.93785L16.2071 2.7929Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M13.9985 19C17.8645 19 20.9985 15.866 20.9985 12V11C20.9985 10.4477 20.5508 10 19.9985 10C19.4462 10 18.9985 10.4477 18.9985 11V12C18.9985 14.7614 16.7599 17 13.9985 17H8.41182L9.20564 16.2062C9.59616 15.8156 9.59615 15.1825 9.20563 14.792C8.8151 14.4014 8.18193 14.4014 7.79141 14.792L5.64648 16.9369C5.06071 17.5227 5.06071 18.4725 5.64649 19.0582L7.79141 21.2032C8.18194 21.5937 8.8151 21.5937 9.20563 21.2032C9.59615 20.8127 9.59616 20.1795 9.20564 19.789L8.41666 19H13.9985Z"
          fill="url(#paint1_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="10.8957"
            y1="2.5"
            x2="10.8957"
            y2="13.9962"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="13.1028"
            y1="10"
            x2="13.1028"
            y2="21.4961"
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
