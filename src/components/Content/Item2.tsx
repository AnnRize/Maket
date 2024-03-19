import style from "./Item2.module.scss";
import left_arrow from "../../assets/arrow-left.png";
import right_arrow from "../../assets/arrow-right.png";
import arrow from "../../assets/arrow_downward_accent.png";
import { TextWithLine } from "../common/TextWithLine";
import { useEffect, useRef, useState } from "react";

export const Item2 = () => {
  const [visible, setVisible] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const observer = new IntersectionObserver(
    (entries, observer) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
        observer.unobserve(ref.current!);
      }
    },
    { threshold: 0.5 }
  );

  useEffect(() => {
    observer.observe(ref.current!);

    return () => {
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div ref={ref} className={`${style.container} ${visible && style.inView}`}>
      <div className={style.arrows}>
        <button className={style.left_button}>
          <img src={left_arrow} alt="" />
        </button>
        <button className={style.right_button}>
          <img src={right_arrow} alt="" />
        </button>
      </div>

      <div className={style.info}>
        <TextWithLine left right>
          Bromo
        </TextWithLine>
        <h2>Steady your steps, we will climb together!</h2>
        <p className={style.description}>
          Enjoying the vast expanse of the sea of witnessing the splendor of
          Mount Semeru that soars into the sky, and gazing at the beauty of the
          sun moving out of its bed or otherwise enjoying the dim twilight from
          the Bromo ridge is an unforgettable experience when visiting Bromo.
        </p>
        <div className={style.link}>
          <a href="#">read more</a>
          <img src={arrow} alt="" />
        </div>
      </div>
    </div>
  );
};
