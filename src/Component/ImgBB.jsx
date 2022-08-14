import React from "react";
import { BsFacebook } from "react-icons/bs";

const Imgbb = () => {
  return (
    <>
      <section className="imgbb">
        <div className="cel"></div>
        <ImgCom
          cname="People Name"
          para="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
          img="https://www.seekpng.com/png/detail/57-576498_man-face-png-happy-people-face-png.png"
        />
        <ImgCom
          cname="People Name"
          para="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
          img="https://www.seekpng.com/png/detail/57-576498_man-face-png-happy-people-face-png.png"
        />
        <ImgCom
          cname="People Name"
          para="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
          img="https://www.seekpng.com/png/detail/57-576498_man-face-png-happy-people-face-png.png"
        />

        <div className="cela"></div>
      </section>
    </>
  );
};

const ImgCom = (props) => {
  return (
    <>
      <div className="imgCom">
        <img src={props.img} alt="kddkl" />

        <h1 className="h1">{props.cname}</h1>
        <p> {props.para} </p>

        <div className="icon">
          <BsFacebook />
          <BsFacebook />
          <BsFacebook />
          <BsFacebook />
        </div>
      </div>
    </>
  );
};

export default Imgbb;
