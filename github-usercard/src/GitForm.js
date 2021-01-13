import React from 'react'

class GitForm extends React.Component{
    render(){
        return(
            <form>
                <input 
                type="text"
                placeholder="search gitHub username"
                name="text"
                onChange={this.props.handleChange}/>
                <button onClick={this.props.handleClick}>Search</button>
            </form>
        )
    }
}

export default GitForm