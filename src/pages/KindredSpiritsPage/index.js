import { Container, Row } from "react-bootstrap";
import KindredCardComponent from "../../components/KindredCardComponent";
import Header from "../../components/Header";

export default function KindredSpiritsPage() {
  return (
    <Container fluid>
      <Header />
      <Row>
        <h1 className="display-4">Liste de mes kindred soul</h1>
      </Row>
      <KindredCardComponent />
      <KindredCardComponent />
      <KindredCardComponent />
    </Container>
  );
}
