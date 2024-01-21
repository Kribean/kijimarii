import { Button, Container, Row } from "react-bootstrap";
import DescriptionUserComponent from "../../components/DescriptionUserComponent";
import { useState } from "react";
import ModalDate from "../../components/ModalDate";

export default function DateSidePage() {
  const [user, setUser] = useState();

  const [modalShow, setModalShow] = useState(false);
  return (
    <Container fluid>
      {user ? (
        <></>
      ) : (
        <>
          <Row>
            <h1 className="">Hey friend!</h1>
          </Row>
          <Row>
            <p> Karine l'ami de.....</p>
          </Row>
          <DescriptionUserComponent />
          <p> Seriez vous tenté de discuter avec xxxx? Plus qu'une étape</p>

          <Button
            variant="success"
            size="md"
            onClick={() => setModalShow(true)}
          >
            Oui
          </Button>
        </>
      )}
      <ModalDate show={modalShow} onHide={() => setModalShow(false)} />
    </Container>
  );
}
