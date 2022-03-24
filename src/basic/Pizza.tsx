import { memo, ReactElement, SVGProps } from 'react';
export const Pizza = memo(
  (props: SVGProps<SVGSVGElement>): ReactElement<SVGElement> => {
    return (
      <svg
        id="applab-icon-basic-pizza"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g>
          <g>
            <path d="M386.88,16L257.472,240h253.696c0.48-4.512,0.832-8.864,0.832-13.44C512,135.68,461.44,56.64,386.88,16z M400,192 c-17.664,0-32-14.336-32-32s14.336-32,32-32s32,14.336,32,32S417.664,192,400,192z" />
          </g>
        </g>
        <g>
          <g>
            <path d="M257.472,272h-55.424l27.712-48L337.696,37.184C307.136,23.456,273.888,16,240,16C107.648,16,0,123.648,0,256 s107.648,240,240,240c126.944,0,230.912-99.136,239.2-224H257.472z M240,80c8.832,0,16,7.168,16,16c0,8.832-7.168,16-16,16 c-8.832,0-16-7.168-16-16C224,87.168,231.168,80,240,80z M111.008,208c8.832,0,16,7.168,16,16c0,8.832-7.168,16-16,16 c-8.832,0-16-7.168-16-16C95.008,215.168,102.176,208,111.008,208z M128,368c-17.664,0-32-14.336-32-32s14.336-32,32-32 s32,14.336,32,32S145.664,368,128,368z M160,176c-17.664,0-32-14.336-32-32s14.336-32,32-32s32,14.336,32,32S177.664,176,160,176z M224,400c-8.832,0-16-7.168-16-16c0-8.832,7.168-16,16-16c8.832,0,16,7.168,16,16C240,392.832,232.832,400,224,400z M320,400 c-17.664,0-32-14.336-32-32s14.336-32,32-32s32,14.336,32,32S337.664,400,320,400z M400,336c-8.832,0-16-7.168-16-16 c0-8.832,7.168-16,16-16c8.832,0,16,7.168,16,16C416,328.832,408.832,336,400,336z" />
          </g>
        </g>
      </svg>
    );
  },
);
