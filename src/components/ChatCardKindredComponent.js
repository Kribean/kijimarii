import { Col, Row, Image, Container } from "react-bootstrap";
import UserContext from "../UserContext";
import { useContext, useEffect } from "react";

export default function ChatCardKindredComponent(props) {
  const { setChatUser } = useContext(UserContext);
  const handleGoToChat = () => {
    if (props.data) {
      setChatUser(props.data);
      props.setIsContactTrigger(false);
      props.getAllMessages();
    }
  };
  useEffect(() => {
    props.getAllMessages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container
      fluid
      onClick={() => {
        handleGoToChat();
      }}
    >
      <Row className="text-wrap shadow bg-white rounded m-2">
        <Col md={2} xs={12} className="p-0">
          <Image width={72} src={props.data?.imageUrl} fluid roundedCircle />
        </Col>
        <Col md={10} xs={12}>
          <p className="m-0 text-wrap text-bold">{props.data?.name}</p>
          <p className="m-0 text-wrap">{props.data?.age} ans</p>
          <p className="m-0 text-wrap">
            {props.data?.city} {"(" + props.data?.codePostal + ")"}
          </p>
        </Col>
      </Row>
    </Container>
  );
}
