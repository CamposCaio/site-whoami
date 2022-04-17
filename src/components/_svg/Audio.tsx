import * as React from 'react'
import { SVGProps } from 'react'

const SvgAudio = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill="none" stroke={props.color} strokeWidth={0.65}>
      <g strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.077 15.315V8.696h4.41L12 3.18v17.65l-5.513-5.515zM14 21.441A9.675 9.675 0 0 0 21.676 12 9.675 9.675 0 0 0 14 2.537" />
        <path d="M14 16.205A4.675 4.675 0 0 0 16.676 12 4.675 4.675 0 0 0 14 7.777" />
      </g>
      <path d="M-18.675-18.674-.23-.229" />
    </g>
  </svg>
)

export default SvgAudio
