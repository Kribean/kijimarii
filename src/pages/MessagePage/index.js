import { Container, Row, Col, Form, Button, Nav } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import ChatCardKindredComponent from "../../components/ChatCardKindredComponent";
import ChatBox from "../../components/ChatBox";
import Header from "../../components/Header";
import { useContext, useEffect, useState } from "react";
import FirebaseFirestoreService from "../../FirebaseFirestoreService";
import UserContext from "../../UserContext";

export default function MessagePage() {
  const { userData, chatUser } = useContext(UserContext);
  const [text, setText] = useState("");
  const [chatAllMessage, setChatAllMessage] = useState([]);
  const [isContactTrigger, setIsContactTrigger] = useState(false);
  const [kinderedUserTab, setKinderedUserTab] = useState([]);

  const handleSendText = () => {
    if (text.length > 0) {
      FirebaseFirestoreService.createDocument("messageKijimarii", {
        autor: userData?.uidAuthor,
        receiver: chatUser?.uidAuthor,
        createdAt: new Date(),
        content: text,
      })
        .then((e) => {
          setText("");
          getAllMessages();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const getAllMessages = () => {
    if (chatUser?.uidAuthor && userData?.uidAuthor) {
      const querieIchi = [
        {
          field: "autor",
          condition: "==",
          value: userData?.uidAuthor,
        },
      ];
      const querieNi = [
        {
          field: "autor",
          condition: "==",
          value: chatUser?.uidAuthor,
        },
      ];
      const promise1 = FirebaseFirestoreService.readDocuments({
        collection: "messageKijimarii",
        queries: querieIchi,
      });
      const promise2 = FirebaseFirestoreService.readDocuments({
        collection: "messageKijimarii",
        queries: querieNi,
      });
      Promise.all([promise1, promise2])
        .then((data) => {
          let allMsg1 = data[0].docs.map((e) => e.data());
          allMsg1 = allMsg1.filter((e) => {
            return e.receiver === chatUser.uidAuthor;
          });

          let allMsg2 = data[1].docs.map((e) => e.data());
          allMsg2 = allMsg2.filter((e) => {
            return e.receiver === userData.uidAuthor;
          });

          let dataForm = [...allMsg1, ...allMsg2];
          dataForm = dataForm.sort(
            (a, b) => a.createdAt.seconds - b.createdAt.seconds
          );
          setChatAllMessage(dataForm);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  function secondsToDate(seconds) {
    const date = new Date(seconds * 1000);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Les mois commencent à 0
    const year = String(date.getFullYear()).slice(-2); // Obtenez les deux derniers chiffres de l'année
    return `${day}/${month}/${year}`;
  }

  useEffect(() => {
    getAllMessages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (userData?.tabInterested) {
      const tabInterested = userData?.tabInterested;
      const queries = tabInterested?.map((element) => {
        return {
          field: "uidAuthor",
          condition: "==",
          value: element,
        };
      });
      const tabQueries = queries?.filter((element) => element.value !== "");
      FirebaseFirestoreService.readDocuments({
        collection: "userKijimarii",
        queries: tabQueries,
      })
        .then((data) => {
          const dataForm = data.docs[0].data();
          setKinderedUserTab([...kinderedUserTab, dataForm]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);

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
      <Row className="h-100 bg-chat-container">
        <Col
          xs={isContactTrigger ? 12 : 2}
          className={!isContactTrigger ? "d-none" : "d-block"}
        >
          {kinderedUserTab?.map((element, index) => {
            return (
              <ChatCardKindredComponent
                key={index}
                data={element}
                setIsContactTrigger={setIsContactTrigger}
                getAllMessages={() => {
                  getAllMessages();
                }}
              />
            );
          })}
        </Col>
        <Col
          xs={!isContactTrigger ? 12 : 2}
          className={isContactTrigger ? "d-none" : "d-block "}
        >
          {chatUser?.uidAuthor && (
            <Row>
              <h1 className="display-4"> Discussion</h1>
            </Row>
          )}
          {chatUser?.uidAuthor && (
            <ChatCardKindredComponent
              data={chatUser}
              setIsContactTrigger={setIsContactTrigger}
              getAllMessages={() => {
                getAllMessages();
              }}
            />
          )}
          {chatUser?.uidAuthor ? (
            <Row className="justify-content-center align-items-center">
              <div
                style={{ height: "500px" }}
                className="overflow-scroll my-4 w-75 bg-chat "
              >
                {chatAllMessage.map((element, index) => {
                  return (
                    <ChatBox
                      key={index}
                      name={
                        element.autor === userData.uidAuthor
                          ? "Moi"
                          : chatUser.name
                      }
                      isUser={element.autor === userData.uidAuthor}
                      content={element.content}
                      date={secondsToDate(element.createdAt.seconds)}
                    />
                  );
                })}
              </div>
              <Row>
                <Form className="p-4 my-4 ">
                  <Row>
                    <InputGroup>
                      <Form.Control
                        value={text}
                        as="textarea"
                        aria-label="With textarea"
                        placeholder="Entrer votre message..."
                        onChange={(e) => {
                          setText(e.target.value);
                        }}
                      />
                      <Button
                        onClick={() => {
                          handleSendText();
                        }}
                      >
                        Envoyer
                      </Button>
                    </InputGroup>
                  </Row>
                </Form>
              </Row>
            </Row>
          ) : (
            <Row className="justify-content-center align-items-center">
              <p className="lead">
                {" "}
                Il faudrait que vous sélectionner un contact. Cliquer sur
                l'onglet Contacts{" "}
              </p>
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  );
}
