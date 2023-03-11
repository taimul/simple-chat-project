import React from "react";

const Chats = () => {
  return (
    <div className="chats">
      {/* {Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) =>  */}
      <div className="userChat">
        <img src="" alt="" />
        <div className="userChatInfo">
          <span>user name</span>
          <p>last chat</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
