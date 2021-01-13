import logo from './logo.svg';
import React from 'react'
import axios from 'axios'
import GitCard from './GitCard'
import './App.css';

class App extends React.Component{

  state ={
    gitUserInfo: [],
    gitUser: ""
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
     <GitCard gitUserInfo={this.state.gitUserInfo}/>
    </div>
    )
  }

}

export default App;
