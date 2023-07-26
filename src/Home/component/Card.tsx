import { Card } from "antd";
import React, { useState } from "react";
import "./flip.css";

interface CardProps {
  title: string;
  body: string;
}

const Cardword: React.FC<CardProps> = ({ title, body }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div
      style={{
        display: "flex",
        height: "50%",
        padding: "1rem",
        perspective: "1000px", //เอฟเฟค 3 D
      }}
    >
      <div
        className={`card-container ${flipped ? "flipped" : ""}`}
        onClick={handleFlip}
      >
        <div className="card">
          <div className="cardfront">
            <Card
              bordered={false}
              style={{
                width: 300,
                height: 300,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h3>{title}</h3>
            </Card>
          </div>
          <div className="cardback">
            <Card bordered={false} style={{ width: 300, height: 300 }}>
              <div style={{ width: "100%", display: "flex" }}>{body}</div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardword;
