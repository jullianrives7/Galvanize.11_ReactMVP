import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { appContext } from "../App";
// import { RiMailSendFill } from "react-icons/all";
// import { SiMinutemailer } from "react-icons/all";

const ContactModal = () => {
  const { showContactModal, setShowContactModal } = useContext(appContext);
  const handleHide = () => setShowContactModal(false);

  return (
    <Modal show={showContactModal} onHide={handleHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Contact Us! </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Recipient</Form.Label>
            <Form.Control type="email" value="@MiLISTEE.team" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message:</Form.Label>
            <Form.Control as="textarea" rows={3} autoFocus />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleHide}>
          Close
        </Button>
        <Button variant="primary">Send Message</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ContactModal;
