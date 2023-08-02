import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./style.css";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import copy from "copy-to-clipboard";
import { useNavigate } from "react-router";

export default function Index() {
  let navigate = useNavigate();
  const [clickNextBtn, setClickNextBtn] = useState(false);
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [pid, setPid] = useState("");
  let [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const onClickHomeBtn = async () => {
    if (!clickNextBtn) {
      if (name.trim().length === 0) {
        toast.error("Please, enter valid username :(", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          style: {
            fontSize: "1.5rem",
            width: innerWidth > 500? "32rem": "30rem",
            height: innerWidth > 500 ? "8rem" : "4rem"
          },
        });
      } else {
        await getPeerIdFromBackend();
        localStorage.setItem("name", name);
        copy(localStorage.getItem("peer-id"));
        toast.info(
          `Peer-id copied to clipboard: ${localStorage.getItem("peer-id")}`,
          {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            style: {
              fontSize: "1.5rem",
              width: innerWidth > 500 ? "40rem" : "40rem",
              height: "7rem",
            },
          }
        );
        setClickNextBtn(true);
      }
    } else {
      if (pid.trim().length === 0 || pid !== id) {
        toast.error("Please, enter valid peer-id :(", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          style: {
            fontSize: "1.5rem",
          },
        });
      } else {
        navigate("/app");
      }
    }
  };
  const getPeerIdFromBackend = async () => {
    await axios
      .get(`${process.env.REACT_APP_HOST}/api/get-peer-id`)
      .then((res) => {
        setId(res.data.id);
        localStorage.setItem("peer-id", res.data.id);
      })
      .catch((err) => {
        console.log("Error from home:", err);
      });
  };
  useEffect(() => {
    window.addEventListener("resize", () => {
      setInnerWidth(window.innerWidth);
    });
  }, []);
  return (
    <div className="home-container">
      {innerWidth > 500 && <div className="left-side-home">
        <h1 className="heading-website">P2P Chatter</h1>
      </div>}
      <div className="right-side-home">
        <div className="cred-container">
        {innerWidth < 500 && <h1 className="heading-website">P2P Chatter</h1>}
          <p className="name-label">Username:</p>
          <input
            type="text"
            className="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter username"
          />
          {clickNextBtn && <p className="id-label">Peer Id:</p>}
          {clickNextBtn && (
            <input
              type="text"
              className="peer-id"
              onChange={(e) => setPid(e.target.value)}
              placeholder="Enter peer-id"
            />
          )}
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
