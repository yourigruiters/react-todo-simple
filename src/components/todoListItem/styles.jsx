import Styled from 'styled-components';

export const StyledRow = Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: auto;
    padding: 10px 30px;
`

export const StyledTodoListItem = Styled.p`
    cursor: pointer;
    color: ${props => props.finished ? "#aaa" : "white"};
    text-decoration: ${props => props.finished ? "line-through" : "none"};
    width: 100%;
    margin-left: 25px;

    &:hover {
        text-decoration: ${props => props.finished ? "none" : "line-through"};
        color: ${props => props.finished ? "#9FCC2E" : "#750D37"};
    }
`
export const StyledDeleteIcon = Styled.i`
    width: 20px;
    height: 20px;
    cursor: pointer;
    transition: 0.5s all;

    &:hover {
        transform: rotate(25deg);
        color: #750D37;
    }
`
