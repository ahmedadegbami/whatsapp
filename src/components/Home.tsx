import { FormEvent, useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  ListGroup,
  ListGroupItem,
  Row
} from "react-bootstrap";
import { io } from "socket.io-client";
import IMessage from "../interfaces/IMessage";
import { IUser } from "../interfaces/IUser";
import { Room } from "../interfaces/Room";
import { TbCircleDashed } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { TbMinusVertical } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";

const ADDRESS = "http://localhost:3001"; // <-- address of the BACKEND PROCESS
const socket = io(ADDRESS, { transports: ["websocket"] });

const Home = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState<IUser[]>([]);
  const [chatHistory, setChatHistory] = useState<IMessage[]>([]);

  const [room, setRoom] = useState<Room>("earth");
  const [singleRecipient, setSingleRecipient] = useState<string | null>(null);

  useEffect(() => {
    socket.on("connect", () => {
      // we can listen here and execute code whenever a "connect" event comes towards our way!
      console.log("Connection established!");
    });

    socket.on("loggedIn", () => {
      console.log("you're logged in!");
      // well done! let's set our interface as "logged in"
      setLoggedIn(true);
      // now it would be nice to populate the connected users list...
      fetchOnlineUsers();

      socket.on("newConnection", () => {
        console.log("Hey! a new user is online!");

        fetchOnlineUsers();
      });
    });

    socket.on("message", (newMessage: IMessage) => {
      console.log("a new message appeared!");

      setChatHistory((chatHistory) => [...chatHistory, newMessage]);
    });
  }, []);

  const handleUsernameSubmit = (e: FormEvent) => {
    e.preventDefault();

    socket.emit("setUsername", { username: username, room: room });
  };

  const handleMessageSubmit = (e: FormEvent) => {
    e.preventDefault();

    const newMessage: IMessage = {
      text: message,
      sender: username,
      socketId: socket.id,
      timestamp: Date.now() // <-- ms expired 01/01/1970
    };

    socket.emit("sendMessage", {
      message: newMessage,
      room: singleRecipient ?? room
    });

    setChatHistory([...chatHistory, newMessage]);
    setMessage("");
  };

  const fetchOnlineUsers = async () => {
    try {
      let response = await fetch(ADDRESS + "/online-users");
      if (response) {
        let data: { onlineUsers: IUser[] } = await response.json();
        // data is an array with all the current connected users
        setOnlineUsers(data.onlineUsers);
      } else {
        console.log("error fetching the online users");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container fluid>
      <div className="row" style={{ height: "5vh" }}>
        <div style={{ height: "5vh", background: "#075E55" }}>
          <div className="d-flex">
            <small className="text-white"> WhatsApp </small>
          </div>
        </div>
      </div>
      <Row>
        <Col
          md={4}
          style={{ borderRight: "1px solid #c4c4c4", height: "95vh" }}
        >
          <Container fluid className="p-0 ">
            <Row className="p-1" style={{ background: "#EFF0EF" }}>
              <Col md={6}>
                <img
                  src="whatsapp.png"
                  alt="userImage"
                  height="38px"
                  className="rounded"
                />
              </Col>
              <Col md={2}>
                <TbCircleDashed size={25} />
              </Col>
              <Col md={2}>
                <AiOutlinePlus size={25} />
              </Col>
              <Col md={2}>
                <BsThreeDots size={25} />
              </Col>
            </Row>
            <Row className="ml-1">
              <Form onSubmit={handleUsernameSubmit} className="d-flex my-2">
                <FormControl
                  placeholder="Insert your username to see who is online"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  disabled={loggedIn}
                />
                {!singleRecipient ? (
                  <Button
                    className="ml-2"
                    variant={room === "earth" ? "success" : "dark"}
                    onClick={() => setRoom(room === "earth" ? "mars" : "earth")}
                  >
                    Room
                  </Button>
                ) : (
                  <Button
                    className="ml-2"
                    variant={"secondary"}
                    onClick={() => setSingleRecipient(null)}
                  >
                    Back to the previous room
                  </Button>
                )}
              </Form>
            </Row>
            <Row className="">
              <hr />
            </Row>

            <Row className="">
              <div className="mb-3">Connected users:</div>
              <ListGroup>
                {onlineUsers.length === 0 && (
                  <ListGroupItem>No users yet!</ListGroupItem>
                )}
                {onlineUsers
                  .filter((user) => user.room === room)
                  .map((user) => (
                    <ListGroupItem
                      onClick={() => setSingleRecipient(user.socketId)}
                      key={user.socketId}
                    >
                      {user.username}
                    </ListGroupItem>
                  ))}
              </ListGroup>
            </Row>
          </Container>
        </Col>

        <Col md={8}>
          <div>
            <Container fluid className="p-0">
              <div style={{ height: "85vh", backgroundImage: `url("bg.jpg")` }}>
                <Row className="p-1" style={{ background: "#EFF0EF" }}>
                  <Col md={10}>
                    <img
                      src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                      alt="userImage"
                      height="38px"
                      className="rounded"
                    />
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
                        <ListGroup.Item className="bg-transparent text-dark border-0">
                          <>
                            {element.sender} | {element.text} at{" "}
                            {new Date(element.timestamp).toLocaleTimeString()}
                          </>
                        </ListGroup.Item>
                      </div>
                    ))}
                  </ListGroup>
                </Row>
              </div>
              <Row
                className="p-1"
                style={{ background: "#EFF0EF", height: "10vh" }}
              >
                <Col md={1} className="my-3 mx-0">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png"
                    alt="userImage"
                    height="38px"
                    className="rounded"
                  />
                </Col>
                <Col md={10}>
                  <Form onSubmit={handleMessageSubmit} className="d-flex">
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
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
