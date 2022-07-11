import Sidebar from "./Sidebar";
import ChatRoom from "./ChatRoom";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
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
          <Sidebar />
        </Col>

        <Col md={8}>
          <ChatRoom />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
