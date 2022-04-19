import * as React from 'react'
import { SVGProps } from 'react'

const SvgMoon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.254 4.395a7.665 7.665 0 0 0-6.93 7.617 7.664 7.664 0 0 0 7.665 7.664 7.664 7.664 0 0 0 7.61-6.86 5.99 5.99 0 0 1-3.598 1.21 5.992 5.992 0 0 1-5.991-5.991 5.993 5.993 0 0 1 1.244-3.64z"
      fill="none"
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={0.649}
      style={{
        strokeWidth: 1,
        strokeMiterlimit: 4,
        strokeDasharray: 'none',
      }}
    />
  </svg>
)

export default SvgMoon
