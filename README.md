# React SSR & PWA build from scratch

Some stack
---
* React 16
* React Router 4
* Webpack 4
* Express 4
* Babel 7

Support features
---
* SSR (done)
* PWA (in progress..)
* SASS (soon ..)
---

*Eslint*
* *Custom*, based my preference code style and still looking for the best config

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