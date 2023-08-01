import React, { useState } from "react";
import "./style.css";

export default function Index() {
  const [chat, setChat] = useState("");
  const [arrChat, setArrChat] = useState([]);
  const onClickSendMsg = () => {
    document.getElementsByClassName("msg-bubble")[0].style.width = `${chat.length+5}rem`
    setArrChat([...arrChat, chat]);
    localStorage.setItem("chats",JSON.stringify(arrChat));
    setChat("");
  };
  return (
    <div className="msg-container">
      <div className="navbar">
        <h1 className="heading-navbar">P2P Chatter</h1>
      </div>
      <div className="messages-area">
        <div className="a-message">
          <img src="avatar.png" alt="" className="avatar-img" />
          <div className="msg-bubble">
            <p className="msg-caption">{arrChat[0] ? arrChat[0] : ""}</p>
          </div>
        </div>
        <div className="a-message reverse">
          <img src="avatar2.png" alt="" className="avatar2-img" />
          <div className="msg-bubble reverse-radius">
            <p className="msg-caption">{arrChat[1] ? arrChat[1] : ""}</p>
          </div>
        </div>
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
