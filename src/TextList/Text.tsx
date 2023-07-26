import React from "react";
import Menu from "../Menu";
import Footer from "../Component/Footer";
import { useAppContext } from "../Context/UseAppContext";

const Text = () => {
  const { inputText, action, outputText } = useAppContext();

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
          <div>
            <h1>Text List</h1>
            <p>Input Text: {inputText}</p>
            <p>Action: {action}</p>
            <p>Output Text: {outputText}</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Text;

export {};
