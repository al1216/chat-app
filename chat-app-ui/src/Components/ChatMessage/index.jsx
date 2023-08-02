import React, { useState } from "react";
import "./style.css";
import axios from "axios";

export default function Index() {
  const [chat, setChat] = useState("");
  const [arrChat, setArrChat] = useState([]);
  const sendMsgToPeer = async () => {
    await axios
      .get(`${process.env.REACT_APP_HOST}/api/connect-peers`, {
        params: {
          peerId: localStorage.getItem("peer-id"),
          msg: chat,
        },
      })
      .then((res) => {
        setArrChat([...arrChat, res.data.msg]);
        console.log(res.data.msg);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onClickSendMsg = () => {
    // document.getElementsByClassName("msg-bubble")[0].style.width = `${
    //   chat.length + 5
    // }rem`;
    setArrChat([...arrChat, chat]);
    localStorage.setItem("chats", JSON.stringify([...arrChat, chat]));
    sendMsgToPeer();
    setChat("");
    setArrChat(arrChat.reverse());
  };
  return (
    <div className="msg-container">
      <div className="navbar">
        <h1 className="heading-navbar">P2P Chatter</h1>
      </div>
      <div className="messages-area">
        {arrChat.map((c) => (
          <div className="a-message">
            <img src="avatar.png" alt="" className="avatar-img" />
            <div className="msg-bubble">
              <p className="msg-caption">{c ? c: ""}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="send-msg-area">
        <div className="wrapper-send-msg-area">
          <input
            type="text"
            name="message-area"
            className="message"
            placeholder="Message in your secure chatter app :)"
            onChange={(e) => setChat(e.target.value)}
            value={chat}
          />
          <div className="wrapper-button">
            <button
              type="submit"
              className="send-now"
              onClick={() => onClickSendMsg()}
            >
              Send now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
