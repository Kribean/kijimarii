import { Container, Row } from "react-bootstrap";

export default function ChatBox({ isUser, content, date }) {
  return (
    <Container
      className=" shadow my-4 "
      style={{
        marginRight: isUser ? "20px " : "0 ",
        marginLeft: isUser ? "0px " : "20px",
      }}
      fluid
    >
      <Row className={isUser ? "mb-2 bg-primary text-white " : "mb-2 bg-light"}>
        <p className="m-0 p-0">{content}</p>
      </Row>

      <Row>
        <p> {date}</p>
      </Row>
    </Container>
  );
}
