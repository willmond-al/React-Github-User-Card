import React from 'react'
import styled from 'styled-components'

class GitCard extends React.Component{

    render(){
        return(
          
          <StyledCard>
            <img src={this.props.gitUserInfo.avatar_url}/>
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

img{
    width:50%;
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