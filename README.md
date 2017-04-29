# Vue-Element-Starter
#### Demo: https://metnew.github.io/vue-element-starter/

[![bitHound Overall Score](https://www.bithound.io/github/Metnew/vue-element-starter/badges/score.svg)](https://www.bithound.io/github/Metnew/vue-element-starter)
[![bitHound Dependencies](https://www.bithound.io/github/Metnew/vue-element-starter/badges/dependencies.svg)](https://www.bithound.io/github/Metnew/vue-element-starter/master/dependencies/npm)
[![Known Vulnerabilities](https://snyk.io/test/github/metnew/vue-element-starter/badge.svg)](https://snyk.io/test/github/metnew/vue-element-starter)
## Includes:

- [Element](http://element.eleme.io/#/en-US) and normalize.css
- [Vue -v 2.1](https://vuejs.org/) & Vue-router
- [Vuex](https://github.com/vuejs/vuex) & Vuex-router-sync
- [Fetch polyfill](https://www.npmjs.com/package/whatwg-fetch)
- [Webpack](https://webpack.github.io/)
- [TestCafe](https://testcafe.devexpress.com/) for testing
- Eslint, Babel (stage-0)

## Out-of-box:
### (theme color is purple, but you can use your own color, more info below)

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
│   ├── app.js - import dependencies and App component
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
 git clone https://github.com/Metnew/vue-element-starter.git vue-project  
 cd vue-project && rm -rf .git
 npm install
 npm run generate_default_styles # run this command to generate default_styles for Element-theme
```

[Element-theme](https://www.npmjs.com/package/element-theme) generates default styles. Just **change primary-color** in `./client/element-variables.css` and run:

```bash
 npm run generate_theme
```

Now app is ready and you can run it with:

```bash
 npm run dev
```

Make production build:

```bash
 npm run build
```

### Also
PRs, issues, questions, \<something-another> are always welcome.     
Feel free to contact me (or add new issue).

### Author
Vladimir Metnew <vladimirmetnew@gmail.com>

### LICENSE
MIT
