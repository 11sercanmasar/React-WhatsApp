import React, { useEffect, useState } from "react";
import "./chatbar.css";
import { Avatar } from "@material-ui/core";
import MoreVert from "@material-ui/icons/MoreVert";
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SearchIcon from '@material-ui/icons/Search';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import MicIcon from '@material-ui/icons/Mic';

export default function Chatbar() {
  const [seed, setSeed] = useState("");
  const [input, setInput]=useState("")
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const sendMessage = (e)=>{
    e.preventDefault();
    console.log(input)
  } 

  return (
    <div className="chatbar">
      <div className="chatbarHeader">
        <Avatar src={`https://avatars.dicebear.com/api/human/:${seed}.svg`} />
        <div className="chatbarHeaderInfo">
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chatbarHeaderIcons">
          <SearchIcon/>
          <AttachFileIcon/>
          <MoreVert/>
        </div>
      </div>
      <div className="chatbarBody">
     
        <p className={`chatbarMessage  ${true && "chatbarReceiver"}`}>  
        <span className="chatbarMessageName">Sercan Masar</span>
        hey guys 
        <span className="chatbarMessageTimeStamp"> 3:52pm </span>
        </p>
      </div>


      <div className="chatbarFooter">
        <SentimentSatisfiedIcon/>
        <form className="chatbarFooterForm">
          <input value={input} 
          onChange={e => setInput(e.target.value)} 
          className="chatbarFooterInput" type="text" 
          placeholder="Type a message" />
          <button 
          onClick={sendMessage} 
          type="submit" 
          className="chatbarFooterButton">Send a message</button>
        </form>
        <MicIcon/>
      </div>
    </div>
  );
}
