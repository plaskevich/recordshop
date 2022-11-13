# RecordShop
[![Netlify Status](https://api.netlify.com/api/v1/badges/80ddb556-4829-4d99-b375-81b69d341b23/deploy-status)](https://app.netlify.com/sites/record-shop/deploys)

**RecordShop** is a web application made for managing inventory of a record store.

Visit **[record-shop.netlify.app](https://record-shop.netlify.app)** to see the deployed version

## Steps to run locally:

### 1. Install dependencies
### `yarn`

### 2. Setup environment variables
In the root folder create `.env` file which should contain:
```
REACT_APP_NODE_ENV=development
REACT_APP_PROD_SERVER=https://recordshop-lymf.onrender.com/graphql
REACT_APP_DEV_SERVER=http://localhost:4000/graphql
```

### 3. Run the application
### `yarn start`
