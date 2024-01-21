import { Button, Modal, Image } from "react-bootstrap";
import googleImg from "../assets/google-svg.svg";
import ChartContent from "./ChartContent";
export default function ModalDate(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Plus qu'un pas!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Lorsque vous accepterez, votre espace messagerie sera créé et vous
          pourrez discuter avec xxxxx. Aussi votre email sera communiquer à xxxx
        </p>
        <ChartContent />
      </Modal.Body>
      <Modal.Footer>
        <Button variant={"info"} onClick={props.onHide}>
          <Image src={googleImg} width={24} fluid className="m-4" />
          Accepter et se connecter avec Google{" "}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
