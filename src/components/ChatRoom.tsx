import { Container, Row, Col } from "react-bootstrap";
import { TbMinusVertical } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";

const ChatRoom = () => {
  return (
    <div>
      <Container fluid className="p-0">
        <div style={{ height: "85vh" }} className="">
          <Row className="p-1" style={{ background: "#EFF0EF" }}>
            <Col md={10}>
              <img
                src="whatsapp.png"
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
