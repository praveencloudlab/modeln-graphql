import React from 'react';
import { createRoot } from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';  // Ensure this path is correct
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>
);
