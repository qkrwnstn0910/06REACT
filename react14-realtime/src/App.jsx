import Listener from "./components/Listener";
import ChatStart from "./components/ChatStart";
import ChatMessage from "./components/ChatMessage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Listener/>}></Route>
        <Route path="/listener" element={<Listener/>}></Route>
        <Route path="/chat">
          <Route index element={<ChatStart/>}/>
          <Route path="talk" element={<ChatMessage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
