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
      style={{
        cursor: "pointer",
      }}
    >
      <Row className="text-wrap shadow bg-white rounded m-2">
        <Col md={2} xs={12} className="p-0">
          <Image width={72} src={props.data?.imageUrl} fluid roundedCircle />
        </Col>
        <Col md={8} xs={12}>
          <p className="m-0 text-wrap text-bold">{props.data?.name}</p>
          <p className="m-0 text-wrap">{props.data?.age} ans</p>
          <p className="m-0 text-wrap">
            {props.data?.city} {"(" + props.data?.codePostal + ")"}
          </p>
        </Col>
        {props?.isChatCard && (
          <Col
            md={2}
            xs={12}
            className="p-0 justify-content-center align-items-center text-center p-2"
          >
            <svg
              width="42"
              height="42"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0" />

              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                <path
                  fill="#555"
                  d="M19.295346,12 C19.683732,11.997321 20,12.315434 20,12.7087815 L20,15.9132194 C20,16.3046684 19.6866632,16.6220005 19.3001428,16.6220005 C18.9136223,16.6220005 18.6002855,16.3046684 18.6002855,15.9132194 L18.6006646,14.7880072 C16.7783174,17.8441657 13.3981233,20 9.75558622,20 C5.34669464,20 1.65005079,17.2790232 0.0473577091,13.0847914 C-0.0921406706,12.7197255 0.0869918429,12.3092534 0.447461376,12.1679763 C0.80793091,12.0266992 1.21323498,12.2081158 1.35273336,12.5731817 C2.75210409,16.2353209 5.94083219,18.5824378 9.75558622,18.5824378 C13.1270432,18.5824378 16.2763668,16.4010153 17.7430824,13.4292559 L16.2715084,13.4386023 C15.884997,13.4412853 15.56952,13.1261356 15.566854,12.7346958 C15.5642216,12.343256 15.8754035,12.0237564 16.2619149,12.0210734 L19.295346,12 Z M10.2444138,0 C14.6533054,0 18.3499492,2.72097676 19.9526423,6.9152086 C20.0921407,7.28027447 19.9130082,7.69074656 19.5525386,7.83202368 C19.1920691,7.9733008 18.786765,7.79188418 18.6472666,7.4268183 C17.2478959,3.76467906 14.0591678,1.4175622 10.2444138,1.4175622 C6.87295684,1.4175622 3.72363319,3.59898468 2.25691759,6.57074409 L3.72849164,6.56139765 C4.11500304,6.5587147 4.43048002,6.87386439 4.43314598,7.26530419 C4.43577836,7.65674399 4.12459654,7.97624361 3.73808514,7.97892656 L0.704653993,8 C0.316268039,8.00267895 4.36983782e-13,7.68456603 4.36983782e-13,7.29121854 L4.36983782e-13,4.0867806 C4.36983782e-13,3.69533161 0.31333676,3.3779995 0.699857241,3.3779995 C1.08637772,3.3779995 1.39971448,3.69533161 1.39971448,4.0867806 L1.39933538,5.21199282 C3.22168264,2.1558343 6.60187665,0 10.2444138,0 Z"
                />
              </g>
            </svg>
          </Col>
        )}
      </Row>
    </Container>
  );
}
