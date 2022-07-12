import { Container, Row, Col } from "react-bootstrap";
import { TbMinusVertical } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import {useSelector} from "react-redux";
import { io } from 'socket.io-client'
import { useEffect } from "react";


const Address = 'http://localhost:3001'
const socket = io(Address, {transports: ['websocket']})

const ChatRoom = () => {
  const userSelected = useSelector((state: any) => state.user.userState)
  useEffect(() => {
    socket.on('connect', () => {
      // the server emits an event of type 'connect' every time a client
      // successfully established a connection
      console.log('Connection established!')
    })

  }, [])
  

 
  console.log(userSelected)
  return (
    <div>
      <Container fluid className="p-0">
        <div style={{ height: "85vh",  backgroundImage: `url("bg.jpg")`,  

 
 }} >
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
                  className="rounded"
                />)}
              
             
            </Col>
            <Col md={1}>
              <TbMinusVertical className="text-muted" size={30} />
            </Col>
            <Col md={1}>
              <FiSearch size={20} />
            </Col>
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
            <input
              type="text"
              className="form-control my-3"
              placeholder="Search"
              aria-label="Search"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ChatRoom;
