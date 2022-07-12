import { SELECT_USER } from "../actions"
const initialState = {
  userState: {},
}
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_USER:
      return {
        ...state,
        userState: action.payload,
      }
    default:
      return state
  }
}
export default userReducer
