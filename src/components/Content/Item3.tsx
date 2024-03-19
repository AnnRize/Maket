import style from "./Item3.module.scss";
import img1 from "../../assets/01.png";
import arrow from "../../assets/arrow_downward_accent.png";
import { TextWithLine } from "../common/TextWithLine";
import { useEffect, useRef, useState } from "react";

export const Item3 = () => {
  const [visible, setVisible] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const observer = new IntersectionObserver(
    (entries, observer) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
        observer.unobserve(ref.current!);
      }
    },
    { threshold: 0.3 }
  );

  useEffect(() => {
    observer.observe(ref.current!);

    return () => {
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={ref} className={style.container}>
      <div className={style.info}>
        <TextWithLine
          left
          className={`${style.before} ${visible && style.inView}`}
        >
          INDONESIAN CULTURE
        </TextWithLine>
        <h2 className={`${visible && style.inView}`}>
          Our culture here is very friendly to people
        </h2>
        <p className={`${style.description} ${visible && style.inView}`}>
          known for his politeness, manners and gentleness. This becomes a
          characteristic when they mingle with other tribes and become basic
          traits that are passed down by their ancestors.
        </p>
        <div className={`${style.link} ${visible && style.inView}`}>
          <a href="#">read more</a>
          <img src={arrow} alt="" />
        </div>
      </div>
      <div className={`${style.imgBox} ${visible && style.inView}`}>
        <img src={img1} alt="" />
      </div>
    </div>
  );
};
