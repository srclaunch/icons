import { memo, ReactElement, SVGProps } from 'react';
export const Sync = memo(
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
          d="M4 12C4 7.58172 7.58172 4 12 4C14.5171 4 16.7288 5.1635 18.1822 6.99321L16.5029 6.98829C15.9506 6.98667 15.5016 7.43307 15.5 7.98535C15.4984 8.53763 15.9448 8.98666 16.4971 8.98828L19.9399 8.99836C19.9783 9.00071 20.017 9.00084 20.0557 8.9987L20.4971 9C20.7628 9.00077 21.0179 8.89576 21.2061 8.70814C21.3942 8.52052 21.5 8.26572 21.5 8L21.5 4C21.5 3.44771 21.0523 3 20.5 3C19.9477 3 19.5 3.44772 19.5 4L19.5 5.44947C17.6875 3.34038 15.023 2 12 2C6.47715 2 2 6.47715 2 12C2 12.5523 2.44772 13 3 13C3.55228 13 4 12.5523 4 12Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M20 12C20 16.4183 16.4183 20 12 20C9.48295 20 7.27119 18.8365 5.81776 17.0068L7.49707 17.0117C8.04935 17.0133 8.49838 16.5669 8.5 16.0146C8.50161 15.4624 8.05521 15.0133 7.50293 15.0117L4.06007 15.0016C4.02166 14.9993 3.983 14.9992 3.94428 15.0013L3.50293 15C3.23721 14.9992 2.9821 15.1042 2.79393 15.2919C2.60576 15.4795 2.5 15.7343 2.5 16L2.5 20C2.5 20.5523 2.94772 21 3.5 21C4.05229 21 4.5 20.5523 4.5 20L4.5 18.5505C6.31255 20.6596 8.97702 22 12 22C17.5228 22 22 17.5228 22 12C22 11.4477 21.5523 11 21 11C20.4477 11 20 11.4477 20 12Z"
          fill="url(#paint1_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="11.75"
            y1="2"
            x2="11.75"
            y2="13"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="12.25"
            y1="11"
            x2="12.25"
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
