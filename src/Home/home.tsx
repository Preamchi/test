/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect, useContext } from "react";
import AddModal from "./component/AddModal";
import Card from "./component/Card";
import Menu from "../Menu";
import axios from "axios";
import Footer from "../Component/Footer";
import { Row } from "antd";
import { DataPost } from "../Component/interface";
/* import { LoginContext } from "../Context/LoginContext"; */

const home = () => {
  const [post, setPost] = useState<DataPost[]>([]);
  const [newPost, setnewPost] = useState<DataPost[]>([]);
  const url = "https://jsonplaceholder.typicode.com/posts";

  /*   console.log(newPost); */
  // axios API Data
  const postJSON = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts",
  });

  useEffect(() => {
    const getPost = async () => {
      try {
        let response = await postJSON.get("?_limit=8");
        setPost(response.data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    getPost();
  }, []);

  console.log(post);

  const CreatePost = (newpost: DataPost) => {
    axios.post(url, newpost).then((response) => {
      setPost([response.data, ...post]);
      console.log(response.data);
    });
  };

  return (
    <>
      <Menu />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          backgroundImage: 'url("/img/bg1.jpg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        {/*         <h1>User Log In: {username} </h1> */}
        <div style={{ marginLeft: "auto", height: "30%" }}>
          <AddModal handleSubmit={CreatePost} setnewCard={setnewPost} />
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "2rem",
            flexDirection: "column",
            justifyContent: "center",
            padding: "1rem",
          }}
        >
          <Row gutter={[16, 16]}>
            {post.map((Item) => (
              <Card key={Item.id} title={Item.title} body={Item.body} />
            ))}
          </Row>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default home;
