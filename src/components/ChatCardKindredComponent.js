import { Col, Row, Image, Container } from "react-bootstrap";
import UserContext from "../UserContext";
import { useContext } from "react";

export default function ChatCardKindredComponent(props) {
  const { chatUser } = useContext(UserContext);
  return (
    <Container
      fluid
      onClick={() => {
        props.setIsContactTrigger(false);
      }}
    >
      <Row className="text-wrap shadow bg-white rounded m-2">
        <Col md={2} xs={12} className="p-0">
          <Image width={72} src={chatUser?.imageUrl} fluid roundedCircle />
        </Col>
        <Col md={10} xs={12}>
          <p className="m-0 text-wrap text-bold">{chatUser?.name}</p>
          <p className="m-0 text-wrap">{chatUser?.age} ans</p>
          <p className="m-0 text-wrap">
            {chatUser?.city} {"(" + chatUser?.codePostal + ")"}
          </p>
        </Col>
      </Row>
    </Container>
  );
}
