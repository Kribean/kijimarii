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
// eslint-disable-next-line no-unused-vars
import firebase from "./FirebaseConfig.js";

function App() {
  return (
    <Container className="w-100 m-0 p-0" fluid>
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
          path="/send-to-my-friends"
          element={<ShareUserToFriendPage />}
        ></Route>
        <Route
          path="/friends-network"
          element={<ShareFriendToFriendPage />}
        ></Route>
        <Route path="/interested" element={<ShareToKindredPage />}></Route>
      </Routes>
    </Container>
  );
}

export default App;
