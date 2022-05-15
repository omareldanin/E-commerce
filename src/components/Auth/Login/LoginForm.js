import "./loginform.scss";
import { Form } from "react-bootstrap";
import Button from "../../UI/Button";
import googleIcon from "../../../Images/Google.webp";
import { NavLink } from "react-router-dom";
const LoginForm = () => {
  return (
    <div className="login-form">
      <p>Please Sign in your Account</p>
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="email">
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button type="submit">Sign in</Button>
        </Form>
      </div>
      <span className="or">or</span>
      <div className="social-login">
        <div className="google">
          <img src={googleIcon} alt="googleIcon" />
          <span>Continue with Google</span>
        </div>
      </div>
      <div className="create">
        <p>New to our platform ?</p>
        <NavLink to="/register">Create an account</NavLink>
      </div>
    </div>
  );
};
export default LoginForm;
