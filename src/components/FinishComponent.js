import { Container, Row } from "react-bootstrap";

export default function FinishComponent() {
  return (
    <Container className="bg-light">
      <Row>
        <h1 className="h1">
          L'expérience est fini, merci d'avoir participé à l'expérience
        </h1>
      </Row>

      <Row>
        <p>L'utilisateur a trouvé une personne et cloturé l'expérience.</p>
      </Row>
    </Container>
  );
}
