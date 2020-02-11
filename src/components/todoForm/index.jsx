import React, { Component, Fragment } from 'react'
import { StyledArea, StyledContainer, StyledForm, StyledInput, StyledButton, StyledError } from './styles'

class TodoForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "",
            error: "" 
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if(this.state.text === "" || !this.state.text.replace(/\s/g, '').length) {
            this.setState({
                error: "Please enter a todo..."
            })
            return;
        }

        const todo = {
            title: this.state.text
        }

        this.props.addTodo(todo);

        this.setState({
            text: "",
            error: ""
        })
    }

    render() {
        const error = this.state.error !== "" ? true : false ;

        return (
            <Fragment>
                <StyledArea>
                    <StyledContainer>
                        <StyledForm onSubmit={this.handleSubmit}>
                            <StyledInput type="text" value={this.state.text} name="text" onChange={this.handleChange} error={error} />
                            <StyledButton>Add todo</StyledButton>    
                        </StyledForm>
                            { error ? <StyledError>{this.state.error}</StyledError> : false }
                    </StyledContainer>
                </StyledArea>
            </Fragment>
        )
    }
}


export default TodoForm;