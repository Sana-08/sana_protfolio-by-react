import React from "react";
import style from "./Projects.module.css";
import grid from "../images/grid.png";
import bird from "../images/bird.jpg";
import quote from "../images/quote.png";
import song from "../images/song.png";
import imagesearch from "../images/imagesearch.png";
import calculator from "../images/calculator.png";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className={style.container}>
      <h1>Projects</h1>
      <div className={style.all}>
        <div className={style.main}>
          <img className={style.img} src={grid} alt="grid" />
          <h2>Grid poject</h2>
          <p className={style.para}>
            ● Developed skills showcase webpage using HTML, CSS, and JavaScript
            with a grid layout and "ReadMore" buttons.
            <br /> ● Result: Created an attractive and responsive web page
            displaying various skills, including images and descriptions. Users
            can click the "Read More" buttons for additional information.
            <br /> ● Conclusion: Successfully implemented an engaging skill
            showcase webpage, providing users with a visually appealing platform
            to explore different skills.
          </p>
          <Link to="https://sana-08.github.io/Grid-Project/" target="_blank">
            <button className={style.btn}>Click Me</button>
          </Link>
        </div>

        <div className={style.main}>
          <img className={style.img} src={bird} alt="bird" />
          <h2>Bird Bootstrap</h2>
          <p className={style.para}>
            ● The website employs modern design techniques, utilizing a
            user-friendly navigation bar, captivating images, and interactive
            elements, providing visitors with easy access to information and
            fostering engagement.
            <br /> ●This project is a responsive website developed with
            Bootstrap, showcasing a veterinarian's services and love for birds
            through visually appealing sections like image sliders, service
            descriptions, and recent blog posts.
          </p>
          <Link to="https://sana-08.github.io/bootstraap-bird-project/">
            <button className={style.btn}>Click Me</button>
          </Link>
        </div>

        <div className={style.main}>
          <img className={style.img} src={quote} alt="quote" />
          <h2>Quote Slider</h2>
          <p className={style.para}>
            ● The website employs modern design techniques, utilizing a
            user-friendly navigation bar, captivating images, and interactive
            elements, providing visitors with easy access to information and
            fostering engagement.
          </p>
          <Link to="https://sana-08.github.io/Quotes-slider/">
            <button className={style.btn}>Click Me</button>
          </Link>
        </div>
      </div>

      <div className={style.all}>
        <div className={style.main}>
          <img className={style.img} src={song} alt="song" />
          <h2>Song Play</h2>
          <p className={style.para}>
            ● The website employs modern design techniques, utilizing a
            user-friendly navigation bar, captivating images, and interactive
            elements, providing visitors with easy access to information and
            fostering engagement.
          </p>
          <Link to="https://sana-08.github.io/Tune-Vue-js-project/">
            <button className={style.btn}>Click Me</button>
          </Link>
        </div>

        <div className={style.main}>
          <img className={style.img} src={imagesearch} alt="image" />
          <h2>Image Search API</h2>
          <p className={style.para}>
            ● This HTML and JavaScript project creates a simple image search
            engine that allows users to search for images and display the
            results from the Unsplash API. Users can also load more results with
            a "Show more" button.
          </p>
          <Link to="https://sana-08.github.io/Image-search-API/">
            <button className={style.btn}>Click Me</button>
          </Link>
        </div>

        <div className={style.main}>
          <img className={style.img} src={calculator} alt="calculator" />
          <h2>Calculator</h2>
          <p className={style.para}>
            ● Developed a functional and visually appealing calculator with
            clear input and output display using HTML, CSS, and JavaScript.
          </p>
          <Link to="https://sana-08.github.io/Calculator-by-me/">
            <button className={style.btn}>Click Me</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
