import * as React from 'react'
import { SVGProps } from 'react'

const SvgAudioOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill="none" stroke={props.color} strokeLinecap="round">
      <g strokeLinejoin="round">
        <path d="M12.107 7.865V4.36l-1.752 1.754M8.234 8.234l-.908.91H3.499v5.74h3.827l4.781 4.786v-7.563zM19.734 15.492a8.367 8.367 0 0 0 .766-3.482A8.393 8.393 0 0 0 13.84 3.8m0 16.399a8.37 8.37 0 0 0 4.14-2.22M16.16 11.918a4.053 4.053 0 0 0-2.318-3.57m0 7.308c.402-.19.765-.44 1.076-.738" />
      </g>
      <path d="m3.354 3.354 17.292 17.292" />
    </g>
  </svg>
)

export default SvgAudioOff
