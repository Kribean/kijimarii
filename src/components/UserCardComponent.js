import { Card, Row, Col, Image, Container } from "react-bootstrap";
import HallyBerryJpg from "../assets/Halle-Berry.jpg";
import UserContext from "../UserContext";
import { useContext } from "react";

export default function UserCardComponent() {
  const { emitterData } = useContext(UserContext);
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
              <Card.Title>Prénom: {emitterData?.name}</Card.Title>
              <Card.Text>Age: {emitterData?.age}</Card.Text>
              <Card.Text>Description: {emitterData?.description}</Card.Text>
              {emitterData?.religion?.length > 2 && (
                <Card.Text>Religion: {emitterData?.religion}</Card.Text>
              )}
              <Card.Title>A propos de sa recherche</Card.Title>
              <Card.Text>
                Description: {emitterData?.descriptionPartner}
              </Card.Text>
              <Card.Text>
                Valeurs humaine: {emitterData?.tabHumanValues}
              </Card.Text>
              <Card.Text>Age minimum: {emitterData?.agePartnerMin}</Card.Text>
              <Card.Text>Age maximum: {emitterData?.agePartnerMax}</Card.Text>
              <Card.Text>
                Localisation: {emitterData?.city} ({emitterData?.codePostal}) et
                dans un périmètre de {emitterData?.perimeter} km
              </Card.Text>
              {emitterData?.isReligionRelevant && (
                <Card.Text>Religion: {emitterData?.religion}</Card.Text>
              )}
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}
