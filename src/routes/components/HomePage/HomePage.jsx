import React from "react";
import "./HomePage.css";
import bgImage from "../../../assets/rectangle2.png";
import purposeprose from "../../../assets/purposeprose.png";
import scontro from "../../../assets/scontroLogo.png";
import rapwars from "../../../assets/rapwars.png";
import standupsoapbox from "../../../assets/standupsoapbox.png";
import choreo from "../../../assets/choreo.png";
import fashp from "../../../assets/fashp.png";
import pitchperfect from "../../../assets/pitchperfect.png";
import stageplay from "../../../assets/stageplay.png";
import streetdance from "../../../assets/streetdance.png";
import streetplay from "../../../assets/streetplay.png";
import tarang from "../../../assets/tarang.png";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";
import BackButton from "../BackButton/BackButton.jsx";
export default function HomePage() {
  return (
    <>
      <Navbar />
      <div
        className="homepage-container"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="container1">
          <div className="homepage-events-container">
            <Link to="/PurpleProse/About">
              <motion.div
                className="homepage-event-wrapper"
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className="homepage-event-img"
                  style={{
                    backgroundImage: `url(${purposeprose})`,
                    backgroundColor: "black",
                    backgroundPosition: "center",
                    backgroundSize: "150%",
                    backgroundRepeat: "no-repeat",
                    width: "100%",
                  }}
                ></div>
                <span className="homepage-event-name">Purple Prose</span>
              </motion.div>
            </Link>
            <Link to="/RapWars/About">
              <motion.div
                className="homepage-event-wrapper"
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className="homepage-event-img"
                  style={{
                    backgroundImage: `url(${rapwars})`,
                  }}
                ></div>
                <span className="homepage-event-name">Rap Wars</span>
              </motion.div>
            </Link>
            <Link to="/StandupSoapbox/About">
              <motion.div
                className="homepage-event-wrapper"
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className="homepage-event-img"
                  style={{
                    backgroundImage: `url(${standupsoapbox})`,
                  }}
                ></div>
                <span className="homepage-event-name">Standup Soapbox</span>
              </motion.div>
            </Link>
            <Link to="/Scontro/About">
              <motion.div
                className="homepage-event-wrapper"
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className="homepage-event-img"
                  style={{
                    backgroundImage: `url(${scontro})`,
                  }}
                ></div>
                <span className="homepage-event-name">Scontro</span>
              </motion.div>
            </Link>
            <Link to="/Razzmatazz/About">
              <motion.div
                className="homepage-event-wrapper"
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className="homepage-event-img"
                  style={{
                    backgroundImage: `url(${scontro})`,
                  }}
                ></div>
                <span className="homepage-event-name">Razzmatazz</span>
              </motion.div>
            </Link>
            <Link to="/Choreo/About">
              <motion.div
                className="homepage-event-wrapper"
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className="homepage-event-img"
                  style={{
                    backgroundImage: `url(${choreo})`,
                  }}
                ></div>
                <span className="homepage-event-name">Choreo</span>
              </motion.div>
            </Link>
          </div>
          <div className="homepage-events-container">
            <Link to="/FashP/About">
              <motion.div
                className="homepage-event-wrapper"
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className="homepage-event-img"
                  style={{
                    backgroundImage: `url(${fashp})`,
                  }}
                ></div>
                <span className="homepage-event-name">Fash P</span>
              </motion.div>
            </Link>
            <Link to="/PitchPerfect/About">
              <motion.div
                className="homepage-event-wrapper"
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className="homepage-event-img"
                  style={{
                    backgroundImage: `url(${pitchperfect})`,
                  }}
                ></div>
                <span className="homepage-event-name">Pitch Perfect</span>
              </motion.div>
            </Link>
            <Link to="/StagePlay/About">
              <motion.div
                className="homepage-event-wrapper"
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className="homepage-event-img"
                  style={{
                    backgroundImage: `url(${stageplay})`,
                  }}
                ></div>
                <span className="homepage-event-name">StagePlay</span>
              </motion.div>
            </Link>
            <Link to="/StreetDance/About">
              <motion.div
                className="homepage-event-wrapper"
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className="homepage-event-img"
                  style={{
                    backgroundImage: `url(${streetdance})`,
                  }}
                ></div>
                <span className="homepage-event-name">StreetDance</span>
              </motion.div>
            </Link>
            <Link to="/StreetPlay/About">
              <motion.div
                className="homepage-event-wrapper"
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className="homepage-event-img"
                  style={{
                    backgroundImage: `url(${streetplay})`,
                  }}
                ></div>
                <span className="homepage-event-name">StreetPlay</span>
              </motion.div>
            </Link>
            <Link to="/Tarang/About">
              <motion.div
                className="homepage-event-wrapper"
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className="homepage-event-img"
                  style={{
                    backgroundImage: `url(${tarang})`,
                  }}
                ></div>
                <span className="homepage-event-name">Tarang</span>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
