import "./App.css";
import { Provider } from "./context/useChatContext";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/index";
import Msg from './Components/ChatMessage';
function App() {
  return (
    <Provider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/app" element={<Msg />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
