import "./reviewForm.scss";
import { Form } from "react-bootstrap";
import Button from "../../../../UI/Button";
const ReviewForm = () => {
  return (
    <div className="review-form">
      <Form>
        <Form.Group className="mb-3" controlId="name">
          <Form.Control type="text" placeholder="Enter your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Control type="email" placeholder="Enter your Email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="comment">
          <textarea
            className="form-control"
            placeholder="Write your comments here"
            rows={7}
          ></textarea>
        </Form.Group>
        <Button type="submit">Send review</Button>
      </Form>
    </div>
  );
};
export default ReviewForm;
