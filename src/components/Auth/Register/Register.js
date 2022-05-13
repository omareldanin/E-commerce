import "./register.scss";
import RegisterForm from "./RegisterForm";
const Register = () => {
  const title = document.getElementsByTagName("title");
  title[0].innerText = "Create Account - Boom Theme";
  return (
    <>
      <div className="register-header center">
        <h1>CREATE ACCOUNT</h1>
        <p>Home / Account</p>
      </div>
      <RegisterForm />
    </>
  );
};
export default Register;
