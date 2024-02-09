import { Container, Row } from "react-bootstrap";
import KindredCardComponent from "../../components/KindredCardComponent";
import Header from "../../components/Header";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../UserContext";
import FirebaseFirestoreService from "../../FirebaseFirestoreService";

export default function KindredSpiritsPage() {
  const { userData } = useContext(UserContext);
  const [kinderedUserTab, setKinderedUserTab] = useState([]);

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
          console.log(dataForm, " :carapuce", data.docs[0].id);
          setKinderedUserTab([...kinderedUserTab, dataForm]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [userData]);

  return (
    <Container fluid>
      <Header />
      <Row>
        <h1 className="display-4">Liste de mes kindred soul</h1>
      </Row>
      {kinderedUserTab?.map((element, index) => {
        return <KindredCardComponent key={index} data={element} />;
      })}
    </Container>
  );
}
