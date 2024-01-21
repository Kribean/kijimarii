import { Container } from "react-bootstrap";
import KindredCardComponent from "../../components/KindredCardComponent";

export default function KindredSpiritsPage() {
  return (
    <Container fluid>
      <KindredCardComponent />
      <KindredCardComponent />
      <KindredCardComponent />
    </Container>
  );
}
