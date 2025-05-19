import {
  CometChatMessages,
  CometChatConversationsWithMessages,
  CometChatUIKit,
} from "@cometchat/chat-uikit-react";

function ChatRoom() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <CometChatConversationsWithMessages />
    </div>
  );
}
export default ChatRoom;
