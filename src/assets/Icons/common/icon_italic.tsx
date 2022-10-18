import React from 'react'
import { IconSVGProperties } from '../type'

const ItalicIcon: React.FC = (props: IconSVGProperties) => {
  const { color, width, height } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_521_91784)">
        <path
          d="M16.6667 5H9.08333C8.92862 5 8.78025 5.06146 8.67085 5.17085C8.56146 5.28025 8.5 5.42862 8.5 5.58333C8.5 5.73804 8.56146 5.88642 8.67085 5.99581C8.78025 6.10521 8.92862 6.16667 9.08333 6.16667H12.2065L10.6157 17.8333H7.33333C7.17862 17.8333 7.03025 17.8948 6.92085 18.0042C6.81146 18.1136 6.75 18.262 6.75 18.4167C6.75 18.5714 6.81146 18.7197 6.92085 18.8291C7.03025 18.9385 7.17862 19 7.33333 19H14.9167C15.0714 19 15.2197 18.9385 15.3291 18.8291C15.4385 18.7197 15.5 18.5714 15.5 18.4167C15.5 18.262 15.4385 18.1136 15.3291 18.0042C15.2197 17.8948 15.0714 17.8333 14.9167 17.8333H11.7935L13.3842 6.16667H16.6667C16.8214 6.16667 16.9697 6.10521 17.0791 5.99581C17.1885 5.88642 17.25 5.73804 17.25 5.58333C17.25 5.42862 17.1885 5.28025 17.0791 5.17085C16.9697 5.06146 16.8214 5 16.6667 5V5Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_521_91784">
          <rect width="14" height="14" fill="white" transform="translate(5 5)" />
        </clipPath>
      </defs>
    </svg>
  )
}

ItalicIcon.defaultProps = {
  color: '#4F4F4F',
  width: 24,
  height: 24
}

export default ItalicIcon
