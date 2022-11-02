import ApolloProvider from './ApolloProvider';
import { createRoot } from 'react-dom/client';
import './index.scss';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(ApolloProvider);
