import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { graphql } from 'react-apollo'
import {getAuthorsQuery} from '../queries'

class AddBook extends Component {
  constructor(props){
    super(props)
    this.state= {
      title:"",
      authorId:"",
      genre:""
    }
    this.onSubmit = this.onSubmit.bind(this)
  }

  displayAuthors(){
    let data = this.props.data
    if(data.loading){
      return( <option disabled>Loading authors...</option> )
    } else {
      return data.authors.map(author =>
          <option key={ author.id } value={author.id}>{ author.name }</option>
      )
    }
  }
  
  onSubmit(event){
    event.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <form id="add-book" onSubmit={this.onSubmit}>

        <div className="field">
          <label>Book Name:</label>
          <input type="text" onChange={(event)=>this.setState({title:event.target.value})}/>
        </div>

        <div className="field">
          <label>Genre:</label>
          <input type="text" onChange={(event)=>this.setState({genre:event.target.value})}/>
        </div>

        <div className="field">
          <label>Author:</label>
          <select onChange={(event)=>this.setState({authorId:event.target.value})}>
            <option>Select author</option>
            {this.displayAuthors()}
          </select>
        </div>

        <button>+</button>

      </form>
    )
  }
}

export default graphql(getAuthorsQuery)(AddBook)
//note you can also give it a name, ex: getBooksQuery,{name: "getBooksQuery"} -> this.props.getBooksQuery