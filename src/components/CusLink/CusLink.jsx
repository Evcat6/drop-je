import React from 'react'
import { useMatch, Link } from 'react-router-dom'

const CusLink = ({to, children, ...props}) => {

    const match = useMatch(to)
    return ( 
        <Link
        to={to}
        {...props}
        style={{
            color: match? '#FB56E6' : 'black',
            textDecoration: 'none'
        }}
        >
            {children}
        </Link>
    );
}
 
export default CusLink;