import React from "react";
import style from "./Home.module.css";
import myImage from "../images/sana.jpeg";

const Home = () => {
  return (
    <div className={style.container}>
      <div className={style.parts}>
        <img className={style.pic} src={myImage} alt="photo" />
        <div className={style.content}>
          <p>Hi! I am Sana.</p>
          <br />I have completed Advance Diploma in Software Programming from Delhi
          Skill & Entrepreneur University. In Python Programming, C Programming,
          Problem Solving in Codechef and Web Development.<br/><br/>
          <p>Objective</p>
          Seeking entry-level positions in Software Development and Web development related roles.
        </div>
      </div>
    </div>
  );
};

export default Home;
