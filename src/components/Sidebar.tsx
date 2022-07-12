import { Container, Row, Col } from "react-bootstrap";
import {TbCircleDashed} from 'react-icons/tb'
import {AiOutlinePlus} from 'react-icons/ai'
import {BsThreeDots} from 'react-icons/bs'
import {FiSearch} from "react-icons/fi"
import {useState, useEffect} from "react";
import { useDispatch} from "react-redux";
import { selectUserAction } from "../redux/actions";
import {User} from '../types'
import axios from 'axios'

// interface IUser {
//   _id: number
//   username: string
//   email: string
//   avatar: string
 
// }

const Sidebar = () => {
  const dispatch = useDispatch();



  const [user, setUser] = useState<User>(null || {} as User)
  const [allUsers, setAllUsers] = useState<User[]>([])
 
  const fetchUser = async () => {
    const res = await axios.get('http://localhost:3001/users/me',{ headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`}
    }
)
    setUser(res.data)
  }
  useEffect(() => {
    fetchUser()
  }
  , [])
  const fetchAllUsers = async () => {
    const res = await axios.get('http://localhost:3001/users', { headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`}
    })
    setAllUsers(res.data)
  }
  useEffect(() => {
    fetchAllUsers()
  }
  , [])

  return( <div>
    <Container fluid className="p-0 ">
      <Row className="p-1" style={{background: "#EFF0EF"}}>
        <Col md={6}>
          <img src={user.avatar} alt="userImage" height="38px" className="rounded"/>
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
    
      <Row className="">
        {allUsers.map(userChat => (
          <div className="d-flex my-1" key={userChat._id}>
          <Col sm={1}>
          <img src={userChat.avatar} alt="userImage" height="38px" width="38px" className="rounded"/>
            </Col>
            <Col sm={10} className="mx-3">
           
           
            <p onClick={() => dispatch(selectUserAction(userChat))} >{userChat.username}</p>
            </Col>
            </div>
        ))}
          
      </Row>
    </Container>

  </div>
  )
};

export default Sidebar;
