export const USER_INFO = "USER_INFO"
export const CHATS = "CHATS"
export const MESSAGES = "MESSAGES"
export const ACTIVE_CHAT = "ACTIVE_CHAT"
export const HISTORY = "HISTORY"
export const SELECT_USER = "SELECT_USER"

export const selectUserAction = (user) => ({
  type: SELECT_USER,
  payload: user,
})

export const setUserInfo = (userInfo) => ({
  type: USER_INFO,
  payload: userInfo,
})
export const setChats = (chats) => ({
  type: CHATS,
  payload: chats,
})
export const setNewMessage = (message) => ({
  type: MESSAGES,
  payload: message,
})
export const setActiveChat = (chat) => ({
  type: ACTIVE_CHAT,
  payload: chat,
})

export const setHistory = (history) => ({
  type: HISTORY,
  payload: history,
})
