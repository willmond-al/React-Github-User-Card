import React from 'react'
import styled from 'styled-components'

class GitCard extends React.Component{

    render(){
        return(
          
          <StyledCard>
            <img alt={this.props.gitUserInfo.name} src={this.props.gitUserInfo.avatar_url}/>
            <p><span>{this.props.gitUserInfo.name}</span> has <span>{this.props.gitUserInfo.followers}</span> followers on gitHub!</p>
          </StyledCard>
        
        )
      }
}

const StyledCard = styled.div`

background:aqua;
display:flex;
flex-wrap:nowrap;
justify-content:center;
width: 40%;
margin: 2% auto 0;
border-radius:20px;

img{
    width:50%;
    border-radius:20px;
}

p{
    padding: 4%;
    margin: auto auto;

}

span{
    font-weight: bold;
}

`

export default GitCard