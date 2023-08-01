const { createContext, useState } = require("react");

const ChatContext = createContext();

const Provider = ({ children }) => {
  const [id,setId] = useState();
  const [clickNextBtn,setClickNextBtn] = useState(false);

  const valueToShare = {
    id,
    setId,
    clickNextBtn,
    setClickNextBtn,
  };

  return (
    <ChatContext.Provider value={valueToShare}>
      {children}
    </ChatContext.Provider>
  );
};

export { Provider };

export default ChatContext;