import { memo, ReactElement, SVGProps } from 'react';
export const PeopleLiftWorld = memo(
  (props: SVGProps<SVGSVGElement>): ReactElement<SVGElement> => {
    return (
      <svg
        enableBackground="new 0 0 512 512"
        id="applab-icon-basic-people-lift-world"
        height="512"
        viewBox="0 0 512 512"
        width="512"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g>
          <path d="m181 391h-60c-33.091 0-61-26.909-61-60v-15c0-24.853-20.147-45-45-45h-15v60c0 66.167 54.833 120 121 120v61h120v-61c0-33.091-26.909-60-60-60z" />
          <path d="m451 316v15c0 33.091-26.909 60-60 60h-60c-33.091 0-60 26.909-60 60v61h120v-61c66.167 0 121-53.833 121-120v-60h-15c-24.853 0-46 20.147-46 45z" />
          <circle cx="181" cy="346" r="45" />
          <circle cx="331" cy="346" r="45" />
          <path d="m226 61c8.276 0 15-6.724 15-15v-46c-84.086 7.588-150 79.937-150 166 0 15.626 2.331 30.677 6.394 45h38.606c8.276 0 15-6.724 15-15v-15h75c8.276 0 15-6.724 15-15s-6.724-15-15-15c-24.814 0-45-20.186-45-45s20.186-45 45-45z" />
          <path d="m376 211h38.606c4.063-14.323 6.394-29.374 6.394-45 0-5.063-.309-10.052-.756-15h-74.244c-8.276 0-15 6.724-15 15s6.724 15 15 15h15v15c0 8.276 6.724 15 15 15z" />
          <path d="m331 271c15.126 0 29.169 4.581 40.964 12.316 12.431-12.288 22.784-26.614 30.833-42.316h-26.797c-20.273 0-37.456-13.477-43.066-31.934-18.457-5.61-31.934-22.793-31.934-43.066 0-24.814 20.186-45 45-45h68.628c-18.292-64.579-74.804-114.789-143.628-121v46c0 24.814-20.186 45-45 45-8.276 0-15 6.724-15 15s6.724 15 15 15c24.814 0 45 20.186 45 45s-20.186 45-45 45h-47.563c-6.196 17.461-22.881 30-42.437 30h-26.797c8.049 15.701 18.402 30.027 30.833 42.316 11.795-7.735 25.838-12.316 40.964-12.316 36.189 0 66.475 25.772 73.475 59.923.515.005 1.011.077 1.525.077s1.011-.071 1.525-.077c7-34.151 37.286-59.923 73.475-59.923z" />
        </g>
      </svg>
    );
  },
);
