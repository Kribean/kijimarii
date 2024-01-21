import { Container, ListGroup, Button } from "react-bootstrap";
import ChartContent from "../../components/ChartContent";

export default function ChartPage() {
  return (
    <Container>
      <h1 className="display-4">
        Avant d'aller plus loin, quelques mots sur Kijimarii
      </h1>
      <ChartContent />
      <Button variant="success">Accepter</Button>
    </Container>
  );
}
