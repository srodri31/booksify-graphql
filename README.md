# booksify-graphql

## First steps

- Needs to have postgresql intalled on you computer
- Needs to have a database called "booksify" (you can change this later if you want)
- Needs node and npm
- Clone the repo
- Install the dependencies 
```
  npm install
```
- Update your db user credentials in src/config/knexfile.js

## Run the app

1. Run db migration to create initial tables
```
  npm run db:migrate
```
2. Run db seed to create inital records (for now only library)
```
  npm run db:migrate
```
3. Start the dev server (hot reload using nodemon)
```
  npm run start:dev
```
