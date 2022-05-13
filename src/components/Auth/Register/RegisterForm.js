import "./registerForm.scss";
import { Form } from "react-bootstrap";
import Button from "../../UI/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";
const RegisterForm = () => {
  return (
    <div className="login-form">
      <p>Please Sign up your Account</p>
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="fname">
            <Form.Control type="text" placeholder="First Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="lname">
            <Form.Control type="text" placeholder="Last Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button type="submit">Sign up</Button>
        </Form>
      </div>
      <div className="create">
        <p>Have an account ?</p>
        <NavLink to="/login">Log in now</NavLink>
      </div>
      <span className="or">or</span>
      <div className="social-login">
        <div className="facebook">
          <FontAwesomeIcon icon={faFacebookF} size="lg" />
          <span>Facebook</span>
        </div>
        <div className="google">
          <FontAwesomeIcon icon={faGoogle} size="lg" />
          <span>Google</span>
        </div>
      </div>
      <div></div>
    </div>
  );
};
export default RegisterForm;