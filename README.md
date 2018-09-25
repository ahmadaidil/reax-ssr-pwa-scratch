# React SSR & PWA build from scratch

## Some stack and credit
* [React 16](https://github.com/facebook/react)
* [React Router 4](https://github.com/ReactTraining/react-router)
* [Webpack 4](https://github.com/webpack/webpack)
* [Express 4](https://github.com/expressjs/express)
* [Babel 7](https://github.com/babel/babel)
* [react-helmet-async](https://github.com/staylor/react-helmet-async)

## Support features
- [x] SSR
- [x] SEO
- [ ] PWA
- [ ] SASS
- [ ] [Loaders](https://webpack.js.org/loaders/)
---

*Eslint*
* *Custom*, based on my preference code style and still looking for the best config

---

Install dep
```terminal
$ npm i
```
or *optional but recommended*
```terminal
$ yarn
```
---

Default development start
```terminal
$ yarn start
```

---

Default production start
```terminal
$ yarn start:prod
```

---
Docker production build
```terminal
$ docker build -t <your-image-name> .
```

---
ENV Variable
* **PORT**: for production and server port
* **DEV_PORT**: for development port
* **NODE_ENV**: *development* or *production*

##### *warning*: PORT and DEV_PORT can't be the same.
---
&copy; 2018 Ahmad Aidil