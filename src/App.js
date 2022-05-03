import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import 'antd/dist/antd.css'; 
import './App.css';

import Wrapper from './components/Wrapper/Index'

const client = new ApolloClient({
    headers: {
      "content-type": "application/json",
      "x-hasura-admin-secret": process.env.REACT_APP_HASURA_ADMIN_SECRET
    },
  uri: process.env.REACT_APP_URL
});

function App() { 
  return (
    <div className="App">
      <BrowserRouter>
        <ApolloProvider client={client}> 
          <Wrapper />
        </ApolloProvider>
        </BrowserRouter>
    </div>
  );
}


export default App;
