import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightSquare } from "react-bootstrap-icons";
import pfp from "../assets/img/profile-picture.png";

const Banner = () => {
  const toRotate = [
    "Web Developer",
    "Front-End Developer",
    "University of Waterloo Undergrad",
  ];
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const period = 2000;
  const [delta, setDelta] = useState(100);
  const [showUnderscore, setShowUnderscore] = useState(true);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
    // eslint-disable-next-line
  }, [text]);

  useEffect(() => {
    let interval = setInterval(() => {
      setShowUnderscore((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => {
        const min = 40;

        if (prevDelta / 2 <= min) {
          return min;
        } else {
          return prevDelta / 2;
        }
      });
    }

    if (!isDeleting && updatedText === fullText) {
      setDelta(period);
      setIsDeleting(true);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(100);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Doyup Kim`}
              <br />
              <span className="wrap">
                {text}
                {showUnderscore ? "_" : ""}
              </span>
            </h1>
            <p>
              I am a web developer based in Waterloo, Ontario.
              <br />
              I'm currently learning React, Node.js, and MySQL.
              <br />
              My website is almost finished, I will be uploading the final
              product soon.
            </p>
            <button onClick={() => (window.location.href = "#connect")}>
              Connect With Me <ArrowRightSquare size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div id="profile-picture">
              <img src={pfp} alt="profile"></img>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
