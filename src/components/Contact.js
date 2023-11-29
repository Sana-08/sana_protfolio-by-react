import React from "react";
import style from "./Contact.module.css";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className={style.container}>
          <h1>Contact</h1>
      <div className={style.main}>

        <div className={style.content}>
            <Link to="https://github.com/Sana-08">
                <h3>Github link</h3>
            </Link>
            <Link to="https://www.codechef.com/users/sana7860">
            <h3>Codechef link</h3>
            </Link>
            <h3>Gmail : sana22@navgurukul.org</h3>
            <h3>Contact Number : 8368767396 & 9625120847</h3>
        </div>
        <form action="https://formspree.io/f/mvojyrqr" method="post">
          <h3>Get In Touch</h3>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email Id" required />
          <input type="text" name="phone" placeholder="+91" required />
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="How can we help you"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
