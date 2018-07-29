import React from 'react'
import ReactDOM from 'react-dom'
// import {Provider} from 'react-redux'
// import {Router} from 'react-router-dom'
// import history from './history'
import client from './apolloClient'
//import store from './store'

import App from './app'

//Connecting to apollo component tree
import { ApolloProvider } from 'react-apollo';

// establishes socket connection
import './socket'



ReactDOM.render(
    <ApolloProvider client={client}>    
        <App />
    </ApolloProvider>,
  document.getElementById('app')
)
