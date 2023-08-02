# Getting Started with P2P Chatter App

## Preview

[![preview](https://drive.google.com/file/d/1ClNClD3DoewjU2rtGN4nm5948UhPIW11/view?usp=drive_link)](https://drive.google.com/file/d/1pE4AhkeqMVZ3ywNRfrfAofXpTxPEcYrv/view?usp=drive_link)

Click the above image to watch a video of the P2P chatter app in action.

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
npm i axios copy-to-clipboard react-toastify react-router-dom

npm start
```
It, Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `nodemon index.js`

On, the second terminal, run 
```
npm i hyperswarm hypercore corestore hyperbee hyperdrive localdrive b4a debounceify graceful-goodbye nodemon express dotenv

nodemon index.js
```