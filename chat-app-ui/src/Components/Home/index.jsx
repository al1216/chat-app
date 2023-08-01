import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./style.css";
import 'react-toastify/dist/ReactToastify.css';

export default function Index() {
  const [clickNextBtn, setClickNextBtn] = useState(false);
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const onClickHomeBtn = () => {
    if (!clickNextBtn) {
      if (name.trim().length === 0) {
        toast.error("Please, enter valid username :(", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          style:{
            fontSize: '1.5rem'
          }
        });
      } else {
        setClickNextBtn(true);
      }
    } else {
      //check and direct to next page
      if (id.trim().length === 0) {
        toast.error("Please, enter valid peer-id :(", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          style:{
            fontSize: '1.5rem'
          }
        });
      } else {
        //navigate to next page
      }
      
    }
  };
  return (
    <div className="home-container">
      <div className="left-side-home">
        <h1 className="heading-website">P2P Chatter</h1>
      </div>
      <div className="right-side-home">
        <div className="cred-container">
          <p className="name-label">Username:</p>
          <input
            type="text"
            className="name"
            onChange={(e) => setName(e.target.value)}
          />
          {clickNextBtn && <p className="id-label">Peer Id:</p>}
          {clickNextBtn && <input type="text" className="peer-id" />}
          <button
            type="submit"
            className="start-btn"
            onClick={() => onClickHomeBtn()}
          >
            {clickNextBtn ? "Start Chatting ... :)" : "Next"}
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}
