import Styled from 'styled-components';

export const StyledArea = Styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    min-height: calc(85vh - 75px);
    height: auto;
    background-color: #171717;
    color: white;
`

export const StyledContainer = Styled.div`
    flex-direction: row;
    width: 100%;
    max-width: 760px;
    padding: 0px 20px;
    height: auto;
`
export const StyledTodoList = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    min-height: 20px;
    max-height: 100%;
    height: auto;
    margin-top: 50px;
    margin-bottom: 50px;
    padding: 10px 30px;
    background-color: #2E2E2E;
    border-radius: 80px;
    box-sizing: border-box;
`

export const StyledTitle = Styled.h2`
    padding-top: 40px;
    font-size: 80px;
    text-indent: 55px;
    color: white;
`