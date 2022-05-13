import "./contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { Form } from "react-bootstrap";
import Button from "../UI/Button";
const Contact = () => {
  const title = document.querySelector("title");
  title.innerText = "contact - Boom Theme";
  return (
    <>
      <div className="contact-header center">
        <h1>CONTACT</h1>
        <p>Home / Contact</p>
      </div>
      <div className="location">
        <div className="container">
          <iframe
            title="location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d128134.14317701045!2d31.178674241964476!3d30.057366739719495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1645790907558!5m2!1sen!2seg"
            width="100%"
            height="100%"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-4 contact-info">
              <div className="info">
                <div className="icon">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div>
                  <h5>Phone</h5>
                  <p>
                    <span>Toll-Free:</span> 0803 - 080 - 3081
                  </p>
                  <p>
                    <span>Fax:</span> 0803 - 080 - 3082
                  </p>
                </div>
              </div>
              <div className="info">
                <div className="icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div>
                  <h5>Email</h5>
                  <p>
                    <a href="#">mail@example.com</a>
                  </p>
                  <p>
                    <a href="#">mail@example.com</a>
                  </p>
                </div>
              </div>
              <div className="info">
                <div className="icon">
                  <FontAwesomeIcon icon={faPaperPlane} />
                </div>
                <div>
                  <h5>Address</h5>
                  <p>No: 58 A, East Madison Street, Baltimore, MD, USA 4508</p>
                </div>
              </div>
            </div>
            <div className="col-md-8 contact-form">
              <h3>Contact Form</h3>
              <Form className="form">
                <Form.Group className="mb-3" controlId="Name">
                  <Form.Control type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Email">
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Phone">
                  <Form.Control type="text" placeholder="Phone" />
                </Form.Group>
                <div>
                  <textarea
                    className="form-control"
                    // cols="15"
                    rows={12}
                    placeholder="Message"
                  ></textarea>
                </div>
                <Button type="submit">Send</Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
