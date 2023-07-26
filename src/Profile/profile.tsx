import React, { ReactElement } from "react";
import Menu from "../Menu";
import CardProfile from "./component/cardprofile";
import Footer from "../Component/Footer";
import CardPlay from "./component/Card_Play";

interface Props {}

const profile = () => {
  return (
    <>
      <Menu />
      <div
        style={{
          display: "flex",
          minHeight: "100vh",
          backgroundImage: 'url("/img/bg2.jpg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardProfile />
          <CardPlay />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default profile;

export {};
