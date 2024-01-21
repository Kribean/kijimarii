import { Button, Container, Row } from "react-bootstrap";
import DescriptionUserComponent from "../../components/DescriptionUserComponent";

export default function FriendSidePage() {
  return (
    <Container fluid>
      <Row>
        <h1 className="">Hey friends!</h1>
      </Row>
      <Row>
        <p> Jhon l'ami de sqkjjlqkshlqjslkvjqmsv lmsqfkmllkmkf qgf</p>
      </Row>
      <DescriptionUserComponent />

      <div className="d-grid gap-4">
        <Button variant="primary" size="lg">
          Recommander une amie qui répondrait au profil
        </Button>
        <Button variant="secondary" size="lg">
          Partager l'avis à un(e) ami(e) de confiance
        </Button>
      </div>
    </Container>
  );
}
