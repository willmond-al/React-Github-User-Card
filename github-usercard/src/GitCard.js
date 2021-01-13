import React from 'react'

class GitCard extends React.Component{

    render(){
        return(
          
          <div>
            <img width="200" src={this.props.gitUserInfo.avatar_url}/>
            <p>{this.props.gitUserInfo.name} has {this.props.gitUserInfo.followers} followers on gitHub!</p>
          </div>
        
        )
      }
}

export default GitCard