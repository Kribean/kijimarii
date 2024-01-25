import {
  Button,
  Image,
  Row,
  Col,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";
import mailSvg from "../assets/mail-svg.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [popoverMyContacts, setPopoverMyContacts] = useState(false);
  const [popoverMyMails, setPopoverMyMails] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setPopoverMyMails(true);
      setPopoverMyContacts(true);
    }, 500);
  }, []);

  const handleGoToListContact = () => {
    navigate("/list-contacts");
  };
  const handleGoToMsg = () => {
    navigate("/messanger");
  };
  const handleGoToDashboard = () => {
    navigate("/home-user");
  };
  return (
    <Row className="bg-dark text-white text-center justify-content-center align-items-center">
      <Col md={6} xs={12}>
        <Row className="text-center justify-content-center align-items-center">
          <Col md={4} xs={12}>
            <Button
              variant="dark"
              onClick={() => {
                handleGoToDashboard();
              }}
            >
              <p
                style={{ fontSize: "72px" }}
                className="lead m-0 textWinterSoul"
              >
                Kijimarii
              </p>
            </Button>
          </Col>
          <Col md={8} xs={12}>
            <OverlayTrigger
              show={popoverMyContacts}
              defaultShow={true}
              trigger={["hover", "click"]}
              delay={0}
              placement="bottom"
              overlay={
                <Popover
                  id="popover-basic"
                  style={{ zIndex: 50 }}
                  onClick={() => {
                    setPopoverMyContacts(false);
                  }}
                >
                  <Popover.Header as="h3">Aide: Mes contacts</Popover.Header>
                  <Popover.Body>
                    Dans cette section vous trouverez tous les contacts qui ont
                    accepté de vous rencontrer
                  </Popover.Body>
                </Popover>
              }
            >
              <Button
                className="m-4"
                onClick={() => handleGoToListContact()}
                variant="primary"
              >
                Mes contacts
              </Button>
            </OverlayTrigger>
          </Col>
        </Row>
      </Col>
      <Col md={6} xs={12}>
        <OverlayTrigger
          show={popoverMyMails}
          trigger={["hover", "click"]}
          defaultShow={true}
          placement="auto-start"
          delay={0}
          overlay={
            <Popover
              id="popover-basic-2"
              style={{ zIndex: 50 }}
              onClick={() => {
                setPopoverMyMails(false);
              }}
            >
              <Popover.Header as="h3">Aide: Messagerie</Popover.Header>
              <Popover.Body>
                Dans cette section vous trouverez toutes vos discussions
              </Popover.Body>
            </Popover>
          }
        >
          <Button
            variant="primary"
            className="m-4"
            onClick={() => {
              handleGoToMsg();
            }}
          >
            <Image src={mailSvg} width="24" height="24" alt="" />
            <span className="badge badge-primary">9</span>
          </Button>
        </OverlayTrigger>
        <Button className="m-4" variant={"danger"}>
          Se déconnecter
        </Button>
      </Col>
    </Row>
  );
}
