import React from "react";

const Languages = () => {
  return (
    <>
      <div className="bigPage__holder_title">
        <ruby>
          LANGUAGE <rt> 言語 </rt>
        </ruby>
      </div>

      <div className="bigPage__holder_mainText">
        <p className="bigPage__holder_subtitle">Spoken</p>
        <p className="bigPage__holder_mainText_paragraph">
          Welcome! In terms of communication, my native language happens to be{" "}
          <span className="bigPage__holder_mainText_important">POLISH</span>.
          During my education years I've studied{" "}
          <span className="bigPage__holder_mainText_important">ENGLISH</span>{" "}
          along with{" "}
          <span className="bigPage__holder_mainText_important">FRENCH</span>.
          <span className="bigPage__holder_mainText_ps">
            (French however did not withstand the test of time.)
          </span>
        </p>
        <p className="bigPage__holder_mainText_paragraph">
          In my current stack, I can effortlessly communicate in{" "}
          <span className="bigPage__holder_mainText_important">ENGLISH</span>{" "}
          and <span className="bigPage__holder_mainText_important">POLISH</span>
          . I'm aiming for{" "}
          <span className="bigPage__holder_mainText_important">Japanese</span>{" "}
          next.
        </p>
        <div className="bigPage__holder_mainText_middleFlexBox">
          <div className="flagBox">
            <img src="./gb-eng.svg" alt="" />
            <span>ENGLISH</span>
            <div className="progress">
              <div className="progress-value" style={{ width: "93%" }} />
            </div>
          </div>
          <div className="flagBox">
            <img src="./jp.svg" alt="" />
            <span>JAPANESE</span>
            <div className="progress">
              <div className="progress-value" style={{ width: "30%" }} />
            </div>
          </div>
          <div className="flagBox">
            <img src="./pl.svg" alt="" />
            <span>POLISH</span>
            <div className="progress">
              <div className="progress-value" style={{ width: "90%" }} />
            </div>
          </div>
        </div>
        <p className="bigPage__holder_mainText_paragraph">
          Next, if the occasion arises, I wouldn't mind learning{" "}
          <span className="bigPage__holder_mainText_important">spanish</span>,{" "}
          <span className="bigPage__holder_mainText_important">chinese</span>{" "}
          and <span className="bigPage__holder_mainText_important">german</span>
          .
        </p>
        <div className="bigPage__holder_mainText_middleFlexBox">
          <div className="flagBox">
            <img src="./es.svg" alt="" style={{ opacity: ".7" }} />
            <span>SPANISH</span>
            <div className="progress">
              <div className="progress-value" style={{ width: "0%" }} />
            </div>
          </div>
          <div className="flagBox">
            <img src="./cn.svg" alt="" style={{ opacity: ".7" }} />
            <span>CHINESE</span>
            <div className="progress">
              <div className="progress-value" style={{ width: "0%" }} />
            </div>
          </div>
          <div className="flagBox">
            <img src="./de.svg" alt="" style={{ opacity: ".7" }} />
            <span>German</span>
            <div className="progress">
              <div className="progress-value" style={{ width: "3%" }} />
            </div>
          </div>
        </div>
        <p className="bigPage__holder_subtitle" style={{ marginTop: "65px" }}>
          PROGRAMMING
        </p>
        <p className="bigPage__holder_mainText_paragraph">
          To no one's surprise, I code in{" "}
          <span className="bigPage__holder_mainText_important">Javascript</span>{" "}
          and for a while, that's it.
        </p>
        <div className="bigPage__holder_mainText_middleFlexBox">
          <div className="flagBox">
            <img src="./icons/js.png" style={{ height: "100px" }} alt="" />
            <span>JAVASCRIPT</span>
            <div className="progress">
              <div className="progress-value" style={{ width: "90%" }} />
            </div>
          </div>
        </div>

        <p className="bigPage__holder_mainText_paragraph">
          In the near future I would like to expand more onto languages like{" "}
          <span className="bigPage__holder_mainText_important">Python</span> and{" "}
          <span className="bigPage__holder_mainText_important">Java</span>.
        </p>

        <div className="bigPage__holder_mainText_middleFlexBox">
          <div className="flagBox">
            <img
              src="./icons/python.png"
              style={{ height: "100px", opacity: ".7" }}
              alt=""
            />
            <span>PYTHON</span>
            <div className="progress">
              <div className="progress-value" style={{ width: "0%" }} />
            </div>
          </div>
          <div className="flagBox">
            <img
              src="./icons/java.png"
              style={{ height: "100px", opacity: ".7" }}
              alt=""
            />
            <span>JAVA</span>
            <div className="progress">
              <div className="progress-value" style={{ width: "0%" }} />
            </div>
          </div>
        </div>

        <p
          style={{
            fontFamily: "Franklin Gothic, Gill Sans, sans-serif",
            fontSize: "2rem",
          }}
        >
          Thank You for reading!
        </p>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
};

export default Languages;
