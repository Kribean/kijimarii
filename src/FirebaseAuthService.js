import firebase from "./FirebaseConfig";

const auth = firebase.auth();

const loginWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  return auth.signInWithPopup(provider);
};
const subscribeToAuthChanges = (handleAuthChange) => {
  auth.onAuthStateChanged((user) => {
    handleAuthChange(user);
    console.log("man rivé: ", user);
  });
};

const logoutUser = () => {
  return auth.signOut();
};

const FirebaseAuthService = {
  logoutUser,
  loginWithGoogle,
  subscribeToAuthChanges,
};

export default FirebaseAuthService;
