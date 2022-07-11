import { Form, Button, Card } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className="container-fluid">
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
      <div className="row vh-100 " style={{ position: "absolute", zIndex: "1", marginTop: "-25px", width: "100%" }} >
        <div className="col-md-6 mx-auto">
          <Card className="p-5 shadow-lg">
            <Form>
              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                  value={email}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                  value={password}
                />
              </Form.Group>
              <div className="d-grid gap-2">
                <Button
                  style={{ backgroundColor: "#075E55", borderColor: "#075E55" }}
                  type="submit"
                >
                  Login
                </Button>
              </div>

              <small>
                <p className="m-1 text-center">
                  Don't have an account? <Link to="/register"> Register. </Link>{" "}
                </p>
                <p className="m-1 text-center">
                  <Link to="/"> Forget password? </Link>{" "}
                </p>
              </small>

              <hr
                className=" m-3"
                style={{ backgroundColor: "#25D366", borderColor: "#25D366" }}
              />
              <div className="d-grid gap-2">
                <Button size="lg" variant="outline-dark">
                  <img
                    src={"google.png"}
                    alt="google"
                    height={25}
                    width={25}
                    className="mr-4"
                  />{" "}
                  Google
                </Button>
              </div>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
