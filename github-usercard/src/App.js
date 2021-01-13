import logo from './logo.svg';
import React from 'react'
import axios from 'axios'
import './App.css';

class App extends React.Component{

  state ={
    gitUserInfo: [],
    gitUser: "willmond-al"
  }

  componentDidMount(){
    axios
    .get(`https://api.github.com/users/willmond-al`)
    .then(res =>{
      this.setState({
        gitUserInfo: res.data
      })
    })
    .catch(err=>{
      console.log(err)
    })
  }

  render(){
    return(
      <div>
      <h1>GitHub User Card</h1>
    <p>{this.state.gitUserInfo.name} has {this.state.gitUserInfo.followers} followers on gitHub!</p>
    </div>
    )
  }

}

export default App;
