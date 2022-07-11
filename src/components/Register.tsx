import { Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
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
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter Username" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
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
