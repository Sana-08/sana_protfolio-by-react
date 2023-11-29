import React from "react";
import style from "./Skills.module.css";
import python from "../images/python.png";
import html from "../images/html.png";
import css from "../images/css.png";
import javascript from "../images/js.png";
import bootstrap from "../images/Bootstrap.png";
import react from "../images/react.png";

const Skills = () => {
  return (
    <div className={style.container}>
      <h1 className={style.name}>My Skills</h1>
      <div className={style.main}>
        <div className={style.photo}>
          <img className={style.img} src={python} alt="skill" />
          <p className={style.para}>Python</p>
        </div>
        <div className={style.photo}>
          <img className={style.img} src={html} alt="skill" />
          <p className={style.para}>HTML</p>
        </div>
        <div className={style.photo}>
          <img className={style.img} src={css} alt="skill" />
          <p className={style.para}>CSS</p>
        </div>
      </div>
      <div className={style.main}>
        <div className={style.photo}>
          <img className={style.img} src={javascript} alt="skill" />
          <p className={style.para}>JavaScript</p>
        </div>
        <div className={style.photo}>
          <img className={style.img} src={bootstrap} alt="skill" />
          <p className={style.para}>Bootstrap</p>
        </div>
        <div className={style.photo}>
          <img className={style.img} src={react} alt="skill" />
          <p className={style.para}>React</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
