import Styled from 'styled-components';

export const StyledArea = Styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    min-height: 15vh;
    height: auto;
    background-color: #2E2E2E;
    color: white;
`

export const StyledContainer = Styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-width: 760px;
    padding: 0px 20px;
    height: auto;
`

export const StyledForm = Styled.form`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: auto;
`

export const StyledError = Styled.p`
    padding-top: 10px;
    color: #b31957;
    padding-left: 30px;
`

export const StyledInput = Styled.input`
    width: 75%;
    height: 40px;
    border-radius: 80px;
    box-sizing: border-box;
    text-indent: 30px;
    font-size: 14px;
    border: ${props => props.error ? "2px solid #b31957" : "none"};


    &:focus {
        outline: none;
    }
`

export const StyledButton = Styled.button`
    width: 20%;
    height: 40px;
    background-color: #750D37;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 16px;
    transition: all 0.5s;
    border-radius: 80px;

    &:hover {
        background-color: #600B2E;
    }

    &:focus {
        outline: none;
    }
`

