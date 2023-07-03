import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import circle from "../assets/images/png/support_circle.png";
import image_3 from "../assets/images/svg/sup_peg.svg";
export const Supported = () => {
  return (
    <div className=" bg-black py-5">
      <Container className=" py-5 what_container">
        <Row className=" align-items-center position-relative support_shadow py-sm-5">
          <Col
            md={6}
            xs={12}
            className=" d-flex justify-content-center align-items-center flex-column"
          >
            <p className="d-sm-none clr_white ff_way fw_500 fs_xl mb-5">
              Supported Platforms
            </p>
            <span
              className=" position-relative sup_img"
              data-aos="zoom-in-down"
            >
              <span className=" position-absolute peg_position">
                <img
                  src={image_3}
                  alt="image_3"
                  className="w-100 Scale_animation"
                />
              </span>
              <img src={circle} alt="circle" className="w-100" />
            </span>
          </Col>
          <Col
            md={6}
            xs={12}
            className=" pt-5 pt-md-0 d-flex flex-column align-items-center align-items-sm-start"
            data-aos="zoom-in-up"
          >
            <p className="d-sm-block d-none clr_white ff_way fw_500 fs_xl mb-0">
              Supported Platforms
            </p>
            <p className=" opacity_06 clr_white ff_man fw_400 fs_sm text-center text-sm-start lh_180p pt-1">
              Out of the box support for StellarMate, Linux, and MacOS using
              KStars.
              <span className=" d-xl-block">
                3rd party integrations planned for popular capture software.
              </span>
            </p>
            <button className="ff_man position-relative button_hover overflow-hidden clr_white fw_400 fs_sm sign_btn  bg_orange border-0 btn_shadow_hero mt-sm-4 mt-3">
              Learn More
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
