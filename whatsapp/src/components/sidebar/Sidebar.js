import React, { useEffect, useState } from "react";
import "./sidebar.css";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from "@material-ui/core";
import SidebarChat from "./sidebarChat/SidebarChat";
import db from "../../firebase";
import { onSnapshot, collection} from "firebase/firestore";

export default function Sidebar() {

  const [rooms, setRooms]= useState([])

  // useEffect(()=>{
   
  //   db.collection('rooms').onSnapshot(snapshot =>(
  //     setRooms(snapshot.docs.map(doc=> 
  //       ({
  //         id: doc.id,
  //         data: doc.data(),
  //       })
  //       ))
  //   ))
  // },[])

useEffect(()=>{
const unsubscribe =  onSnapshot(collection(db, "rooms"), (snapshot)=>(
 setRooms(snapshot.docs.map(doc=>({
    data:doc.data(),
    id: doc.id, 
  })))
));
return ()=>{
 unsubscribe(); 
}
}, []) 


  return (
    <div className="sideBar">
      <div className="sidebarHeader">
        <div className="sidebarAvatar">
          <Avatar />
        </div>
        <div className="sidebarIcons">
         <DonutLargeIcon/>
         <ChatIcon/>
         <MoreVertIcon/>
        </div>
      </div>
      <div className="sidebarSearch">
            <div className="searchbarItems">
            <SearchIcon className="searchbarSearchIcon"/>
            <input type="text" className="sidebarSearchInput" placeholder="Search or start new chat"/>
            </div>
      </div>
      <div className="sidebarChatWrapper">
          <SidebarChat addNewChat/>
         {rooms.map(room=>(
           <SidebarChat key={room.id} id={room.id} name={room.data.name} />
         ))}
         
      </div>
    </div>
  );
}
