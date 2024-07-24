import React from "react";
import "./about.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./../Navbar/Navbar";

export default function AboutPP() {
  return (
    <>
      <Navbar />
      <div className="page-container">
        <div className="about-container">
          <div className="main-container">
            <div className="contact-title">Contact</div>
            <div className="about-text contact">
              <div className="contact-container">
                <div className="person-details">
                  <p>Avindhya</p>
                  <p>+917802959072</p>
                </div>
                <p className="contact-events">RapWars | Purple Prose</p>
              </div>
              <div className="contact-container">
                <div className="person-details">
                  <p>Loveesha</p>
                  <p>+919876120814</p>
                </div>
                <p className="contact-events">RapWars | Purple Prose</p>
              </div>
              <div className="contact-container">
                <div className="person-details">
                  <p>Hasan Zareb (Co-Ordinator)</p>
                  <p>+918133996076</p>
                </div>
                <p className="contact-events">Razzmatazz</p>
              </div>
              <div className="contact-container">
                <div className="person-details">
                  <p>Shambhavi Sinha (Secretary)</p>
                  <p>+918879593730</p>
                </div>
                <p className="contact-events">Razzmatazz</p>
              </div>
              <div className="contact-container">
                <div className="person-details">
                  <p>Aditya Rana</p>
                  <p>+918869889654</p>
                </div>
                <p className="contact-events">Standup Soapbox</p>
              </div>
              <div className="contact-container">
                <div className="person-details">
                  <p>Vedant Shah</p>
                  <p>+917506553199</p>
                </div>
                <p className="contact-events">Standup Soapbox</p>
              </div>
              <div className="contact-container">
                <div className="person-details">
                  <p>Devasri Bali</p>
                  <p>+919810097764</p>
                </div>
                <p className="contact-events">Standup Soapbox</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
