import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Login/login";
import HomePage from "./Home/home";
import BookPost from "./Book/Book_post";
import Profile from "./Profile/profile";
import Text from "./TextList/Text";
import PrivateRoute from "./PrivateRoute";
import { AppContextProvider } from "./Context/UseAppContext";

function App() {
  return (
    <AppContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route element={<PrivateRoute />}>
            <Route path="/Home" element={<HomePage />} />
            <Route path="/BookPost" element={<BookPost />} />
            <Route path="/My Profile" element={<Profile />} />
            <Route path="/Text" element={<Text />} />
          </Route>
        </Routes>
      </Router>
    </AppContextProvider>
  );
}

export default App;
