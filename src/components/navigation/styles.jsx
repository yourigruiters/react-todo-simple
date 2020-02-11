
import Styled from 'styled-components'

export const StyledHeader = Styled.header`
    display: flex;
    width: 100%;
    height: 75px;
    background-color: #000000;
    color: white;

    & a {
        color: white;
        
        &:hover {
            font-weight: bold;
        }
    }
    
    & .active {
        font-weight: bold;
    }
`

export const StyledUl = Styled.ul`
    display: flex;
    width: 100%;
    height: auto;

    @media (max-width: 550px) {
        justify-content: space-around;
    }
`

export const StyledLi = Styled.li`
    display: inline-block;
    font-size: 18px;
    border-radius: 50px;
    background-color: #9FCC2E;
    padding: 0px 35px;
    line-height: 36px;
    margin-top: 19px;
    margin-right: 30px;
    margin-left: 20px;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;

    &:hover {
        background-color: #C1DE7A;
    }
`