import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import imager_what from "../assets/images/png/what_img.png";
export const What = () => {
  return (
    <div className=" bg-black py-5 mt_-1">
      <Container className="what_container py-5">
        <Row className="py-sm-5">
          <Col
            md={6}
            xs={12}
            className=" d-flex flex-sm-row flex-column align-items-center justify-content-center"
          >
            <p className="d-sm-none clr_white ff_way fw_500 fs_xl mb-sm-0 mb-4">
              What is EkosLive?
            </p>
            <span
              className=" position-relative what_shadow"
              data-aos="fade-right"
            >
              <img
                src={imager_what}
                alt="imager_what"
                className="w-100 Scale_animation"
              />
            </span>
          </Col>
          <Col md={6} xs={12} className=" pt-md-0 pt-5" data-aos="fade-left">
            <p className="d-sm-block d-none clr_white ff_way fw_500 fs_xl mb-0">
              What is EkosLive?
            </p>
            <p className=" opacity_06 clr_white ff_man fw_400 fs_sm lh_180p pt-1">
              EkosLive is an online cloud-based App to remotely control your
              observatory from anywhere and at any time. Store, search, share,
              and tag your images. Get notifications about the imaging progress,
              live-stack deep sky targets, and invite others to join your
              session. Engage with the astrophotography community and discover
              new targets and equipment. Use it on your phone, tablet, or
              computer.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
