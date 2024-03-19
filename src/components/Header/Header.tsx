import style from "./Header.module.scss";
import card from "../../assets/cart.png";
import arrow from "../../assets/arrow_downward_24px.png";
import facebook from "../../assets/Path.png";
import instagram from "../../assets/Vector.png";
import twitter from "../../assets/Vector (1).png";
import { TextWithLine } from "../common/TextWithLine";

export const Header = () => {
  return (
    <div className={style.header}>
      <header>
        <span className={style.logo}>QWERy</span>
        <nav>
          <ul>
            <li>Information</li>
            <li>About us</li>
            <li>Culture</li>
          </ul>
        </nav>

        <div className={style.search}>
          <img src={card} alt="" />
          <span>Search</span>
        </div>
      </header>
      <div className={style.title__container}>
        <div className={style.socials}>
          <p>Follow us</p>
          <span>
            <img src={instagram} alt="" />
            <img src={twitter} alt="" />
            <img src={facebook} alt="" />
          </span>
        </div>
        <div className={style.title}>
          <TextWithLine left>explore the Nature Beauty</TextWithLine>
          <h1>
            Discover
            <br />
            <span>Wonderful Indonesia</span>
          </h1>
          <div className={style.scrollDown}>
            <a href="#section-1" className={style.scroll}>
              Scroll down
            </a>
            <img src={arrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
