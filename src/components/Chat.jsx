import React, { useContext } from "react";
import Messages from "./Messages";
import Input from "./Input";
import * as FaIcons from 'react-icons/fa';
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <FaIcons.FaVideo />
          <FaIcons.FaUserPlus />
          <FaIcons.FaEllipsisH />
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat;
