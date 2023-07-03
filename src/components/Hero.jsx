import React from "react";
import MyNav from "./MyNav";
import { Container } from "react-bootstrap";

export const Hero = () => {
  return (
    <div className=" bg_hero vh-100 d-flex flex-column pb-5">
      <MyNav />
      <Container className=" d-flex flex-column justify-content-end flex-grow-1 position-relative z-n1 pt-5 p_0_1920 hero_container">
        <p className=" ff_way fw_400 clr_white fs_xxl lh-sm text-capitalize mb-sm-0 mb-2">
          Your ultimate <span className=" clr_orange">cloud </span>
          <span className=" d-lg-block">astrophotography platform</span>
        </p>
        <div className=" d-flex justify-content-between align-items-sm-center align-items-start flex-column flex-sm-row">
          <p className=" opacity_06 fw_400 ff_man clr_white mb-0">
            Capture, share, and explore the sky from anywhere and at any time.
          </p>
          <button className="ff_man position-relative button_hover overflow-hidden clr_white fw_400 fs_sm sign_btn  bg_orange border-0 mb-4 btn_shadow_hero mt-lg-0 mt-3">
            Discover
          </button>
        </div>
      </Container>
    </div>
  );
};
