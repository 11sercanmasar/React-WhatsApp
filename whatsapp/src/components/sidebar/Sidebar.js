import React from "react";
import "./sidebar.css";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from "@material-ui/core";
export default function Sidebar() {
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
    </div>
  );
}
