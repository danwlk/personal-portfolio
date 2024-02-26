import React from "react";
import { useRef, useState } from "react";
import { Row, Container, Col } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import contactImg from "../../assets/img/contact-img.gif";

const Connect = () => {
  const form = useRef();
  const [buttonText, setButtonText] = useState("Send");

  const sendEmail = (e) => {
    e.preventDefault();

    console.log(form.current);

    setButtonText("Sending...");

    emailjs
      .sendForm("service_9zw9eib", "template_b836v9h", form.current, {
        publicKey: "Wq90UjzhN7jSjgpka",
      })
      .then(
        () => {
          console.log("Message sent successfully!");
          setButtonText("Send");
          form.current.reset();
        },
        (error) => {
          console.log(
            "FAILED... something went wrong, please try again.",
            error.text
          );
          setButtonText("Send");
        }
      );
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Me" />
          </Col>
          <Col md={6}>
            <h2>Connect With Me</h2>

            <form ref={form} onSubmit={sendEmail}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Full Name"
                    required
                  />
                </Col>

                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Email Address"
                    required
                    pattern="[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+"
                  />
                </Col>
                <Col sm={12} className="px-1">
                  <textarea
                    name="message"
                    row="6"
                    placeholder="Write your message here!"
                    required
                  />
                </Col>

                <input type="submit" value={buttonText} />
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Connect;
