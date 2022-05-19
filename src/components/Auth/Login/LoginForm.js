import "./loginform.scss";
import { useRef } from "react";
import { Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Ring } from "@uiball/loaders";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseConfig } from "../../../helpers/enviroment/enviroment";
import { authActions } from "../../../store/authSlice";
import { useDispatch } from "react-redux";
import Button from "../../UI/Button";
import googleIcon from "../../../Images/Google.webp";
import firebase from "firebase/compat/app";
import useHttp from "../../../hooks/useHttp";
const LoginForm = () => {
  const { isLoading, error, sendRequest: login } = useHttp();
  const dispatch = useDispatch();
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
  const loginSubmit = (e) => {
    e.preventDefault();
    login(
      {
        url: "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAfROUr-zia4HiB30WdXnmh-dl8EBmHYDo",
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
        const firestore = firebase.firestore();
        const data = firestore
          .collection("users")
          .doc(res.localId)
          .get()
          .then((snapshot) => {
            dispatch(
              authActions.login({
                name: snapshot.data().fname + " " + snapshot.data().lname,
                email: snapshot.data().email,
                id: snapshot.data().user_id,
                photoUrl: null,
              })
            );
          })
          .catch((e) => console.log(e));
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
      <p>Please Sign in your Account</p>
      <div>
        <Form onSubmit={loginSubmit}>
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
          <Button type="submit">Sign in</Button>
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
        <p>New to our platform ?</p>
        <NavLink to="/register">Create an account</NavLink>
      </div>
    </div>
  );
};
export default LoginForm;
