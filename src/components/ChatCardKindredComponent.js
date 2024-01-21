import { Col, Row, Image } from "react-bootstrap";
import halleBerry from "../assets/Halle-Berry.jpg";

export default function ChatCardKindredComponent() {
  return (
    <>
      <Row className="text-wrap shadow bg-white rounded m-2">
        <Col md={2} xs={12} className="p-0">
          <Image width={42} src={halleBerry} fluid roundedCircle />
        </Col>
        <Col md={10} xs={12}>
          <p className="m-0 text-wrap">ffffffffffff fffffffffffff</p>
          <p>aaaaaaaaaaaaaa</p>
        </Col>
      </Row>
    </>
  );
}
