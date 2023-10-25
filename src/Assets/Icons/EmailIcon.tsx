import React from 'react'
import Svg, { Path } from 'react-native-svg'

const EmailIcon = () => {
    return (
        <Svg
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <Path
                stroke="#828282"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                d="M17 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5z"
            />
            <Path
                stroke="#828282"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                d="M17 9l-3.13 2.5c-1.03.82-2.72.82-3.75 0L7 9"
            />
        </Svg>
    )
}

export default EmailIcon