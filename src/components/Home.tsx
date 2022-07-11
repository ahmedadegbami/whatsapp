import Sidebar from "./Sidebar";
import ChatRoom from "./ChatRoom";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={4}>
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
