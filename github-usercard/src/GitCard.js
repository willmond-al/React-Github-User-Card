import React from 'react'

class GitCard extends React.Component{

    render(){
        return(
          <div>
          <h1>GitHub User Card</h1>
        <p>{this.props.gitUserInfo.name} has {this.props.gitUserInfo.followers} followers on gitHub!</p>
        </div>
        )
      }
}

export default GitCard