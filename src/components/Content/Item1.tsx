import style from "./Item1.module.scss";
import img1 from "../../assets/image 1 (1).png";
import arrow from "../../assets/arrow_downward_accent.png";
import { TextWithLine } from "../common/TextWithLine";
import { useEffect, useRef, useState } from "react";

export const Item1 = () => {
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
    <div id="section-1" ref={ref} className={style.container}>
      <div className={`${style.imgBox} ${visible && style.inView}`}>
        <img src={img1} alt="" />
      </div>
      <div className={style.info}>
        <TextWithLine
          left
          className={`${style.before} ${visible && style.inView}`}
        >
          EAST nUSA TENGGARA
        </TextWithLine>
        <h2 className={`${visible && style.inView}`}>
          Have you enjoyed your holiday?
        </h2>
        <p className={`${style.description} ${visible && style.inView}`}>
          You will be amazed if you take part in this sailing Komodo island tour
          package. So it is also mandatory for you, besides enjoying Komodo
          tourism on Komodo Island, you also have to taste the marine tourism.
          The beautiful waters of Komodo will make you meet many travelers from
          other countries.
        </p>
        <div className={`${style.link} ${visible && style.inView}`}>
          <a href="#">read more</a>
          <img src={arrow} alt="" />
        </div>
      </div>
    </div>
  );
};
