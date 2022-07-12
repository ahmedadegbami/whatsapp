export type User = {
    _id: number
  username: string
  email: string
  avatar: string
  }
  
  export type Message = {
    sender: User
    text: string
    timestamp: number
  }