import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
<<<<<<< HEAD


ReactDOM.render(<App />, document.getElementById('root'));

=======
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql'
})

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ ApolloProvider>
, document.getElementById('root')
);

>>>>>>> c3bb7f68b0b6a000fc3b76c5a0fe7d139a5243c7
