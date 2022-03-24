import { memo, ReactElement, SVGProps } from 'react';
export const Safe = memo(
  (props: SVGProps<SVGSVGElement>): ReactElement<SVGElement> => {
    return (
      <svg
        id="applab-icon-basic-safe"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="m492 0h-472c-11.046 0-20 8.954-20 20v432c0 11.046 8.954 20 20 20h60v20c0 11.046 8.954 20 20 20s20-8.954 20-20v-20h272v20c0 11.046 8.954 20 20 20s20-8.954 20-20v-20h60c11.046 0 20-8.954 20-20v-432c0-11.046-8.954-20-20-20zm-452 201.333h40v69.333h-40zm432 230.667h-432v-121.333h40v61.333c0 11.046 8.954 20 20 20h312c11.046 0 20-8.954 20-20v-272c0-11.046-8.954-20-20-20h-312c-11.046 0-20 8.954-20 20v61.333h-40v-121.333h432zm-352-80v-232h272v232zm136-176c-33.084 0-60 26.916-60 60s26.916 60 60 60 60-26.916 60-60-26.916-60-60-60zm0 80c-11.028 0-20-8.972-20-20s8.972-20 20-20 20 8.972 20 20-8.972 20-20 20z" />
      </svg>
    );
  },
);