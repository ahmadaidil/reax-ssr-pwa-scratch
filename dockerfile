FROM node:8-alpine
EXPOSE 8000
ENV NODE_ENV production
ENV PORT 8000
ENV WORKDIR /reax
WORKDIR ${WORKDIR}
COPY . ${WORKDIR}
RUN npm i
RUN node_modules/.bin/webpack
RUN rm -rf dist/ && node_modules/.bin/babel src/ -d dist/
RUN cp -a src/server/views dist/server/ && rm -rf src
CMD node dist/server