import "./registerForm.scss";
import { useRef } from "react";
import { Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseConfig } from "../../../helpers/enviroment/enviroment";
import { doc, setDoc } from "firebase/firestore";
import { Ring } from "@uiball/loaders";
import { authActions } from "../../../store/authSlice";
import { useDispatch } from "react-redux";
import Button from "../../UI/Button";
import googleIcon from "../../../Images/Google.webp";
import useHttp from "../../../hooks/useHttp";
import firebase from "firebase/compat/app";
const RegisterForm = () => {
  const { isLoading, error, sendRequest: signup } = useHttp();
  const dispatch = useDispatch();
  const fname = useRef();
  const lname = useRef();
  const email = useRef();
  const password = useRef();
  const app = firebase.initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch(
          authActions.login({
            name: result.user.displayName,
            email: result.user.email,
            id: result.user.uid,
            photoUrl: result.user.photoURL,
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const signUpSubmit = (e) => {
    e.preventDefault();
    const db = firebase.firestore();
    signup(
      {
        url: "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAfROUr-zia4HiB30WdXnmh-dl8EBmHYDo",
        method: "POST",
        body: {
          email: email.current.value,
          password: password.current.value,
          returnSecureToken: true,
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      (res) => {
        setDoc(doc(db, "users", res.localId), {
          fname: fname.current.value,
          lname: lname.current.value,
          user_id: res.localId,
          email: res.email,
        });
        dispatch(
          authActions.login({
            name: fname.current.value + " " + lname.current.value,
            email: res.email,
            id: res.localId,
            photoUrl: null,
          })
        );
      }
    );
  };
  return (
    <div className="login-form">
      {isLoading && (
        <div className="center">
          <Ring size={40} lineWeight={5} speed={2} color="#ff5936" />
        </div>
      )}
      <p>Please Sign up your Account</p>
      <div>
        <Form onSubmit={signUpSubmit}>
          <Form.Group className="mb-3" controlId="fname">
            <Form.Control type="text" placeholder="First Name" ref={fname} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="lname">
            <Form.Control type="text" placeholder="Last Name" ref={lname} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Control type="email" placeholder="Email" ref={email} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Control
              type="password"
              placeholder="Password"
              ref={password}
            />
          </Form.Group>
          {error && <p>{error}</p>}
          <Button type="submit">Sign up</Button>
        </Form>
      </div>
      <span className="or">or</span>
      <div className="social-login">
        <div className="google" onClick={signInWithGoogle}>
          <img src={googleIcon} alt="googleIcon" />
          <span>Continue with Google</span>
        </div>
      </div>
      <div className="create">
        <p>Have an account ?</p>
        <NavLink to="/login">Log in now</NavLink>
      </div>
    </div>
  );
};
export default RegisterForm;
