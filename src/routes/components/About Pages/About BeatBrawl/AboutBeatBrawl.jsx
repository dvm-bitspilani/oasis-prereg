import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import "../about.css";
import MyRegisterationButton from "../MyRegisterationButton";
import MyPaymentButton from "../MyPaymentButton";
export default function AboutBeatBrawl() {
  return (
    <div>
      <Navbar />
      <div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div className="page-container">
          <motion.div className="about-container">
            <div className="about-title">BeatBrawl - A BeatBox Battle</div>
            <div className="about-text">
              BeatBrawl at BITS Pilani is an exciting new addition to the events
              of OASIS 2025, offering a dedicated stage for beatboxing
              enthusiasts to showcase their talent. This powerful art form has
              rapidly gained recognition worldwide for its raw vocal skill,
              rhythmic intensity, and limitless creativity. <br />
              <br />
              OASIS, being one of India’s most popular and widely recognized
              college fests, provides a <b>prestigious national platform </b>for
              participants to perform in front of a large and diverse audience.
              BeatBrawl is designed to promote and elevate this culture among
              the youth, encouraging performance artistry. Participants will be
              evaluated on technique, originality, musicality, breath control,
              complexity, and crowd engagement, ensuring that every performance
              is judged holistically. Beatboxing is a raw and expressive form of
              art that resonates strongly with the youth, making BeatBrawl not
              just a competition but also a celebration of individuality,
              confidence, and artistry — with the added{" "}
              <b>chance to win an exciting cash prize</b> for the winners.
              <br />
              <br />
              <div className="rulebook">Rule Book</div>
              <br />
              <div className="prelim">
                <div className="subtitles">
                  Preliminary Round (Video Submission):
                </div>
                <br />
                <div className="points">
                  <ul>
                    <li>Only solo participants are allowed.</li>
                    <li>
                      Each participant must upload a video 1.5–2 minutes long.
                    </li>
                    <li>
                      The participant’s face must be clearly visible on camera
                      at all times.
                    </li>
                    <li>
                      The recording should be a single continuous take — no
                      edits, layering, or effects.
                    </li>
                    <li>
                      No back vocals, instruments, or backing tracks are
                      permitted in the prelims. Performances must be purely
                      vocal.
                    </li>
                  </ul>
                  <br />
                </div>
              </div>
              <div className="final">
                <div className="subtitles">Finals (On-Stage Performance):</div>
                <br />
                <div className="points">
                  {" "}
                  <ul>
                    <li>
                      Selected finalists will perform live at OASIS 2025 in a{" "}
                      <b>knockout format.</b>{" "}
                    </li>
                    <li>
                      A backing track may be used in the finals to complement
                      the performance, but all beatboxing elements must be live
                    </li>
                    <li>
                      All material must be original — plagiarism or imitating
                      another artist’s routine will lead to disqualification.
                    </li>
                    <li>
                      Performances must stay within the time limit (to be
                      announced); exceeding it may invite penalties.
                    </li>
                    <li>
                      Participants will be evaluated on technique, originality,
                      musicality, breath control, complexity, stage presence,
                      and crowd engagement.
                    </li>
                    <li>
                      <b>
                        Physically touching opponents is strictly prohibited.
                      </b>
                    </li>
                  </ul>
                  <br />
                </div>
              </div>
              <div className="guidelines">
                <div className="subtitles">General Guidelines:</div> <br />
                <div className="points">
                  {" "}
                  <ul>
                    <li>
                      Offensive, disrespectful, or inappropriate content will
                      not be tolerated.
                    </li>
                    <li>
                      The judges’ and the host organisations’s decision is final
                      and binding.
                    </li>
                    <li>
                      By submitting a video, participants grant the organizers
                      permission to use it for promotional purposes.
                    </li>
                  </ul>
                </div>{" "}
              </div>
              {/* <br /> <br />
              Contact details:
              <br />
              <br />
              Gurnaman Kaur - 7985413099
              <br />
              Agniswar Das - 8335028828 */}
            </div>
            <div className="about-buttons-container">
              <Link to="/BeatBrawl/form" className="about-link">
                {/* <motion.button className="about-preregister-button" whileHover={{scale:1.1}} whileTap ={{scale:0.9}}>Register Now</motion.button> */}
                <MyRegisterationButton
                  disabled={
                    localStorage.getItem("beatbrawl_registered") === "true"
                  }
                  argument={localStorage.getItem("beatbrawl_registered")}
                />
              </Link>
              {/* <MyPaymentButton
                disabled={localStorage.getItem("beatbrawl_paid") === "true"}
                argument={localStorage.getItem("beatbrawl_paid")}
                event="beatbrawl"
              /> */}
            </div>
          </motion.div>
        </motion.div>
        {/* </motion.div> */}
      </div>
    </div>
  );
}
