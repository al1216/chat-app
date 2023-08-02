# Getting Started with P2P Chatter App

## Install

```
git clone https://github.com/al1216/chat-app.git
```

## Split the Terminal

On 1st terminal move to chat-app-ui using

```
cd chat-app-ui  
```

and create a ## .env file
and paste the following content
```
REACT_APP_HOST = "http://localhost:4000"
```

On 2nd terminal move to chat-app-backend using

```
cd chat-app-backend 
```
and create a ## .env file
and paste the following content
```
SERVER_PORT = 4000
```

### `npm start`

On, the first terminal, run 
```
npm start
```
It, Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### nodemon index.js

On, the first terminal, run 
```
nodemon index.js
```