import { Button, Container, Row, Image } from "react-bootstrap";
import CopyToClipboard from "react-copy-to-clipboard";
import copySvg from "../assets/copy.svg";

export default function ClipBoardComponent(props) {
  return (
    <Container className="m-4 ">
      <CopyToClipboard text={props.content}>
        <Button
          className="w-100 border border-dark"
          variant="light"
          onClick={() => {
            props.setShow(true);
          }}
        >
          <Row className="justify-content-end">
            <Image style={{ width: "42px" }} src={copySvg} />
          </Row>
          <Row>
            <p>{props.content}</p>
          </Row>
        </Button>
      </CopyToClipboard>
    </Container>
  );
}
