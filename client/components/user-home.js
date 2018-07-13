import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import ExpenseForm from './ExpenseForm'


/**
 * COMPONENT
 */
export const UserHome = (props) => {
  const {email, userId, expenses} = props
  console.log(expenses.length)
  return (
    <div>
      <h3>Welcome, {email}</h3>
      <ExpenseForm userId={userId}/>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
