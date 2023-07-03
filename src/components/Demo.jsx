import React from "react";
import { Container } from "react-bootstrap";
import video from "../assets/images/png/video_img.png";
import play_btn from "../assets/images/svg/play_logo.svg";
export const Demo = () => {
  return (
    <div className=" bg-black py-sm-5 pb-5 mt-sm-5 position-relative overflow-hidden">
      <div className=" demo_bottom_shadow demo_bottom_position position-absolute"></div>
      <div className=" demo_bottom_shadow demo_top_position position-absolute d-sm-block d-none"></div>
      <div className=" demo_bottom_shadow demo_top_position_2 position-absolute d-sm-block d-none"></div>
      <Container className="what_container py-5 position-relative my-md-5 z-3">
        <span>
          <img src={video} alt="video" className="w-100" />
        </span>
        <div className=" d-flex flex-column align-items-center justify-content-center position-absolute top-50 start-50 translate-middle">
          <span>
            <img src={play_btn} alt="play_btn" className="w-100 pointer" />
          </span>
          <p className=" clr_white text-center fs_xl ff_way fw_500 text-xl-nowwrap mb-0 d-md-block d-none">
            StellerMate app v2.1.0 Demo
          </p>
        </div>
      </Container>
    </div>
  );
};
