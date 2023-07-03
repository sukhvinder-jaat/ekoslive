import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import asto_1 from "../assets/images/svg/asto_1.svg";
import asto_2 from "../assets/images/svg/asto_2.svg";
import asto_3 from "../assets/images/svg/asto_3.svg";
import asto_4 from "../assets/images/svg/asto_4.svg";
export const Integrations = () => {
  return (
    <div className="bg-black pb-sm-5 pt-5 position-relative inte_shadow">
      <Container className="integrations_container">
        <p className="clr_white ff_way fw_500 fs_xl py-md-5 pt-3 pb-3 text-center">
          Integrations
        </p>
        <Row>
          <Col md={3} sm={4} xs={12} data-aos="zoom-out-right">
            <div className=" inte_box h-100 d-flex flex-column align-items-center justify-content-center">
              <span>
                <img src={asto_1} alt="asto_1" className="w-100" />
              </span>
              <p className=" ff_way fw_600 clr_whiteFa fs_lg mb-0 text-center pt-3">
                Astrobin
              </p>
            </div>
          </Col>
          <Col
            md={3}
            sm={4}
            xs={12}
            className=" mt-4 mt-sm-0"
            data-aos="zoom-out-right"
          >
            <div className=" inte_box h-100 d-flex flex-column align-items-center justify-content-center">
              <span>
                <img src={asto_2} alt="asto_1" className="w-100" />
              </span>
              <p className=" ff_way fw_600 clr_whiteFa fs_lg mb-0 text-center pt-3">
                Telescopius
              </p>
            </div>
          </Col>
          <Col
            md={3}
            sm={4}
            xs={12}
            className=" mt-4 mt-sm-0"
            data-aos="zoom-out-left"
          >
            <div className=" inte_box h-100 d-flex flex-column align-items-center justify-content-center">
              <span>
                <img src={asto_3} alt="asto_1" className="w-100" />
              </span>
              <p className=" ff_way fw_600 clr_whiteFa fs_lg mb-0 text-center pt-3">
                Astrobin
              </p>
            </div>
          </Col>
          <Col
            md={3}
            sm={4}
            xs={12}
            className=" mt-4 mt-md-0"
            data-aos="zoom-out-left"
          >
            <div className=" inte_box h-100 d-flex flex-column position-relative z-3 align-items-center justify-content-center">
              <span>
                <img src={asto_4} alt="asto_1" className="w-100" />
              </span>
              <p className=" ff_way fw_600 clr_whiteFa fs_lg mb-0 text-center pt-3">
                Astrometry.net
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
