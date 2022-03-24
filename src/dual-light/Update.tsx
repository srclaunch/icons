import { memo, ReactElement, SVGProps } from 'react';
export const Update = memo(
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
          d="M4 12C4 7.58172 7.58172 4 12 4C14.5171 4 16.7288 5.1635 18.1822 6.99321L16.5029 6.98829C15.9506 6.98667 15.5016 7.43307 15.5 7.98535C15.4984 8.53763 15.9448 8.98666 16.4971 8.98828L19.9399 8.99836C19.9783 9.00071 20.017 9.00084 20.0557 8.9987L20.4971 9C20.7628 9.00077 21.0179 8.89576 21.2061 8.70814C21.3942 8.52052 21.5 8.26572 21.5 8L21.5 4C21.5 3.44771 21.0523 3 20.5 3C19.9477 3 19.5 3.44772 19.5 4L19.5 5.44947C17.6875 3.34038 15.023 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C15.9359 22 19.2641 19.7278 20.8955 16.445C21.1413 15.9505 20.9396 15.3503 20.445 15.1045C19.9505 14.8587 19.3503 15.0604 19.1045 15.555C17.7905 18.1991 15.1315 20 12 20C7.58172 20 4 16.4183 4 12Z"
          fill="url(#paint0_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 7C12.5523 7 13 7.44772 13 8V11.5858L14.7071 13.2929C15.0976 13.6834 15.0976 14.3166 14.7071 14.7071C14.3166 15.0976 13.6834 15.0976 13.2929 14.7071L11.5858 13C11.2107 12.6249 11 12.1162 11 11.5858V8C11 7.44772 11.4477 7 12 7Z"
          fill="url(#paint1_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="11.75"
            y1="2"
            x2="11.75"
            y2="22"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="13"
            y1="7"
            x2="13"
            y2="15"
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
