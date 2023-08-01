import { useContext } from "react";
import ChatContext from "./useChatContext.js";

const useChatContext = () => {
  return useContext(ChatContext);
};

export default useChatContext;