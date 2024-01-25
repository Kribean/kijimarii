import { Button, Modal, Image } from "react-bootstrap";
import ChartContent from "./ChartContent";
import bookPng from "../assets/book.jpg";

export default function ModalChart(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Avant de Finaliser, Charte
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image width={72} src={bookPng} fluid />
        <ChartContent />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => props.onHide()}>J'accepte la charte</Button>
      </Modal.Footer>
    </Modal>
  );
}
