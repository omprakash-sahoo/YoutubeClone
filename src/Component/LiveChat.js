import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateName, generateRandomText } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateName(),
          message: generateRandomText(10),
        })
      );
    }, 1500);
    return () => clearInterval(i);
  }, []);
  const chatmessage = useSelector((store) => {
    return store.chat.message;
  });
  return (
    <div className="ml-2 border border-slate-400 h-[500px] w-[400px] rounded-2xl text-sm overflow-auto">
      {chatmessage.map((chat, index) => {
        return (
          <ChatMessage key={index} name={chat.name} message={chat.message} />
        );
      })}
    </div>
  );
};

export default LiveChat;
