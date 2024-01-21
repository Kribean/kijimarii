import { Button, Card } from "react-bootstrap";
import HallyBerryJpg from "../assets/Halle-Berry.jpg";

export default function KindredCardComponent() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={HallyBerryJpg} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
