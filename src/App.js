import React, { useState } from "react";
import VideoCall from "./VideoCall";
import ChannelForm from "./ChannelForm";
import './App.css';

function App() {
  const [inCall, setInCall] = useState(false);
  const [channelName, setChannelName] = useState("");

  return (
   <div>
    {inCall ? (
      <VideoCall setInCall={setInCall} channelName={channelName} />
    ) : (
      <ChannelForm setInCall={setInCall} setChannelName={setChannelName} />
    )}
   </div>
  );
}

export default App;
