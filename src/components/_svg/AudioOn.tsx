import * as React from 'react'
import { SVGProps } from 'react'

const SvgAudioOn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      fill="none"
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3.5 14.885V9.144h3.825l4.782-4.785v15.31l-4.782-4.784zM13.842 20.199a8.392 8.392 0 0 0 6.658-8.19 8.393 8.393 0 0 0-6.658-8.208" />
      <path d="M13.842 15.657a4.055 4.055 0 0 0 2.321-3.648 4.055 4.055 0 0 0-2.321-3.663" />
    </g>
  </svg>
)

export default SvgAudioOn
