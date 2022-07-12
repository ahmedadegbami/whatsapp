import { Form, Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/users/register", {
        username,
        email,
        password,
        avatar,
      })
      .then((res) => {
        console.log(res);
        navigate("/");
        console.log(res.data);
      }
      )
      .catch((err) => {
        console.log(err);
      }
      )};
 
  return (
    <div className="container-fluid ">
      <div className="row ">
        <div style={{ height: "20vh", background: "#075E55" }}>
          <div className="d-flex">
            <img
              src="whatsapp.png"
              alt="logo"
              width={38}
              className="m-3 d-inline"
            />
            <span className="mt-4 text-white"> WHATSAPP WEB </span>
          </div>
        </div>
        </div>
      <div className="row  vh-100" style={{ position: "absolute", zIndex: "1", marginTop: "-25px", width: "100%" }}>
        <div className="col-md-6 mx-auto">
          <Card className="p-5 shadow-lg">
            <Form onSubmit= {handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter Username" value={username}  onChange={(e) => setUsername(e.target.value)}/>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email}  onChange={(e) => setEmail(e.target.value)} />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Avatar</Form.Label>
                <Form.Control type="url" placeholder="user avatar" value={avatar}  onChange={(e) => setAvatar(e.target.value)}/>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password}  onChange={(e) => setPassword(e.target.value)}/>
              </Form.Group>
              <div className="d-grid gap-2">
                <Button
                  style={{ backgroundColor: "#075E55", borderColor: "#075E55" }}
                  type="submit"
                  size="lg"
                  
                >
                  Sign Up
                </Button>
              </div>
            </Form>
            <small>
              <p className="m-2 text-center">
                Already have an account? <Link to="/"> Login. </Link>{" "}
              </p>
            </small>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Register;
