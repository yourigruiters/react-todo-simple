import React from 'react'
import { NavLink } from 'react-router-dom'

import { StyledHeader, StyledUl, StyledLi } from './styles'

function Navigation() {
    return (
        <StyledHeader>
            <StyledUl>
                <NavLink to="/" exact><StyledLi>Home</StyledLi></NavLink>
                <NavLink to="/todos" exact><StyledLi>Todos</StyledLi></NavLink>
            </StyledUl>
        </StyledHeader>
    )
}

export default Navigation;