import { Container, Row, Col, Form, ListGroup } from "react-bootstrap";
import { TbMinusVertical } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import {useSelector} from "react-redux";
import { io } from 'socket.io-client'
import { useEffect, useState } from "react";
import { Message} from '../types'


const Address = 'http://localhost:3001'
const socket = io(Address, {transports: ['websocket']})

const ChatRoom = () => {
  const userSelected = useSelector((state: any) => state.user.userState)
  const [message, setMessage] = useState('')
  const [chatHistory, setChatHistory] = useState<Message[]>([])
  useEffect(() => {
    socket.on('connect', () => {
      // the server emits an event of type 'connect' every time a client
      // successfully established a connection
      console.log('Connection established!')
    })

  }, [])
  

 
 
  const sendMessage = () => {
    // this function executes just for the sender for the message!
    const newMessage: Message = {
      text: message,
      sender: userSelected.username,
      timestamp: Date.now(),
    }
    socket.emit('sendMessage', newMessage)
    setChatHistory([...chatHistory, newMessage])
    console.log(newMessage)
    console.log(newMessage.sender)
    
    // this is appending my new message to the chat history in this very moment
    setMessage('')
  }
  return (
    <div>
      <Container fluid className="p-0">
        <div style={{ height: "85vh",  backgroundImage: `url("bg.jpg")` }} >
          <Row className="p-1" style={{ background: "#EFF0EF" }}>
            <Col md={10}>
              {/* if user is not selected use default image */}
              {userSelected ? (
                <img
                  src={userSelected.avatar}
                  alt="userImage"
                  height="38px"
                  className="rounded"
                />
              ) : (
                <img
                  src="whatsapp.png"
                  alt="user"
                  height="38px"
                  className="rounded "
                />) }
                <span className="mx-1">{userSelected.username}</span>
           
              
             
            </Col>
            <Col md={1}>
              <TbMinusVertical className="text-muted" size={30} />
            </Col>
            <Col md={1}>
              <FiSearch size={20} />
            </Col>
          </Row>
          <Row className="ml-1">
          <ListGroup className=" ">
            {chatHistory.map((element, i) => (
              <div key={i}>
              <ListGroup.Item  className="bg-transparent text-dark border-0">
                <>
                {element.sender} | {element.text} at{' '}
                {new Date(element.timestamp).toLocaleTimeString()}
                </>
              </ListGroup.Item>
           
            </div>
            ))}
          </ListGroup>
          </Row>
        </div>
        <Row className="p-1" style={{ background: "#EFF0EF", height: "10vh" }}>
          <Col md={1} className="my-3 mx-0">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png"
              alt="userImage"
              height="38px"
              className="rounded"
            />
          </Col>
          <Col md={10}>
            <Form  onSubmit={(e) => {
              e.preventDefault()
              sendMessage()
            }}>
            <input
              type="text"
              className="form-control my-3"
              placeholder="Write messages here!!"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              aria-label="Search"
            />
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ChatRoom;
