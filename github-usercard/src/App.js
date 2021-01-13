import logo from './logo.svg';
import React from 'react'
import axios from 'axios'
import GitCard from './GitCard'
import GitForm from './GitForm'
import './App.css';

class App extends React.Component{

  state ={
    gitUserInfo: [],
    gitUser: "willmond-al"
  }

  componentDidMount(){
    axios
    .get(`https://api.github.com/users/${this.state.gitUser}`)
    .then(res =>{
      this.setState({
        gitUserInfo: res.data
      })
    })
    .catch(err=>{
      console.log(err)
    })
  }

handleChange = evt =>{
  this.setState({
    gitUser: evt.target.value
  })
}

handleClick = evt =>{
  evt.preventDefault()
  axios
  .get(`https://api.github.com/users/${this.state.gitUser}`)
  .then(res=>{
    this.setState({
      gitUserInfo: res.data
    })
  })
}

  render(){
    return(
      <div>
        <h1>GitHub User Card</h1>
        <GitForm handleChange={this.handleChange} handleClick={this.handleClick}/>
     <GitCard gitUserInfo={this.state.gitUserInfo}/>
    </div>
    )
  }

}

export default App;
