import React from "react";
import style from "./Banner.module.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Banner = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.left}>
        <div className={style.heading}>
          <h1 className={style.one}>You don’t have to </h1>
          <h1 className={style.two}>Fight them Alone.</h1>
        </div>
        <div className={style.text}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
            curabitur sodales conubia ut inceptos faucibus himenaeos tortor
            eget, hac massa gravida arcu interdum proin curae.
          </p>
        </div>
        <div className={style.emailWrapper}>
          <MailOutlineIcon className={style.emailIcon} />
          <input type="text" placeholder="Enter your eamil address" />
          <button>Let's Talk</button>
        </div>
      </div>
      <div className={style.right}>
        <img className={style.img1} src={require("../../assets/Shape.png")} alt="" />
        <img className={style.img2} src={require("../../assets/Image.png")} alt="" />
      </div>
    </div>
  );
};

export default Banner;
