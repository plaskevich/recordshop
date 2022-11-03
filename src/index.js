import ApolloProvider from './ApolloProvider';
import { createRoot } from 'react-dom/client';
import './index.scss';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(ApolloProvider);
