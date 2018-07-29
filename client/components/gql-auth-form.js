import React, {Component} from 'react'
import { graphql, compose } from 'react-apollo'

import {login} from '../queries'

/**
 * COMPONENT
 */
class GqlLogin extends Component {
 
  constructor(props){
    super(props)
    this.state= {
      username:"",
      password:""
    }
    this.onSubmit = this.onSubmit.bind(this)
  }

    onSubmit(event){
      event.preventDefault()
      //mutation -> variables
      this.props.currentUser({
        variables:{
          username:this.state.username,
          password:this.state.password
        }
      })
      
    }

 render() {
   console.log(this.props)
   return (
    <div>
      <form onSubmit={this.onSubmit} name={name}>
        <div>
          <label htmlFor="username"><small>username</small></label>
          <input name="username" type="text" onChange={(event)=>this.setState({username:event.target.value})}/>
        </div>
        <div>
          <label htmlFor="password"><small>Password</small></label>
          <input name="password" type="password" onChange={(event)=>this.setState({password:event.target.value})}/>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )}
}

export default graphql(login, {name:"currentUser"})(GqlLogin)


