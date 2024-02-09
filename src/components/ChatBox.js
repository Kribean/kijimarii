import { Container, Row } from "react-bootstrap";

export default function ChatBox({ isUser, content, date, name }) {
  return (
    <Container
      className={
        isUser
          ? " mb-2 bg-chat-user text-dark shadow my-4 rounded "
          : " text-dark mb-2 bg-chat-receiver shadow my-4 rounded "
      }
      style={{
        marginRight: isUser ? "20px " : "0 ",
        marginLeft: isUser ? "0px " : "20px",
      }}
      fluid
    >
      <Row>
        <p
          className="m-2 p-0 "
          style={{ fontWeight: "bold", fontSize: "12px" }}
        >
          {name + ": "}
        </p>
        <p className="m-2 p-0 text-break">{content}</p>
      </Row>

      <Row>
        <p
          className="m-2 p-0 "
          style={{ fontWeight: "bold", fontSize: "12px" }}
        >
          {date}
        </p>
      </Row>
    </Container>
  );
}
