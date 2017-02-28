# King Framework

### Warning!

This is in alpha! We are using stable technologies, but the King CLI and King Framework itself is quite young.

### Description
King is a web framework for Node that allows for building scalable applications with modern JavaScript technologies. TypeScript allows us to employ design patterns and concepts such as Inversion of Control and Dependency Injection, as well method decorators to simplify or eliminate boilerplate code. A core belief behind the creation of King is to stand on the shoulders of giants: use strong, existing libraries and technologies to create the framework we want. Taking inspirations from frameworks like ASP.NET Core, NodeJS, and Laravel, King is built to appeal to developers of a variety of backgrounds.

### Technologies
King is made up of 3 core JavaScript technologies: [Express](https://github.com/expressjs/express), [InversifyJS](https://github.com/inversify/InversifyJS), and [TypeScript](https://github.com/Microsoft/TypeScript).

* **Express**: Express the most popular web framework platform for the Node environment and is used in production by some of the largest companies in the world. 
* **InversifyJS**: InversifyJS is a powerful and lightweight inversion of control container for JavaScript & Node.js apps powered by TypeScript. We use [InversifyJS](https://github.com/inversify/InversifyJS), [Express Utils](https://github.com/inversify/inversify-express-utils), and [Binding Decorators](https://github.com/inversify/inversify-binding-decorators).
* **TypeScript**: TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.

### Getting started

The recommended way to get started is to first install [king-cli](https://github.com/KerryRitter/king-cli) globally. After the CLI is installed, in a new folder, run the following commands:

1. `king create my-app`
2. `king dev`

You now have an Express server at http://localhost:8080. All changes made will restart the Express server automatically.

You can use the CLI commands in your NPM scripts to serve your applications, or simply run `node dist/app.js`.

### App structure

* `/app/` - Your server code. All of your TypeScript files here will be compiled. Except for `app.ts` and `tsconfig.json`, you may organize your app in this folder as you wish, but the convention below is as follows:
    * `/controllers/` - Your controller classes.
    * `/services/` - Your services classes.
    * `/views/` - Your EJS views (currently only EJS is supported)
    * `/app.ts` - This is your bootstrapping class. This app starts the Express server.
    * `/tsconfig.ts` - This is the TypeScript configuration for the app folder (this should not conflict with a tsconfig elsewhere in the project).
* `/dist/` - The compiled `/app/` output. Do not edit files here - they will be overwritten.
* `/public/` - The root of public assets. This folder itself is not exposed as static files by Express, but the listed subfolders are.
    * `/images/` - Publicly accessible images, located at `http://myapp/images/`.
    * `/scripts/` - Publicly accessible scripts, located at `http://myapp/scripts/`.
    * `/styles/` - Publicly accessible styles, located at `http://myapp/styles/`.
    * `/assets/` - Publicly accessible assets (i.e. any file other than images, scripts, styles, and fonts), located at `http://myapp/assets/`.
    * `/fonts/` - Publicly accessible fonts, located at `http://myapp/fonts/`.

### Front-end

King has no opinion on the front-end development. All compiled assets in the designated public folder are open to be used by the Express app - how they get there is up to you.

### Contribute

I am looking for developers to help build out this project! If you're interested, please contact me at ritter@kerryritter.com.