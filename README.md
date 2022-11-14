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

## Using the app
For testing purposes you may login with following credentials:

**Email**: `test@user.com`

**Password**: `simplepass`

## Project architecture
**GraphQL** is used in the project and the server is hosted on`https://recordshop-bgn8.onrender.com/graphql`.

There are two types of requests: **Mutations** and **Queries**.

**Mutations** take some data in form of variables which is used to alter data in the database.

**Queries** only return existing data in the DB, without altering it.

For example `addRecord` mutation takes `data` as params which contains record data (Title, Artist, Label, etc.) and then returns the ID of newly created record file

Additionally [Discogs API](https://www.discogs.com/developers) is used for retrieving a record data using `releaseId`, it returns data that is filled in automatically in a record form.
