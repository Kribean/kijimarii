import { Button, Card, Row, Col, Image, Container } from "react-bootstrap";
import HallyBerryJpg from "../assets/Halle-Berry.jpg";
import { useNavigate } from "react-router-dom";

export default function KindredCardComponent() {
  const navigate = useNavigate();
  const handleGoToChat = () => {
    navigate("/messanger");
  };
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
              <Card.Title>Card Title</Card.Title>
              <Card.Text>Description: sdflkjlsjvk lsqdjflkj</Card.Text>
              <Card.Text>Email: sdflkjlsjvk lsqdjflkj</Card.Text>
              <Button
                variant="primary"
                onClick={() => {
                  handleGoToChat();
                }}
              >
                Discuter
              </Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}
