FROM node:15.5.0

WORKDIR /usr/src/client

# Install dependencies first
COPY package*.json ./
RUN npm install --unsafe-perm

COPY . .

ARG PORT=3000
ENV PORT $PORT

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

RUN npm run build

EXPOSE $PORT

CMD [ "npm", "start" ]