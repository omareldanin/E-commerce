import "./Login.scss";
import LoginForm from "./LoginForm";
const Login = () => {
  const title = document.getElementsByTagName("title");
  title[0].innerText = "Account - Boom Theme";
  return (
    <>
      <div className="login-header center">
        <h1>ACCOUNT</h1>
        <p>Home / Account</p>
      </div>
      <LoginForm />
    </>
  );
};
export default Login;
