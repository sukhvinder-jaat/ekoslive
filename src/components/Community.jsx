import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import com_1 from "../assets/images/svg/com_1.svg";
import com_2 from "../assets/images/svg/com_2.svg";
import com_3 from "../assets/images/svg/com_3.svg";
import com_4 from "../assets/images/svg/com_4.svg";
import com_5 from "../assets/images/svg/com_5.svg";
import com_img from "../assets/images/png/com_img.png";
export const Community = () => {
  return (
    <div className=" big_bg mt_-1 py-5 position-relative">
      <Container className="what_container">
        <p
          className=" ff_way fw_500 clr_whiteFa text-capitalize fs_xl text-sm-start text-center"
          data-aos="fade-down-right"
        >
          Community features
        </p>
        <p
          className="mb-0 clr_white ff_man fw_400 fs_sm text-sm-start text-center"
          data-aos="fade-down-right"
        >
          Join thousands of amateur and expert astrophotographers worldwide.
        </p>
        <Row className=" flex-xl-row flex-column-reverse py-5">
          <Col xl={7} xs={12}>
            <div
              className=" d-flex align-items-center"
              data-aos="fade-down-right"
            >
              <span>
                <img src={com_1} alt="com_1" className="wh_64" />
              </span>
              <div className=" ps-4 ms-3">
                <p className=" clr_orange ff_way fw_600 text-capitalize fs_md mb-0">
                  Popular
                </p>
                <p className="mb-0 clr_white ff_man fw_400 fs_sm">
                  Discover most popular images per region, target, mount, and
                  sensor size.
                </p>
              </div>
            </div>
            {/* 2 */}
            <div
              className=" d-flex align-items-center mt-sm-5 mt-3"
              data-aos="fade-down-right"
            >
              <span>
                <img src={com_2} alt="com_2" className="wh_64" />
              </span>
              <div className=" ps-4 ms-3">
                <p className=" clr_orange ff_way fw_600 text-capitalize fs_md mb-0">
                  Top rated
                </p>
                <p className="mb-0 clr_white ff_man fw_400 fs_sm">
                  Find trending top rated images voted by the community.
                </p>
              </div>
            </div>
            {/* 3 */}
            <div
              className=" d-flex align-items-center mt-sm-5 mt-3"
              data-aos="fade-down-right"
            >
              <span>
                <img src={com_3} alt="com_3" className="wh_64" />
              </span>
              <div className=" ps-4 ms-3">
                <p className=" clr_orange ff_way fw_600 text-capitalize fs_md mb-0">
                  Staff Picks
                </p>
                <p className="mb-0 clr_white ff_man fw_400 fs_sm">
                  Unique and memorable photos selected by our astrophotography
                  staff.
                </p>
              </div>
            </div>
            {/* 4 */}
            <div
              className=" d-flex align-items-center mt-sm-5 mt-3"
              data-aos="fade-down-right"
            >
              <span>
                <img src={com_4} alt="com_4" className="wh_64" />
              </span>
              <div className=" ps-4 ms-3">
                <p className=" clr_orange ff_way fw_600 text-capitalize fs_md mb-0">
                  Targets
                </p>
                <p className="mb-0 clr_white ff_man fw_400 fs_sm">
                  Comprehensive and easy to use target search with advanced
                  planning and filtering capabilities.
                </p>
              </div>
            </div>
            {/* 5 */}
            <div
              className=" d-flex align-items-center mt-sm-5 mt-3"
              data-aos="fade-down-right"
            >
              <span>
                <img src={com_5} alt="com_5" className="wh_64" />
              </span>
              <div className=" ps-4 ms-3">
                <p className=" clr_orange ff_way fw_600 text-capitalize fs_md mb-0">
                  Nearby
                </p>
                <p className="mb-0 clr_white ff_man fw_400 fs_sm">
                  Find who is imaging nearby. Engage with your local community!
                </p>
              </div>
            </div>
          </Col>
          <Col xl={5} xs={12}>
            <span className=" d-xl-none">
              <img
                src={com_img}
                alt="com_img"
                className=" img_custom_hw w-100"
              />
            </span>
          </Col>
          <Col
            xl={5}
            xs={12}
            className="position-absolute bottom-0 end-0 pe-0 d-xl-flex d-none justify-content-end align-items-center transform_img_com"
            data-aos="fade-down-left"
          >
            <span>
              <img
                src={com_img}
                alt="com_img"
                className=" img_custom_hw w-100"
              />
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
