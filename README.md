# Wordpress REST API with React

In this project I practice simple transition animation in React.
I use Wordpress as my back-end rest api, custom React components on front.

## Build

```gulp serve``` serves project on localhost:3000
```gulp build``` builds the project from es6, scss and injects svg sprite

Wordpress' posts must be added from admin with custom ACF fields.
ACF fields names which I use are: short_desc, photo and description.

## Libs

I use React to sync view/user interface and Redux for global state of application.
Axios for ajax requests.
Webpack for es6 transpiling and bundle.
Greensock for javascript animation.