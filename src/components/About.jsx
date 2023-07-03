import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import about_tick from "../assets/images/svg/abot_tick.svg";
import about_big from "../assets/images/png/about_img.png";
export const About = () => {
  return (
    <div className="bg-black py-sm-5 pb-5">
      <Container className="about_container py-sm-5 pt-5">
        <Row className=" align-items-center flex-md-row flex-column-reverse py-md-4">
          <Col md={6} xs={12}>
            <p className="clr_white ff_way fw_500 fs_xl mb-sm-0 mb-4 d-none d-sm-block">
              About EkosLive
            </p>
            <div
              className=" d-flex align-items-center mt-2 tick_hover "
              data-aos="fade-down-right"
            >
              <span>
                <img
                  src={about_tick}
                  alt="about_tick"
                  className="about_tick_width"
                />
              </span>
              <p className="mb-0 clr_lightwhite ff_man fw_400 fs_sm ps-sm-4 ps-2">
                Powered by Open Source technologies.
              </p>
            </div>
            <div
              className=" d-flex align-items-center mt-3 tick_hover"
              data-aos="fade-down-right"
            >
              <span>
                <img
                  src={about_tick}
                  alt="about_tick"
                  className="about_tick_width"
                />
              </span>
              <p className="mb-0 clr_lightwhite ff_man fw_400 fs_sm ps-sm-4 ps-2">
                Transforms your astrophotography capture platform
                <span className=" d-lg-block">to the cloud.</span>
              </p>
            </div>
            <div
              className=" d-flex align-items-center mt-3 tick_hover"
              data-aos="fade-down-right"
            >
              <span>
                <img
                  src={about_tick}
                  alt="about_tick"
                  className="about_tick_width"
                />
              </span>
              <p
                className="mb-0 clr_lightwhite ff_man fw_400 fs_sm ps-sm-4 ps-2"
                data-aos="fade-down-right"
              >
                Online community where you can explore, share, and
                <span className=" d-lg-block">
                  collaborate your passion in Astronomy.
                </span>
              </p>
            </div>
            <div
              className=" d-flex align-items-center mt-3 tick_hover"
              data-aos="fade-down-right"
            >
              <span>
                <img
                  src={about_tick}
                  alt="about_tick"
                  className="about_tick_width"
                />
              </span>
              <p className="mb-0 clr_lightwhite ff_man fw_400 fs_sm ps-sm-4 ps-2">
                Access to global community-driven observatories.
                <span className=" d-lg-block">
                  Host and broadcast virtual star parties.
                </span>
              </p>
            </div>
          </Col>
          <Col md={6} xs={12}>
            <p
              className="clr_white ff_way fw_500 fs_xl mb-sm-0 mb-3 text-center d-sm-none"
              data-aos="fade-up-left"
            >
              About EkosLive
            </p>
            <span data-aos="fade-down-right">
              <img src={about_big} alt="about_big" className="w-100" />
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
