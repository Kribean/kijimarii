import { useState } from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { Image, Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Routes, Route } from "react-router-dom";
import ProfilPage from "./pages/ProfilPage";
import MessagePage from "./pages/MessagePage";
import HomePage from "./pages/HomePage";
import ShareUserToFriendPage from "./pages/ShareUserToFriendPage";
import CoupleCartoon from "./assets/couple_cartoon.jpg";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";
import CreateProfilSuccessPage from "./pages/CreateProfilSuccessPage";
import KindredSpiritsPage from "./pages/KindredSpiritsPage";
import ChartPage from "./pages/ChartPage";
import FriendSidePage from "./pages/FriendSidePage";
import DateSidePage from "./pages/DateSidePage";
import ShareFriendToFriendPage from "./pages/ShareFriendToFriendPage";
import ShareToKindredPage from "./pages/ShareToKindredPage";

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
