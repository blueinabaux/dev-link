import React, { useEffect, useRef, useState } from "react";
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatConversations, CometChatAvatar } from "@cometchat/chat-uikit-react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { notAuthUser } from "../redux/slices/authSlice";

export const CometChatSelector = ({ onSelectorItemClicked = () => { } }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [activeItem, setActiveItem] = useState(null);
  const [users, setUsers] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const typingObjRef = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Fetch logged-in user
  useEffect(() => {
    async function fetchUser() {
      try {
        const user = await CometChat.getLoggedinUser();
        setLoggedInUser(user);
        console.log("Logged in user:", user);
      } catch (error) {
        console.error("Failed to get logged-in user:", error);
      }
    }
    fetchUser();
  }, []);

  // Typing indicator listeners
  useEffect(() => {
    if (!loggedInUser) return;

    const messageListenerId = "typing_demo_" + new Date().getTime();
    CometChat.addMessageListener(messageListenerId, new CometChat.MessageListener({
      onTypingStarted: (typingIndicator) => {
        typingObjRef.current = typingIndicator;
        setIsTyping(true);
      },
      onTypingEnded: (typingIndicator) => {
        if (
          typingObjRef.current &&
          typingObjRef.current.getSender().getUid() === typingIndicator.getSender().getUid()
        ) {
          typingObjRef.current = null;
          setIsTyping(false);
        }
      },
    }));

    return () => {
      CometChat.removeMessageListener(messageListenerId);
    };
  }, [loggedInUser]);

  // Fetch users list
  useEffect(() => {
    if (!loggedInUser) return;

    const usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(30)
      .build();

    usersRequest.fetchNext().then(
      (userList) => {
        const filteredUsers = userList.filter(u => u.uid !== loggedInUser.uid);
        setUsers(filteredUsers);
      },
      (error) => {
        console.error("Failed to fetch users", error);
      }
    );
  }, [loggedInUser]);

  // Custom leading view for conversations - shows avatar or typing indicator
  const CustomLeadingView = (conversation) => {
    const conversationObj = conversation.getConversationWith();
    const isUser = conversationObj instanceof CometChat.User;
    const isGroup = conversationObj instanceof CometChat.Group;

    // Check if this conversation is the one typing
    const isMyTyping =
      isUser
        ? conversationObj.getUid() === typingObjRef.current?.getSender().getUid() &&
          loggedInUser?.getUid() === typingObjRef.current?.getReceiverId()
        : isGroup &&
          conversationObj.getGuid() === typingObjRef.current?.getReceiverId();

    const avatar = isUser ? conversationObj.getAvatar() : conversationObj.getIcon();
    const name = isTyping && isMyTyping ? undefined : conversationObj.getName();
    // Replace "TYPING_ICON_HERE" with your actual typing icon URL or component
    const image = isTyping && isMyTyping ? "https://i.gifer.com/origin/43/4358bbf3c6c1e2a9f8bf5243d36d2a5a.gif" : avatar;

    return (
      <div className="conversations__leading-view">
        <CometChatAvatar image={image} name={name} />
      </div>
    );
  };

  const handleLogout = async () => {
    try {
      await CometChat.logout();

      localStorage.removeItem("cometChatUser");

      dispatch(notAuthUser());

      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      alert("Logout failed. Please try again.");
    }
  };

  return (
    <div className="flex flex-col justify-between items-center pb-[20px] text-white w-full h-full bg-[#242424] shadow-md overflow-hidden">
      {/* <aside className="w-64 overflow-y-auto">
        {users.length > 0 ? (
          users.map((user) => (
            <div
              key={user.uid}
              onClick={() => {
                setActiveItem(user);
                onSelectorItemClicked(user, "updateSelectedItem");
              }}
              className={`p-3 cursor-pointer flex justify-start items-center py-[14px] gap-[20px] border-b border-zinc-600 hover:bg-zinc-700 ${
                activeItem?.uid === user.uid ? "bg-zinc-800 font-bold" : ""
              }`}
            >
              <img src={user.avatar} className="w-10 h-10 rounded-full" />
              {user.name}
            </div>
          ))
        ) : (
          <p className="p-4">Loading users...</p>
        )}
      </aside> */}

      {/* Conversations list with custom leading view */}
      <CometChatConversations
        activeConversation={activeItem instanceof CometChat.Conversation ? activeItem : undefined}
        onItemClick={(e) => {
          setActiveItem(e);
          onSelectorItemClicked(e, "updateSelectedItem");
        }}
        leadingView={CustomLeadingView}
      />

      <button
        onClick={handleLogout}
        className="button-container rounded-[8px] bg-[#ff4141] w-[80%] px-[1.4vw] py-[1.2vh] text-white cursor-pointer hover:scale-[1.05] transition-all font-medium"
      >
        Logout
      </button>
    </div>
  );
};
