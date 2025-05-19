import { useState } from "react";
import {
  CometChatMessageComposer,
  CometChatMessageHeader,
  CometChatMessageList,
} from "@cometchat/chat-uikit-react";
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatSelector } from "../components/CometChatSelector";

function Dashboard() {
  const [selectedUser, setSelectedUser] = useState(undefined);
  const [selectedGroup, setSelectedGroup] = useState(undefined);





  const handleSelection = (item) => {
    if (item instanceof CometChat.Conversation) {
      item = item.getConversationWith();
    }

    if (item instanceof CometChat.User) {
      setSelectedUser(item);
      setSelectedGroup(undefined);
    } else if (item instanceof CometChat.Group) {
      setSelectedUser(undefined);
      setSelectedGroup(item);
    } else {
      setSelectedUser(undefined);
      setSelectedGroup(undefined);
    }
  };



  console.log("SELECTED USER: ", selectedUser);

  



  return (

    <div className="cometchat-root relative flex h-screen w-full bg-[#181818] text-white" data-theme="dark">

      {/* Sidebar */}
      <aside className="w-64 bg-[#181818]  border-r border-gray-700 flex flex-col">
        {/* <h2 className="p-4 text-lg font-semibold border-b border-gray-700">
          Conversations
        </h2> */}
        <div className="flex-grow overflow-y-auto">
          <CometChatSelector onSelectorItemClicked={handleSelection} />
        </div>
      </aside>



      {/* Main Chat Area */}
      <main className="flex flex-col flex-grow w-full relative bg-[#181818] text-white shadow-lg overflow-hidden">
        {(selectedUser || selectedGroup) ? (
          <>
            <header className="flex items-center justify-between px-4 py-2 bg-[#2c2c2c]  border-b border-gray-700">
              <div className="flex items-center space-x-3">
                <img
                  src={selectedUser?.getAvatar() || selectedGroup?.getIcon() || '/default-avatar.png'}
                  alt="Avatar"
                  className="w-10 h-10 rounded-full object-cover"
                />

                <div className="flex flex-col">
                  <span className="text-white font-semibold text-sm">
                    {selectedUser?.getName?.() || selectedGroup?.getName?.() || 'Chat'}
                  </span>
                  <span className="text-xs text-gray-400">
                    {selectedUser ? (selectedUser.getStatus?.() || 'offline') : selectedGroup?.getMembersCount?.() + ' members'}
                  </span>
                </div>
              </div>


            </header>


            <section className="flex-grow px-8 py-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
              <CometChatMessageList
                user={selectedUser}
                group={selectedGroup}
                renderMessage={(message) => {
                  const isSender = message.sender.uid === currentUser.uid;
                  console.log("IS SENDER: ", isSender);

                  return (
                    <div
                      className={`p-3 rounded-lg max-w-[70%] mb-2 break-words
          ${isSender ? "bg-green-500 text-white ml-auto" : "bg-gray-700 text-white mr-auto"}
        `}
                      style={{ alignSelf: isSender ? "flex-end" : "flex-start" }}
                    >
                      {message.text}
                    </div>
                  );
                }}
              />

            </section>

            <footer className="sticky bottom-0 w-full bg-[#2c2c2c px-8 py-3">
                <CometChatMessageComposer user={selectedUser} group={selectedGroup} />
            </footer>
          </>
        ) : (
          <div className="flex flex-grow items-center justify-center text-gray-500 italic text-lg select-none">
            Select a conversation to start chatting.
          </div>
        )}
      </main>

    </div>
  );
}

export default Dashboard;
