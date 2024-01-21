import { Container, Row, Col, Form, Button, Nav } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import ChatCardKindredComponent from "../../components/ChatCardKindredComponent";
import ChatBox from "../../components/ChatBox";
import Header from "../../components/Header";
import { useState } from "react";

export default function MessagePage() {
  const [isContactTrigger, setIsContactTrigger] = useState(true);
  return (
    <Container fluid>
      <Header />
      <Row className="my-4">
        <Nav variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link
              eventKey="link-1"
              onClick={() => {
                setIsContactTrigger(true);
              }}
            >
              Contacts
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="link-2"
              onClick={() => {
                setIsContactTrigger(false);
              }}
            >
              Chat
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Row>
      <Row className="h-75">
        <Col
          xs={isContactTrigger ? 12 : 2}
          className={!isContactTrigger ? "d-none" : "d-block"}
        >
          <ChatCardKindredComponent />
          <ChatCardKindredComponent />
        </Col>
        <Col
          xs={!isContactTrigger ? 12 : 2}
          className={isContactTrigger ? "d-none" : "d-block"}
        >
          <Row>ichi</Row>
          <ChatCardKindredComponent />
          <Container
            style={{ height: "100px" }}
            className="overflow-scroll my-4 bg-white h-75"
          >
            <ChatBox
              isUser={true}
              content={"bonjour, ça va je m'appelle Zack et toi comment ça va?"}
              date={"12/12/2024 12:00"}
            />
            <ChatBox
              isUser={false}
              content={
                "Salut, moi ça va Restabat ut Caesar post haec properaret accitus et abstergendae causa suspicionis sororem suam, eius uxorem, Constantius ad se tandem desideratam venire multis fictisque blanditiis hortabatur. quae licet ambigeret metuens saepe cruentum, spe tamen quod eum lenire poterit ut germanum profecta, cum Bithyniam introisset, in statione quae Caenos Gallicanos appellatur, absumpta est vi febrium repentina. cuius post obitum maritus contemplans cecidisse fiduciam qua se fultum existimabat, anxia cogitatione, quid moliretur haerebat."
              }
              date={"12/12/2024 12:00"}
            />
          </Container>
          <Row>
            <Form>
              <Row>
                <InputGroup>
                  <Form.Control
                    as="textarea"
                    aria-label="With textarea"
                    placeholder="Entrer votre message..."
                  />
                  <Button>Envoyer</Button>
                </InputGroup>
              </Row>
            </Form>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
