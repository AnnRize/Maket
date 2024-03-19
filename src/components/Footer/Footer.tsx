import style from "./Footer.module.scss";
import facebook from "../../assets/Path.png";
import instagram from "../../assets/Vector.png";
import twitter from "../../assets/Vector (1).png";
import arrow from "../../assets/Path (1).png";

export const Footer = () => {
  return (
    <footer>
      <div className={style.block_1}>
        <p className={style.logo}>QWERy</p>
        <div className={style.start}>
          <p>Ready to explore?</p>
          <button>Get started</button>
        </div>
      </div>

      <div className={style.block_2}>
        <div className={style.form}>
          <p>Let's go on vacation, Make your day</p>
          <div className={style.input}>
            <input type="text" placeholder="Email address" />
            <button>
              <img src={arrow} alt="" />
            </button>
          </div>
        </div>
        <div className={style.links_container}>
          <div className={style.links}>
            <ul>
              <li>Services</li>
              <li>Email Marketing</li>
              <li>Campaigns</li>
              <li>Branding</li>
              <li>Offline</li>
            </ul>
          </div>
          <div className={style.links}>
            <ul>
              <li>About</li>
              <li>Our Story</li>
              <li>Benefits</li>
              <li>Team</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className={style.links}>
            <ul>
              <li>Help</li>
              <li>FAQs</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={style.block_3}>
        <div className={style.terms}>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div className={style.socials}>
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
          <img src={instagram} alt="" />
        </div>
      </div>

      <div className={style.block_4}>
        <p>Copyright 2021 QWERy</p>
      </div>
    </footer>
  );
};
