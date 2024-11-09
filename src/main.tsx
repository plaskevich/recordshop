import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { store } from '@/redux/store';

import App from './App';
import config from './config';
import './index.css';

let serverLink;

if (config.nodeEnv === 'prod') serverLink = config.prodServer;
if (config.nodeEnv === 'dev') serverLink = config.devServer;

const httpLink = createHttpLink({
  uri: serverLink,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);

  root.render(
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  );
} else {
  console.error('Root container not found');
}
