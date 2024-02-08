import { Button, Card, Row, Col, Image, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function KindredCardComponent(props) {
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
              src={props.data?.imageUrl}
              fluid
            />
          </Col>
          <Col md={8} xs={12}>
            <Card.Body>
              <Card.Title>Prénom: {props.data?.name}</Card.Title>
              <Card.Title>Email: {props.data?.email}</Card.Title>
              <Card.Text>Age: {props.data?.age}</Card.Text>
              <Card.Text>Description: {props.data?.description}</Card.Text>
              {props.data?.religion?.length > 2 && (
                <Card.Text>Religion: {props.data?.religion}</Card.Text>
              )}
              <Card.Title>A propos de sa recherche</Card.Title>
              <Card.Text>
                Description: {props.data?.descriptionPartner}
              </Card.Text>
              <Card.Text>
                Valeurs humaine: {props.data?.tabHumanValues}
              </Card.Text>
              <Card.Text>Age minimum: {props.data?.agePartnerMin}</Card.Text>
              <Card.Text>Age maximum: {props.data?.agePartnerMax}</Card.Text>
              <Card.Text>
                Localisation: {props.data?.city} ({props.data?.codePostal}) et
                dans un périmètre de {props.data?.perimeter} km
              </Card.Text>
              {props.data?.isReligionRelevant && (
                <Card.Text>Religion: {props.data?.religion}</Card.Text>
              )}
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
