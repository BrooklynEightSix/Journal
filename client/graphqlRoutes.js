// import React, {Component} from 'react'
// import {withRouter, Route, Switch} from 'react-router-dom'
// import {Login, Signup, UserHome, GqlLogin} from './components'

// import { graphql, compose } from 'react-apollo'
// import { getUserQuery } from './queries';

// class graphqlRoutes extends Component {
  
//   componentDidMount () {
//     //load data from mongodb/graphql query
//   }
//   render () {
//     const {currentUser} = this.props
//     return (
//       <Switch>
//         {/* graphqlRoutes placed here are available to all visitors */}
//         <Route path="/login" component={GqlLogin} />
//         <Route path="/signup" component={Signup} />
//         {
//           currentUser &&
//             <Switch>
//               {/* graphqlRoutes placed here are only available after logging in */}
//               <Route path="/home" render={userId=><UserHome {...this.props}/>} />
//             </Switch>
//         }
//         {/* Displays our GqlLogin component as a fallback */}
//         <Route component={GqlLogin} />
//       </Switch>
//     )
//   }
// }

// // The `withRouter` wrapper makes sure that updates are not blocked
// // when the url changes
// //const gqlWithRouter = withRouter(graphqlRoutes)

// export default withRouter(graphqlRoutes)
