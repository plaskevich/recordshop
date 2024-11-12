# RecordShop
[![Netlify Status](https://api.netlify.com/api/v1/badges/80ddb556-4829-4d99-b375-81b69d341b23/deploy-status)](https://app.netlify.com/sites/record-shop/deploys)

**RecordShop** is a web application made for managing inventory of a record store.

Visit **[record-shop.netlify.app](https://record-shop.netlify.app)** to see the deployed version

⚠️ **It make take a while on a first load (e.g. when logging in) becasue server hosting is free and is spun down after 15 min of inactivity**

## Steps to run locally:

### 1. Install dependencies
### `yarn`

### 2. Setup environment variables
In the root folder create `.env` file which should contain:
```dotenv

VITE_NODE_ENV=<prod | dev> # Use dev if you're rinning server locally
VITE_PROD_SERVER=https://recordshop-bgn8.onrender.com/graphql
VITE_DEV_SERVER=http://localhost:<PORT>/graphql
```

### 3. Run the application
### `yarn dev`

## Using the app
For testing purposes you may login with following credentials:

**Email**: `test@example.com`

**Password**: `simplepass`

## E2E Tests
In order to run the tests, the server should be running locally on `localhost:4000`

### 1. Run the app in dev mode

`yarn dev`

### 2. Run tests in headless

`yarn test:e2e`
