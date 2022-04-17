import * as React from 'react'
import { SVGProps } from 'react'

const SvgSun = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.349 6.349 3.765 3.765M12 4.008V.354M4.008 12H.354m5.995 5.652-2.584 2.583M12 19.992v3.654m5.651-17.297 2.584-2.583M17.65 17.651l2.584 2.583M19.992 12h3.654m-6.55 0a5.09 5.09 0 0 1-5.091 5.09A5.09 5.09 0 0 1 6.914 12a5.09 5.09 0 0 1 5.09-5.09A5.09 5.09 0 0 1 17.096 12z"
      fill="none"
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={0.709}
    />
  </svg>
)

export default SvgSun
