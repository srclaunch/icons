import { memo, ReactElement, SVGProps } from 'react';
export const WeatherStorm = memo(
  (props: SVGProps<SVGSVGElement>): ReactElement<SVGElement> => {
    return (
      <svg
        id="applab-icon-basic-weather-storm"
        viewBox="0 0 509.86719 509"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M 381.933594 275.546875 L 296.601562 403.546875 L 339.265625 403.546875 L 317.933594 510.214844 L 403.265625 382.214844 L 360.601562 382.214844 Z M 381.933594 275.546875 " />
        <path d="M 168.601562 275.546875 L 83.265625 403.546875 L 125.933594 403.546875 L 104.601562 510.214844 L 189.933594 382.214844 L 147.265625 382.214844 Z M 168.601562 275.546875 " />
        <path d="M 467.265625 179.546875 C 467.265625 175.28125 467.265625 171.015625 467.265625 168.882812 C 467.265625 121.949219 428.867188 83.546875 381.933594 83.546875 C 373.398438 83.546875 362.734375 85.679688 354.199219 87.816406 C 332.867188 19.546875 260.332031 -14.585938 192.066406 6.746094 C 138.734375 23.816406 104.601562 70.746094 104.601562 126.214844 C 44.867188 126.214844 0.0664062 173.148438 0.0664062 232.882812 C 0.0664062 290.480469 42.734375 337.414062 100.332031 339.546875 L 189.933594 211.546875 L 177.132812 339.546875 L 313.667969 339.546875 L 403.265625 211.546875 L 390.464844 339.546875 L 424.601562 339.546875 C 471.53125 339.546875 509.933594 301.148438 509.933594 254.214844 C 509.933594 224.347656 492.867188 194.480469 467.265625 179.546875 Z M 232.601562 318.214844 L 253.933594 232.882812 L 211.265625 232.882812 L 296.601562 126.214844 L 275.265625 211.546875 L 317.933594 211.546875 Z M 232.601562 318.214844 " />
      </svg>
    );
  },
);