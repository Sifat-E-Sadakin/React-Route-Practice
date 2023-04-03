import { NavLink } from 'react-router-dom';
import './ActiveLink.css'

import React from 'react';

const ActiveLink = ({to, children}) => {
    return (
        <NavLink
                    to={to}
                    className={({ isActive, isPending }) => isActive? "active": ""
                    }
                  >
                    {children}
                    {/* other code */}
         </NavLink>
    );
};

export default ActiveLink;