import React from "react";
import { Button, Card, Col, Row, Image } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  ReadOutlined,
  SmileFilled,
  UserOutlined,
} from "@ant-design/icons";

function cardprofile() {
  const imageStyle = {
    border: "2px solid #663399 ",
    borderRadius: "50%",
    marginTop: "2rem",
  };

  return (
    <>
      <Card
        title="My Profile"
        style={{
          width: "60%",
          height: "100%",
          marginTop: "4rem",
          marginBottom: "1rem",
        }}
      >
        <Row gutter={[16, 8]} style={{ margin: "2rem" }}>
          <Col span={8}>
            <Image
              style={imageStyle}
              width={200}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          </Col>

          <Col span={16}>
            <div className="information">
              <p>
                <strong>
                  <UserOutlined /> Name:{" "}
                </strong>{" "}
                Phatsorn Puttipong
              </p>
              <p>
                <strong>
                  <MailOutlined /> Email:{" "}
                </strong>
                Preammer36@gmail.com
              </p>
              <p>
                <strong>
                  <PhoneOutlined /> Tel:{" "}
                </strong>
                080-794-7483
              </p>
              <p>
                <strong>
                  <ReadOutlined /> Education:
                </strong>
              </p>
              <p>Bachelor of Information Science (Digital Technology)</p>
              <p>Suranaree University of Technology</p>
              <strong>Introduction</strong>
              <p>
                My name is Phatsorn Puttipong Free content encompasses all works
                in the public domain and also those copyrighted works whose
                licenses honor and uphold the freedoms mentioned above. Because
                the Berne Convention in most countries by default grants
                copyright holders monopolistic control over their creations,
                copyright content must be explicitly declared free, usually by
                the referencing or inclusion of licensing statements from within
                the work.
              </p>
            </div>
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default cardprofile;

export {};
