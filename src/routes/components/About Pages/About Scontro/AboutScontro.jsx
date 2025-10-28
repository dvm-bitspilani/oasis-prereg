import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import "../about.css";
import MyRegisterationButton from "../MyRegisterationButton";
import MyPaymentButton from "../MyPaymentButton";
export default function AboutRapWars() {
  return (
    <div>
      <Navbar />
      <div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div className="page-container" >
          <motion.div className="about-container" >
            <div className="about-title">About Scontro</div>
            <div className="about-text">
              Are you ready to step into the spotlight and command the decks like never before? Scontro, the premier DJ battle at BITS Pilani's Oasis, beckons all aspiring DJs and music virtuosos to step into the limelight and showcase their extraordinary talents. 
<br /><br />Imagine the exhilaration of commanding the decks, channeling your creativity, and crafting an unforgettable symphony of sound. Scontro transcends the realm of mere competition; it's an immersive experience where passion, innovation, and rhythm converge into a mesmerizing sonic spectacle.
<br /><br />Picture yourself standing before an exuberant, music-hungry audience. As you drop your beats, you'll witness the dance floor transform into a pulsating sea of energy, a canvas for your artistic expression, and a testament to the power of music.
<br /><br />This is your moment to seize, transcend boundaries, and make your musical dreams resound through every note. Don't let this extraordinary opportunity elude you. Join us at Scontro, where your beats will set the night ablaze, forging memories that will resonate for a lifetime.
<br /><br />
<section id="online-round">
  <br />
  <h3>Online Round (15 October 2025 – 30 October 2025)</h3>
  <br />
  <ul>
    <li>This would be an online sumission-based round.</li>
    <li>Only one submission per DJ/Group is allowed.</li>
    <li>Participants' sets should include a minimum of 5 songs.</li>
    <li>The total time of the submission must not exceed 10 minutes.</li>
    <li>All genres and subgenres of music are accepted and encouraged.</li>
    <li>Video submissions are compulsory. Only audio submissions will not be accepted.</li>
    <li><strong>The last date to send in your entries is 26th October 2025, 11:59 PM.</strong></li>
    <li>After reviewing the videos, top performers will be picked for the prelims which will take place in the last week of September. Exact dates will be announced soon.</li>
  </ul>
</section>

<section id="prelims">
  <br />
  <h3>Prelims (November 2025)</h3>
  <br />
  <ul>
    <li>This will be an offline round held in our campus on 8th November 2025, on Day 1 of the fest.</li>
    <li>DJs will have to perform for 10 minutes.</li>
    <li>4 finalists will be selected for the final round which will be held live in Oasis’ 25.</li>
  </ul>
</section>

<section id="finals">
  <br />
  <h3>Finals (Oasis - 2025)</h3>
  <br />
  <ul>
    <li>This is a live round where finalists would get the chance to perform in Oasis ‘25 which will take place between the first week of November. Exact dates will be announced soon.</li>
    <li>Each finalist will get 20 minutes of stage time and 5 minutes for soundcheck. For every minute that exceeds the 20-minute limit, participants will incur a penalty, which will be deducted from their total score.</li>
    <li>The contestants must bring their own laptops and other necessary equipment, and they are solely responsible for the safety of their belongings. DJ setup will be provided which includes CDJ 2000 Nexus with DJM 900.</li>
    <li>All participants must carry a valid identity card (Aadhar, PAN Card, Driving License, etc.).</li>
    <li>The event timings will be communicated well in advance.</li>
    <li>The judging criteria will include the following parameters: <em>Creativity/Originality, Audience Appeal, and Overall impact.</em> This will include Track selection, Track flow, and Track compatibility.</li>
    <li>The decision will be final and binding. No protest against any judgment shall be entertained under any circumstances.</li>
    <li>Further details will be communicated to the shortlisted participants.</li>
  </ul>
</section>


              <br />
              <span>Winners get cash prizes worth Rs. 40,000/-</span>
              <br /> <br />
              Contact details:
              <br />
              <br />
              Kanishk - 9499150517
              {/* <br />
              Agniswar Das - 8335028828 */}
            </div>
            <div className="about-buttons-container">
              <Link to="/Scontro/form" className="about-link">
                {/* <motion.button className="about-preregister-button" whileHover={{scale:1.1}} whileTap ={{scale:0.9}}>Register Now</motion.button> */}
                <MyRegisterationButton
                  disabled={
                    localStorage.getItem("scontro_registered") === "true"
                  }
                  argument={localStorage.getItem("scontro_registered")}
                />
              </Link>
               {/* <MyPaymentButton
  disabled={localStorage.getItem('scontro_paid') === 'true'}
  argument={localStorage.getItem('scontro_paid')} event='scontro'
/> */}

            </div>
          </motion.div>
        </motion.div>
        {/* </motion.div> */}
      </div>
    </div>
  );
}
