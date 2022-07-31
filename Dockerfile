FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
RUN npm -g install typescript
RUN npm -g install serve

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "run" ,"start"]