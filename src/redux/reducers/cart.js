import { USER_INFO, CHATS, MESSAGES, ACTIVE_CHAT, HISTORY } from "../actions"
const initialState = {
  userInfo: {},
  chats: [],
  messages: [],
  activeChat: {},
  history: [],
}

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      }
    case CHATS:
      return {
        ...state,
        chats: action.payload,
      }
    case MESSAGES:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      }
    case ACTIVE_CHAT:
      return {
        ...state,
        activeChat: action.payload,
      }
    case HISTORY:
      return {
        ...state,
        history: action.payload,
      }
    default:
      return state
  }
}

export default chatReducer
