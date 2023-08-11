import React, { FC } from 'react'

interface Props {
  className: string
}

const AlienSpaceshipMoving: FC<Props> = ({ className }) => {
  return (
    <svg
      version="1.2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 181 128"
      className={className}
    >
      <title>Alien spaceship moving fast </title>

      <style>
        {`.alien-spaceship-moving .s0 { fill: #260029 } 
	  .alien-spaceship-moving .s1 { fill: #b95f81 } 
	  .alien-spaceship-moving .s2 { fill: #5fb3b6 } `}
      </style>
      <path
        id="&lt;Compound Path&gt;"
        fill-rule="evenodd"
        className="alien-spaceship-moving s0"
        d="m86.3 94.7c-19.5 12.1-40.6 22.5-61.1 32.8-0.6 0.3-1.2-0.6-0.7-1 19.2-12.8 41-22 61.2-33.1 0.9-0.5 1.4 0.8 0.6 1.3zm-22-2.1c2.5-1.4 5.1-2.6 7.7-3.8 0.8-0.4 1.3 0.8 0.6 1.2-2.6 1.3-5.1 2.6-7.8 3.7-0.7 0.2-1.1-0.7-0.5-1.1zm6.4-12.3c-23.2 12.5-46.5 24.7-69.3 37.8-0.5 0.3-1.1-0.6-0.6-0.9 22.2-14.3 46.1-25.8 69.4-38 0.7-0.3 1.2 0.8 0.5 1.1zm-13.6 17.1c-5.8 3-11.2 7-17.3 9.5-0.7 0.3-1.1-0.7-0.5-1 5.6-3.4 11.5-6.6 17.4-9.5 0.6-0.3 1.1 0.7 0.4 1zm-5.3-20.5c5.5-3 11.5-4.8 16.8-8.3 0.6-0.4 1.3 0.5 0.7 0.9-5.2 3.5-11.2 5.9-17 8.3-0.6 0.3-1.1-0.6-0.5-0.9z"
      />
      <g id="&lt;Group&gt;" className="alien-spaceship-moving">
        <g id="&lt;Group&gt;">
          <path
            id="&lt;Path&gt;"
            className="s1"
            d="m79.9 68.6c-1 2-1.9 4.2-1.3 6.3 0.6 2.4 2.9 4 5.3 4.5 2.4 0.5 4.9 0.1 7.3-0.3 4.6-0.7 24.1-3.9 29.1-4.7 2.9-0.5 5.8-0.9 8.6-1.9 3.3-1 6.3-2.7 9.3-4.6 7.4-4.6 14.3-10.3 21-15.9 7.3-6 14.7-12.2 19.3-20.4 1.1-1.9 2-4.1 1.6-6.3-0.7-3.4-4.4-5.4-7.9-6-6.5-1.2-13.2 0.2-19.5 1.9-21.5 5.8-46.1 13.5-61.4 30.5-4.6 5.1-8.5 10.8-11.4 16.9z"
          />
          <path
            id="&lt;Path&gt;"
            className="s2"
            d="m104.2 41.7c-0.1-4.9 1.3-10 4.7-13.6 2.5-2.6 5.9-4.2 9.3-5.6 2.1-0.9 4.2-1.8 6.5-1.8 2.2 0 4.4 0.7 6.5 1.5 3.3 1.2 6.8 2.5 9.5 4.8 2.7 2.3 4.6 6 3.8 9.5-0.4 1.5-1.2 2.8-2 4.1-5.5 8-14.3 13.5-23.7 15.5-3.3 0.7-9 2.1-11.6-0.8-2.7-2.9-2.9-10-3-13.6z"
          />
        </g>
        <path
          id="&lt;Compound Path&gt;"
          fill-rule="evenodd"
          className="s0"
          d="m180.6 29.1c-12 36.6-57.2 65.7-95.6 52.8q-0.2-0.1-0.3-0.2c-0.4 0.1-0.8 0.2-1.2 0-18.2-10.1 11.3-34.7 20-40.9q0.2-0.1 0.4-0.2c0-3 0.6-6 1.6-8.7-2.4-1.1-4.9-2.2-7.5-3.2-0.2-0.1-0.4-0.3-0.5-0.5q-0.1 0.3-0.3 0.6c-0.5 0.6-1.2 1-1.9 1.1q-0.1 0-0.1 0.1c-0.8 1.2-1.6 1.1-2.7 0.7q-0.1 0-0.2 0-0.6-0.2-1.2-0.4c-0.4-0.1-0.6-0.4-0.6-0.8-0.8-0.3-1.4-0.7-1.9-1.4-0.8-1.2-0.7-2.6-0.2-3.9 1-2.2 4.2-4 6.3-2.4 0.4 0 0.8 0.1 1.1 0.4 0.9 0.9 3.4 3 2.8 4.4q-0.1 0.2-0.2 0.4 0.1 0 0.3 0c2.5 0.9 5.1 2 7.6 3.1 2.1-4.5 5.9-8.1 11.9-9.7q2.3-0.6 4.5-0.7c0-4.4-0.4-8.6-1.5-12.9q0-0.1 0-0.2-0.6 0.1-1.1 0.2c-0.5 0-1-0.3-1.1-0.8-0.5-0.3-1-0.7-1.3-1-0.6-0.7-0.9-1.6-0.6-2.5 0.5-1.6 2.4-2.6 4-2.5 0.7 0 1.4 0.4 1.9 0.9 0.3 0.1 0.5 0.4 0.5 0.7q0.3 0.6 0.3 1.2c0.2 0.5 0.3 1 0.3 1.4-0.1 0.8-0.6 1.3-1.2 1.7q0.3 0.2 0.4 0.5c1.1 4.3 1.8 8.9 1.5 13.3 4.8 0.2 9.3 1.9 13.1 4.8 2.7-2 7.4-2.6 10.4-3.4 5.5-1.3 11.2-2.3 16.8-2.4 6.9-0.1 15.9 1.7 15.3 9.6 0.2 0.2 0.3 0.4 0.2 0.8zm-61.2-26.5c-0.1 0.2-0.2 0.3-0.3 0.5 0 0.1-0.1 0.1 0.1 0.4q0.1-0.4 0.2-0.9zm2.6 0.3q0-0.1-0.1-0.2-0.2 0.3-0.5 0.4 0 0.1-0.1 0.3c-0.1 0.1-0.1 0.2-0.1 0.4 0.2-0.3 0.5-0.4 0.8-0.3q0.1 0 0.2 0.1-0.1-0.4-0.2-0.7zm56.3 22.4c-4.2-10.3-28.6-1-38.4 0.9 2.4 2.3 4.3 5.1 5.5 8.2 0.5-0.2 1.3 0.1 1.2 0.8-1.1 6.8-5.4 12.5-11 16.3q0 0.1 0 0.1c-5.4 4.3-11.8 7.2-18.2 9.6-4.6 1.6-10.5 4.1-15.5 3-6.9-1.6-1.7-8.8 2-12.1 0-0.6 0.4-1.2 1-1.3-0.6-2.7-1-5.4-1-8.1-6.7 7.5-30.4 24.9-22.1 34.5q0.1-0.1 0.3-0.1 0.6 0 1.1 0.2 0.1 0 0.1 0c0.7-0.2 1.5-0.2 2.2-0.1 14.8-1.8 29-3.5 42.6-10.2 0.7-0.4 1.2 0.7 0.5 1.1-2.9 1.7-6.1 3.2-9.4 4.5q2.8-0.7 5.6-1.4 8.9-3.9 17.4-8.5 4.4-3.6 9-6.9 0.7-0.5 1.3-1.1c-4.5 3.2-9.2 6-14.2 7.9-0.7 0.3-1.2-0.7-0.5-1.1 15.2-9.6 28.3-19.3 39.4-33.8 0.2-0.1 0.4-0.2 0.5-0.2q0.3-0.9 0.5-1.9 0-0.1 0.1-0.3zm-80.5 1.9q0 0-0.1 0 0 0 0 0.1 0.1-0.1 0.1-0.1zm9.9 24.5c0.2 0 0.5 0 0.8 0.1 3.6 2.1 7.3 3 11 2.9q1.2-0.4 2.5-0.8c0.5-0.1 0.8 0.1 1.1 0.4 9.2-1.7 17.6-9.3 21.5-18.3-4.3-7.8-11.7-14-20.6-13.9q-0.3 0-0.5 0-2.1 0-4.3 0.6c-5.4 1.3-8.8 4.5-10.7 8.4 3.1 1.6 6.1 3.3 8.9 5.2 0.6 0.4 0.1 1.5-0.6 1.1-3-1.5-6-3-9.1-4.5-2.1 5.7-1.6 12.7 0 18.8zm-13.1 26.6q-0.6 0.1-1.2 0.1 0.1 0.1 0.1 0.1 0.5-0.1 1.1-0.2zm3.4 2.5q-0.2-0.1-0.4-0.2-0.1 0-0.2 0 0.3 0.1 0.6 0.2zm0.2 0.1q-0.1-0.1-0.2-0.1 0.1 0 0.2 0.1zm20.9-5q-0.9 0.2-1.8 0.4 0.3 0 0.5 0 0.3-0.1 0.6-0.1 0.3-0.2 0.7-0.3zm-25.5-52.7q-0.4-0.1-0.7-0.1c0.2 0.1 0.4 0.3 0.5 0.4q0.1-0.2 0.2-0.3zm33.9 15.7c-0.8-2.3-0.4-4.9 1.1-6.8 1.4-1.9 5.5-3.8 7.7-2.2 0.2 0.2 0.3 0.5 0.2 0.8 3.5 0.1 5.2 4.4 4.1 7.8-0.9 3.1-4.9 5.2-8.1 4.8-2.4-0.3-4.3-2.2-5-4.4zm8.2-7q0.2 0.1 0.4 0.1 0 0 0.1 0-0.3-0.1-0.5-0.1zm-1.6-0.5q0.1 0.1 0.1 0.2 0.1 0 0.3 0 0-0.1-0.1-0.2-0.1 0-0.3 0zm-5.1 5.5q0-0.4 0-0.8c0 0.3 0 0.5 0 0.8z"
        />
      </g>
    </svg>
  )
}

export default AlienSpaceshipMoving