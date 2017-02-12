# Vue-Element-Starter

## Includes:

- [Element](http://element.eleme.io/#/en-US) and normalize.css
- [Vue](https://vuejs.org/) & Vue-router
- [Vuex](https://github.com/vuejs/vuex) & Vuex-router-sync
- [Fetch polyfill](https://www.npmjs.com/package/whatwg-fetch)
- [Webpack](https://webpack.github.io/)
- [TestCafe](https://testcafe.devexpress.com/) for testing

## Out-of-box (themes color is purple, but you can use your own color, more info below):

![](https://github.com/Metnew/vue-element-starter/blob/gh-pages/screen.gif?raw=true)

## Folder structure:

```
app
├── build // webpack config files
├── client - Your App
│   └── components - your components
│   ├── router - routing
│   ├── store - Vuex store
│   ├── styles - styles folder with scss vars, mixins, etc.
│   ├── views - your pages
│   ├── app.js - import deps and App component
│   ├── index.js - main file
│   ├── pwa.js - for PWA apps
├── dist - build.
├── static - static assets, etc.
├── tests - Your tests
├── theme - Element UI generated theme
```

Template built based on [Vuepack bolirplate](https://github.com/egoist/vuepack)

## To start:

```bash
$ npm install
$ npm run generate_default_styles
```

[Element-theme](https://www.npmjs.com/package/element-theme) will generate default styles. Just **change primary-color** in `./client/element-variables.css` and run:

```bash
$ npm run generate_theme
```

Now app is ready and you can run it with:

```bash
$ npm run dev
```

Make production build:

```bash
$ npm run build
```

Lint your code:

```bash
$ npm run lint
```
