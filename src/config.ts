const config = {
  nodeEnv: import.meta.env.REACT_APP_NODE_ENV,
  prodServer: import.meta.env.REACT_APP_PROD_SERVER,
  devServer: import.meta.env.REACT_APP_DEV_SERVER,
  auth0Domain: import.meta.env.REACT_APP_AUTH0_DOMAIN,
  auth0ClientId: import.meta.env.REACT_APP_AUTH0_CLIENT_ID,
};

export default config;
