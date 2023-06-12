import React from "react";
import "./styles.scss";
import Software from "./Software";
import Languages from "./Languages";
import ProgrammingSkills from "./ProgrammingSkills";

const Resume = () => {
  return (
    <div className="resume__holder">
      <div className="resume__box">
        <div className="resume__box_pillarLeft">
          <div className="resume__careerEducation">
            <div className="resume__education">
              <div className="resume__category">
                <img
                  className="resume__category_icon"
                  src="./education.svg"
                  alt=""
                />
                Education
              </div>
              <div className="resume__education_div">
                <p className="resume__education_text">
                  High School - Zespół Szkół w Świątnikach Górnych
                </p>
                <p className="resume__education_grey">- 2018</p>
              </div>
              <div className="resume__education_div">
                <p className="resume__education_text resume__education_grey">
                  Metallurgical Engineering IMiIP - AGH University
                </p>
                <p className="resume__education_grey">2018 - dropped out</p>
              </div>
            </div>
            <div className="resume__career">
              <div className="resume__category">
                <img
                  className="resume__category_icon"
                  src="./career.svg"
                  alt=""
                />
                Work experience
              </div>
              <div className="resume__education_div">
                <p className="resume__education_text">
                  Temporary Traffic Management Designer - BricsCad Projects
                </p>
                <p className="resume__education_grey">2018 - now</p>
              </div>
              <div className="resume__education_div">
                <p className="resume__education_text resume__education_grey">
                  Road construction company in Kraków - traffic sign production;
                  in control of a warehouse; managing traffic signs
                </p>
                <p className="resume__education_grey">2021 - 2022</p>
              </div>
            </div>
          </div>
          <div className="resume__skills">
            <ProgrammingSkills />
            <Software />
            <Languages />
          </div>
          <div className="resume__contact">
            <div className="resume__category">
              <img
                className="resume__category_icon"
                src="./contact2.svg"
                style={{ padding: "10px" }}
                alt=""
              />
              Contact
            </div>
            <div className=" resume__contactGroup">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.com/maps/@50.051957,19.9526139,11.75z?entry=ttu"
                className="resume__mediaLink"
              >
                <img
                  src="./address2.svg"
                  alt=""
                  className="resume__contactIcon"
                />
                <p>Cracow, Poland</p>
              </a>
              <div href="" className="resume__mediaLink">
                <img
                  src="./phone2.svg"
                  alt=""
                  className="resume__contactIcon"
                />
                <p>&#40;+48&#41; 789 133 788</p>
              </div>
              <div className="resume__mediaLink">
                <img src="./mail2.svg" alt="" className="resume__contactIcon" />
                <p>saff.christopher@gmail.com</p>
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.christophersaffron.com/"
                className="resume__mediaLink"
              >
                <img src="./home.svg" alt="" className="resume__contactIcon" />
                <p>christophersaffron.com</p>
              </a>
            </div>
          </div>
        </div>

        <div className="resume__box_pillarRight">
          <div className="resume__FaceImgBox">
            <img src="./11.jpg" alt="" className="resume__FaceImg" />
            <p className="resume__name">Krzysztof Szafran</p>
            <p className="resume__description">
              Temporary Traffic Management Designing
            </p>
            <p className="resume__description">Web Development</p>
          </div>
          <div className="resume__aboutMe">
            <p className="resume__category"> About Me </p>
            <p className="resume__categoryText">
              After graduating high school, I've spent most of my time helping
              my father with his work and eventually learning 'the craft and
              tools'. Now I'd like to try expanding into a new field - which is
              Web Development.
            </p>
            <p className="resume__category"> Links </p>
            <div className="resume__categoryFlexGroup">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/krzysztofszafrann/"
                className="resume__mediaLink"
              >
                <img
                  src="./facebook.svg"
                  alt=""
                  className="resume__categoryFlexItem"
                />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/krzysztof-szafran-35806127b/"
                className="resume__mediaLink"
              >
                <img
                  src="./linkedin.svg"
                  alt=""
                  className="resume__categoryFlexItem"
                />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Havir-S"
                className="resume__mediaLink"
              >
                <img
                  src="./github.svg"
                  alt=""
                  className="resume__categoryFlexItem"
                />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://stackoverflow.com/users/10966345/chris-saff"
                className="resume__mediaLink"
              >
                <img
                  src="./stackoverflow.svg"
                  alt=""
                  className="resume__categoryFlexItem"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
