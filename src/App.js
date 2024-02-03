import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import ProfilPage from "./pages/ProfilPage";
import MessagePage from "./pages/MessagePage";
import HomePage from "./pages/HomePage";
import ShareUserToFriendPage from "./pages/ShareUserToFriendPage";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";
import CreateProfilSuccessPage from "./pages/CreateProfilSuccessPage";
import KindredSpiritsPage from "./pages/KindredSpiritsPage";
import ShareFriendToFriendPage from "./pages/ShareFriendToFriendPage";
import ShareToKindredPage from "./pages/ShareToKindredPage";
import UserContext from "./UserContext";
// eslint-disable-next-line no-unused-vars
import firebase from "./FirebaseConfig.js";
import { useState } from "react";
import ExperienceStatusPage from "./pages/ExperienceStatusPage/index.js";

function App() {
  const [userData, setUserData] = useState(null);
  const [userDataId, setUserDataId] = useState(null);
  const [emitterData, setEmitterData] = useState(null);
  const [percentageProfilCompleted, setPercentageProfilCompleted] = useState(0);

  return (
    <Container className="w-100 m-0 p-0" fluid>
      <UserContext.Provider
        value={{
          userData,
          setUserData,
          userDataId,
          setUserDataId,
          percentageProfilCompleted,
          setPercentageProfilCompleted,
          emitterData,
          setEmitterData,
        }}
      >
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/signin" element={<LoginPage />}></Route>
          <Route path="/home-user" element={<UserPage />}></Route>
          <Route path="/profil" element={<ProfilPage />}></Route>
          <Route path="/list-contacts" element={<KindredSpiritsPage />}></Route>
          <Route path="/messanger" element={<MessagePage />}></Route>
          <Route
            path="/user-send-request"
            element={<CreateProfilSuccessPage />}
          ></Route>
          <Route
            path="/experience-status"
            element={<ExperienceStatusPage />}
          ></Route>
          <Route
            path="/send-to-my-friends"
            element={<ShareUserToFriendPage />}
          ></Route>
          <Route
            path="/friends-network/:uid"
            element={<ShareFriendToFriendPage />}
          ></Route>
          <Route
            path="/interested/:uid"
            element={<ShareToKindredPage />}
          ></Route>
        </Routes>
      </UserContext.Provider>
    </Container>
  );
}

export default App;
