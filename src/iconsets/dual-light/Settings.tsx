import { memo, ReactElement, SVGProps } from 'react';

export const Settings = memo((props: SVGProps<SVGSVGElement>): ReactElement => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M7.992 4.787c.504-.28.92-.71 1.102-1.257l.388-1.162A2 2 0 0111.379 1h1.242a2 2 0 011.897 1.368l.388 1.162c.182.547.598.977 1.102 1.257.078.044.155.089.232.135.495.297 1.076.442 1.641.327l1.202-.246a2 2 0 012.133.96l.62 1.075a2 2 0 01-.235 2.327l-.815.919c-.382.43-.547 1.005-.538 1.58.002.09.002.181 0 .272-.009.575.156 1.15.538 1.58l.815.92a2 2 0 01.236 2.326l-.621 1.076a2 2 0 01-2.133.96l-1.202-.247c-.565-.115-1.146.03-1.64.327a8.36 8.36 0 01-.233.135c-.504.28-.92.71-1.102 1.257l-.388 1.163A2 2 0 0112.621 23h-1.242a2 2 0 01-1.897-1.367l-.388-1.163c-.182-.547-.598-.977-1.102-1.257a8.377 8.377 0 01-.232-.135c-.495-.297-1.076-.442-1.641-.327l-1.202.246a2 2 0 01-2.133-.96l-.62-1.075a2 2 0 01.235-2.327l.815-.919c.382-.43.547-1.005.538-1.58a8.566 8.566 0 010-.272c.009-.575-.156-1.15-.538-1.58l-.815-.92a2 2 0 01-.236-2.326l.621-1.076a2 2 0 012.133-.96l1.202.247c.565.115 1.146-.03 1.64-.327a8.21 8.21 0 01.233-.135z"
        fill="url(#prefix__paint0_linear)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 15a3 3 0 100-6 3 3 0 000 6z"
        fill="url(#prefix__paint1_linear)"
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear"
          x1={12}
          y1={1}
          x2={12}
          y2={23}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#D1DAEE" />
        </linearGradient>
        <linearGradient
          id="prefix__paint1_linear"
          x1={12}
          y1={9}
          x2={12}
          y2={15}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6073D8" />
          <stop offset={1} stopColor="#5C5ACA" />
        </linearGradient>
      </defs>
    </svg>
  );
});
