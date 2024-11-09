const config = {
  nodeEnv: import.meta.env.VITE_NODE_ENV,
  prodServer: import.meta.env.VITE_PROD_SERVER,
  devServer: import.meta.env.VITE_DEV_SERVER,
  auth0Domain: import.meta.env.VITE_AUTH0_DOMAIN,
  auth0ClientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
};

export default config;
