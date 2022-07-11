import { Container, Row, Col } from "react-bootstrap";
import {TbCircleDashed} from 'react-icons/tb'
import {AiOutlinePlus} from 'react-icons/ai'
import {BsThreeDots} from 'react-icons/bs'
import {FiSearch} from "react-icons/fi"

const Sidebar = () => {
  return( <div>
    <Container fluid className="p-0 ">
      <Row className="p-1" style={{background: "#EFF0EF"}}>
        <Col md={6}>
          <img src="whatsapp.png" alt="userImage" height="38px" className="rounded"/>
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
      <div className="input-group my-2">
  <span className="input-group-text" ><FiSearch /></span>
  <input type="text" className="form-control" placeholder="Search" aria-label="Search" />
</div>
      </Row>
      <Row className="">
      <hr/>
      </Row>
    
      <Row className="mt-2">
        <Col sm={1}>
        <img src="whatsapp.png" alt="userImage" height="38px" className="rounded"/>
          </Col>
          <Col sm={10} className="mx-3">
          <p>Mr Chat Bot</p>
        
          </Col>
      </Row>
    </Container>

  </div>
  )
};

export default Sidebar;
