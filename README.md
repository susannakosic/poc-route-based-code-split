# React - Route based code splitting

This example demos routes based code split in a vite bundle. `app` is a react based application using react-dom-router to render pages. `Other page` is Lazy loaded generating a separate code chunk at build time.

## Running

First, run `yarn`, then `yarn build` and `yarn preview`. This will build and serve `app` on 3000.

- app: [127.0.0.1:3000](http://127.0.0.1:3000/)

Observe that when `Other` link is clicked, a separate code chunk is loaded.

`CTRL + C` stops server. 


## Deploy
Run `yarn deploy` to deploy to github pages.

## Live demo

[poc-route-based-code-split](https://susannakosic.github.io/poc-route-based-code-split/)