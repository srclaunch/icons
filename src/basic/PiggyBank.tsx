import { memo, ReactElement, SVGProps } from 'react';
export const PiggyBank = memo(
  (props: SVGProps<SVGSVGElement>): ReactElement<SVGElement> => {
    return (
      <svg
        id="applab-icon-basic-piggy-bank"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g>
          <g>
            <circle cx="379" cy="264" r="20" />
          </g>
        </g>
        <g>
          <g>
            <path d="M492,259c-12.89,0-21.853-1.826-25.238-5.141c-3.121-3.057-5.129-10.567-7.455-19.265l-0.219-0.818 c-1.437-5.365-2.551-10.641-3.629-15.742c-3.318-15.703-6.731-31.857-18.891-46.141c2.671-21.221,12.427-54.316,16.453-66.71 L461.532,79H434c-23.962,0-46.463,8.396-65.07,24.278c-8.428,7.194-15.019,15.028-19.909,21.872 c-2.101-0.423-4.269-0.817-6.465-1.198c2.972-9.301,4.51-19.057,4.51-28.952c0-52.383-42.617-95-95-95s-95,42.617-95,95 c0,14.159,3.148,28.032,9.151,40.69c-14.984,6.208-28.576,14.007-40.551,23.339C90.521,186.418,70.561,225.975,67.443,274h-8.11 c-0.051,0-5.619-0.253-10.723-2.806c-4.257-2.129-8.61-5.756-8.61-16.527c0-10.43,3.929-14.027,7.772-16.171 c4.418-2.463,9.782-3.12,11.476-3.165L59,235.333v-40c-2.422,0-15.182,0.34-28.505,7.059C10.83,212.309,0,230.873,0,254.667 c0,23.823,10.911,42.399,30.723,52.305c13.378,6.689,26.18,7.028,28.61,7.028h9.664c5.449,36.293,21.807,69.877,45.624,92.709 L127.256,512H221v-61.296c12.745,2.133,26.031,3.296,42.867,3.296c7.888,0,15.574-0.245,23.032-0.504L294.401,512H387v-66.521 c50.959-12.498,93.082-47.194,122.558-101.234l2.442-4.478V259H492z M252.067,40c30.327,0,55,24.673,55,55 c0,8.472-1.937,16.761-5.632,24.27c-13.161-0.883-26.142-1.27-37.568-1.27c-20.772,0-40.415,1.958-58.67,5.789 c-5.317-8.633-8.13-18.577-8.13-28.789C197.067,64.673,221.74,40,252.067,40z M472,329.46L472,329.46 c-26.614,46.479-62.875,73.302-107.836,79.742L347,411.661V472h-17.401l-7.611-59.354l-17.914,0.318 c-5.495,0.098-11.093,0.294-16.506,0.483C279.81,413.72,271.786,414,263.867,414c-23.866,0-38.271-2.495-58.042-7.409L181,400.42 V472h-18.256l-10.246-85.378l-6.068-5.085C122.108,361.156,107,325.11,107,287.467C107,206.398,165.642,158,263.867,158 c26.966,0,66.349,2.394,88.596,9.14l15.652,4.746l7.758-14.398c4.147-7.696,13.563-22.179,29.331-31.017 c-4.495,17.307-8.898,37.707-9.291,52.401l-0.253,9.467l7.164,6.195c7.95,6.875,9.99,15.163,13.499,31.771 c1.131,5.353,2.414,11.42,4.125,17.815l0.217,0.811c3.522,13.169,7.165,26.787,18.108,37.505 c8.123,7.956,18.909,12.919,33.227,15.16V329.46z" />
          </g>
        </g>
      </svg>
    );
  },
);
