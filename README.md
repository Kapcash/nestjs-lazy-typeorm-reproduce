
## Description

This repository aims to reproduce a problem I have with lazy-loading a Module requiring TypeORM connection providers.

While registring the `ProductModule` within the `AppModule`, the connections works fine and the endpoint creates new entities successfully.
But when lazy loading the `ProductModule`, the endpoints triggers some errors, complaining the `Connection` providers are not supplied.

I'm not sure how the TypeORM modules providers the Connection / Repositories providers, hence I'm a bit lost on how to debug this.
I suppose I have to manually fetch / lazy-load something more than my `ProductModule` for this to work?

> Note: I'm trying to lazy-load this because I'm creating serverless functions and I want to be able to lazy-load the db connection.

## Reproduce in local

We need a local database to allow the TypeORM connections to work.
I've setup a docker-compose with a mysql image.

```bash
$ docker-compose up
$ yarn start:debug
```

Then hit `http://localhost:3000` in the browser (or wherever you like) to trigger the endpoint.
