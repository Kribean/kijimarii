import { Row, Image, ListGroup, Col } from "react-bootstrap";
import halleBerry from "../assets/Halle-Berry.jpg";

export default function DescriptionUserComponent() {
  return (
    <Row>
      <Col xs={12} md={4}>
        <Row>
          <Col xs={4} md={12}>
            <Image width={150} src={halleBerry} roundedCircle fluid />
          </Col>
          <Col xs={8} md={12}>
            <ListGroup>
              <ListGroup.Item>Prénom</ListGroup.Item>
              <ListGroup.Item>Age</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Col>
      <Col>
        <h3>Information sur Jhon: </h3>
        <ListGroup>
          <ListGroup.Item>
            Description: ma description est bla aljlkjlljkk lkj k jl
          </ListGroup.Item>
          <ListGroup.Item>
            Centre d'intérêt ou loisirs: yole, bateau, natation,escrime
          </ListGroup.Item>
          <ListGroup.Item>Religion</ListGroup.Item>
        </ListGroup>
        <h3>Sa recherche: </h3>
        <ListGroup>
          <ListGroup.Item>Recherche une femme</ListGroup.Item>
          <ListGroup.Item>
            Recherche dans le 31 et aux alentours (10km)
          </ListGroup.Item>
          <ListGroup.Item>
            Il est important de partager la même religion
          </ListGroup.Item>
          <ListGroup.Item>
            Préférence: j'aime que la personne.....
          </ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
  );
}
