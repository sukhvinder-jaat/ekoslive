import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import side_img from "../assets/images/png/lest_img.png";
import about_tick from "../assets/images/svg/abot_tick.svg";
export const Lease = () => {
  return (
    <div className="less_bg vh-100 py-sm-5 pb-5 position-relative d-flex align-items-center mt_-1">
      <span
        className=" position-absolute top-50 start-0 translate-middle-y d-none d-xl-block"
        data-aos="zoom-in"
      >
        <img src={side_img} alt="side_img" className="w_90" />
      </span>
      <Container className="what_container">
        <Row>
          <Col
            md={5}
            xs={12}
            className=" d-flex flex-column justify-content-center align-items-sm-start align-items-center"
          >
            <p className="clr_white ff_way text-center fw_500 fs_xl mb-sm-0 mb-4 d-sm-none">
              Lease Observatory
            </p>
            <span className="d-xl-none" data-aos="zoom-in">
              <img src={side_img} alt="side_img" className="w-100" />
            </span>
          </Col>
          <Col
            md={7}
            xs={12}
            className="ps-xl-5 d-flex align-items-center mt-md-0 mt-5"
            data-aos="zoom-in"
          >
            <div className=" ps-xl-5">
              <p className="clr_white ff_way fw_500 fs_xl mb-sm-0 mb-4 d-none d-sm-block">
                Lease Observatory
              </p>
              <div className=" d-flex align-items-center mt-2 tick_hover">
                <span>
                  <img
                    src={about_tick}
                    alt="about_tick"
                    className="about_tick_width"
                  />
                </span>
                <p className="mb-0 clr_lightwhite ff_man fw_400 fs_sm ps-sm-4 ps-2">
                  Fine-grained access control for your observatory.
                </p>
              </div>
              <div className=" d-flex align-items-center mt-3 tick_hover">
                <span>
                  <img
                    src={about_tick}
                    alt="about_tick"
                    className="about_tick_width"
                  />
                </span>
                <p className="mb-0 clr_lightwhite ff_man fw_400 fs_sm ps-sm-4 ps-2">
                  Search globally for observatories that fit your specific needs
                  and budget.
                </p>
              </div>
              <div className=" d-flex align-items-center mt-3 tick_hover">
                <span>
                  <img
                    src={about_tick}
                    alt="about_tick"
                    className="about_tick_width"
                  />
                </span>
                <p className="mb-0 clr_lightwhite ff_man fw_400 fs_sm ps-sm-4 ps-2">
                  Earn income by offering your observatory for lease using
                  flexible plans.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
