# Getting Started with P2P Chatter App

## Preview

<img width="1440" alt="Screenshot 2023-08-02 at 5 17 25 PM" src="https://github.com/al1216/chat-app/assets/71925655/c9eb7169-62c8-4a74-8253-ee39aebc1ca3"> 
<img width="1440" alt="Screenshot 2023-08-02 at 5 24 55 PM" src="https://github.com/al1216/chat-app/assets/71925655/2c2bd1b7-2253-47ea-8beb-893baa118688">

(https://drive.google.com/file/d/1pE4AhkeqMVZ3ywNRfrfAofXpTxPEcYrv/view?usp=drive_link)


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
