import React from 'react'
import styled from 'styled-components'

class GitForm extends React.Component{
    render(){
        return(
            <StyledForm>
                <input 
                type="text"
                placeholder="search gitHub username"
                name="text"
                onChange={this.props.handleChange}/>
                <button onClick={this.props.handleClick}>Search</button>
            </StyledForm>
        )
    }
}

const StyledForm = styled.form`

display:flex;
justify-content: center;

`

export default GitForm