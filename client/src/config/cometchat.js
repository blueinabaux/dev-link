import { CometChatUIKit, UIKitSettingsBuilder } from "@cometchat/chat-uikit-react";

export const COMETCHAT_CONSTANTS = {
  APP_ID: "2756953259c1fe9f",
  REGION: "in",
  AUTH_KEY: "7039fcb0f0577bfb91cebdf282e5872532758805",
};

const UIKitSettings = new UIKitSettingsBuilder()
  .setAppId(COMETCHAT_CONSTANTS.APP_ID)
  .setRegion(COMETCHAT_CONSTANTS.REGION)
  .setAuthKey(COMETCHAT_CONSTANTS.AUTH_KEY)
  .subscribePresenceForAllUsers()
  .build();

export const initCometChat = () => {
  return CometChatUIKit.init(UIKitSettings)
    .then(() => console.log("✅ CometChat initialized successfully"))
    .catch((error) => console.error("❌ CometChat initialization failed:", error));
};

export const loginCometChatUser = async (UID) => {
  try {
    const loggedInUser = await CometChatUIKit.getLoggedinUser();
    if (!loggedInUser) {
      const user = await CometChatUIKit.login(UID);
      console.log("✅ User logged in:", user);
      return user;
    } else {
      console.log("🔁 Already logged in:", loggedInUser);
      return loggedInUser;
    }
  } catch (error) {
    console.error("❌ Login failed:", error);
    throw error;
  }
};

export const getCurrentUser = async () => {
  try {
    const user = await CometChatUIKit.getLoggedinUser();
    return user;
  } catch (error) {
    console.error("❌ Error fetching current user:", error);
    return null;
  }
};

export const logoutCometChatUser = async () => {
  try {
    await CometChatUIKit.logout();
    localStorage.removeItem("cometChatUser");
    console.log("👋 Logged out successfully");
  } catch (error) {
    console.error("❌ Logout failed:", error);
  }
};
