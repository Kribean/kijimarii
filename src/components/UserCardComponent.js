import { Card, Row, Col, Image, Container } from "react-bootstrap";
import HallyBerryJpg from "../assets/Halle-Berry.jpg";

export default function UserCardComponent() {
  return (
    <Container className="px-4" fluid>
      <Card className="p-4 my-4 w-100">
        <Row>
          <Col md={4} xs={12}>
            <Image
              width={"200px"}
              alt="photo de profil"
              src={HallyBerryJpg}
              fluid
            />
          </Col>
          <Col md={8} xs={12}>
            <Card.Body>
              <Card.Title>A propos de Jhon</Card.Title>
              <Card.Text>Description: sdflkjlsjvk lsqdjflkj</Card.Text>
              <Card.Title>A propos de sa recherche</Card.Title>
              <Card.Text>Description: sdflkjlsjvk lsqdjflkj</Card.Text>
              <Card.Text>blabla: sdflkjlsjvk lsqdjflkj</Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}
