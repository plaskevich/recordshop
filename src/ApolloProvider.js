import App from './App';
import config from './config';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import store from 'redux/store';
import { Provider } from 'react-redux';

let serverLink;

if (config.nodeEnv === 'production') serverLink = config.prodServer;
if (config.nodeEnv === 'development') serverLink = config.devServer;

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
export default (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>
);
