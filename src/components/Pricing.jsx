import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import yesorange from "../assets/images/svg/orange_tick.svg";
import cross from "../assets/images/svg/cross.svg";
const Pricing = () => {
  const [tabs, settabs] = useState("tab2");
  const clickbtn = (data) => {
    settabs(data.target.id);
  };
  return (
    <>
      <section className="bg_earth py-5 position-relative">
        <div className=" position-absolute demo_bottom_shadow earth_shadow_position"></div>
        <Container className="py-5">
          <Row>
            <Col lg={3}></Col>
            <Col lg={9} className=" overflow-x-scroll" data-aos="flip-left">
              <h4 className="text-white mb-4 pb-2 fs_xl ff_way fw_500">
                Pricing Plans
              </h4>
              <table className="overflow-scroll scroolbar_hide">
                <tr>
                  <th></th>
                  <th
                    id="tab1"
                    onClick={clickbtn}
                    className={`clr_white text-center fs_md fw_600 ff_way pricingpointer ${
                      tabs === "tab1" ? "basicbg" : ""
                    }`}
                  >
                    EkosLive Basic
                  </th>
                  <th
                    id="tab2"
                    onClick={clickbtn}
                    className={`clr_white text-center fs_md fw_600 ff_way pricingpointer ${
                      tabs === "tab2" ? "basicbg" : ""
                    }`}
                  >
                    EkosLive Pro
                  </th>
                  <th
                    id="tab3"
                    onClick={clickbtn}
                    className={`clr_white text-center fs_md fw_600 ff_way pricingpointer ${
                      tabs === "tab3" ? "basicbg" : ""
                    }`}
                  >
                    EkosLive Ultimate
                  </th>
                </tr>
                <tr>
                  <th className=" clr_white ff_way fw_400 fs_sm">
                    Online Access
                  </th>
                  <td
                    className={`text-center ${tabs === "tab1" ? "basic" : ""}`}
                  >
                    <img
                      src={yesorange}
                      alt="yesorange"
                      width={28}
                      height={28}
                    />
                  </td>
                  <td
                    className={`text-center ${tabs === "tab2" ? "basic" : ""}`}
                  >
                    <img
                      src={yesorange}
                      alt="yesorange"
                      width={28}
                      height={28}
                    />
                  </td>
                  <td
                    className={`text-center ${tabs === "tab3" ? "basic" : ""}`}
                  >
                    <img
                      src={yesorange}
                      alt="yesorange"
                      width={28}
                      height={28}
                    />
                  </td>
                </tr>
                <tr>
                  <th className="clr_white ff_way fw_400 fs_sm">
                    Cloud Storage
                  </th>
                  <td
                    className={`clr_white text-center ff_man fw_500 fs_md ${
                      tabs === "tab1" ? "basic" : ""
                    }`}
                  >
                    500 MB
                  </td>
                  <td
                    className={`clr_white text-center ff_man fw_500 fs_md ${
                      tabs === "tab2" ? "basic" : ""
                    }`}
                  >
                    5GB
                  </td>
                  <td
                    className={`clr_white text-center ff_man fw_500 fs_md ${
                      tabs === "tab3" ? "basic" : ""
                    }`}
                  >
                    20GB
                  </td>
                </tr>
                <tr>
                  <th className="clr_white ff_way fw_400 fs_sm">
                    Observatory Lease
                  </th>
                  <td
                    className={`text-center ${tabs === "tab1" ? "basic" : ""}`}
                  >
                    <img src={cross} alt="yesorange" width={28} height={28} />
                  </td>
                  <td
                    className={`text-center ${tabs === "tab2" ? "basic" : ""}`}
                  >
                    <img src={cross} alt="yesorange" width={28} height={28} />
                  </td>
                  <td
                    className={`text-center ${tabs === "tab3" ? "basic" : ""}`}
                  >
                    <img
                      src={yesorange}
                      alt="yesorange"
                      width={28}
                      height={28}
                    />
                  </td>
                </tr>
                <tr>
                  <th className="clr_white ff_way fw_400 fs_sm">Spectators</th>
                  <td
                    className={`text-center ${tabs === "tab1" ? "basic" : ""}`}
                  >
                    <img src={cross} alt="yesorange" width={28} height={28} />
                  </td>
                  <td
                    className={`text-center ${tabs === "tab2" ? "basic" : ""}`}
                  >
                    <img
                      src={yesorange}
                      alt="yesorange"
                      width={28}
                      height={28}
                    />
                  </td>
                  <td
                    className={`text-center ${tabs === "tab3" ? "basic" : ""}`}
                  >
                    <img
                      src={yesorange}
                      alt="yesorange"
                      width={28}
                      height={28}
                    />
                  </td>
                </tr>
                <tr>
                  <th className="clr_white ff_way fw_400 fs_sm">
                    Push Notifications
                  </th>
                  <td
                    className={`text-center ${tabs === "tab1" ? "basic" : ""}`}
                  >
                    <img src={cross} alt="yesorange" width={28} height={28} />
                  </td>
                  <td
                    className={`text-center ${tabs === "tab2" ? "basic" : ""}`}
                  >
                    <img
                      src={yesorange}
                      alt="yesorange"
                      width={28}
                      height={28}
                    />
                  </td>
                  <td
                    className={`text-center ${tabs === "tab3" ? "basic" : ""}`}
                  >
                    <img
                      src={yesorange}
                      alt="yesorange"
                      width={28}
                      height={28}
                    />
                  </td>
                </tr>
                <tr>
                  <th className="clr_white ff_way fw_400 fs_sm">
                    Broadcasting
                  </th>
                  <td
                    className={`text-center ${tabs === "tab1" ? "basic" : ""}`}
                  >
                    <img src={cross} alt="yesorange" width={28} height={28} />
                  </td>
                  <td
                    className={`clr_white text-center ff_man fw_500 fs_md ${
                      tabs === "tab2" ? "basic" : ""
                    }`}
                  >
                    Yes, Limited
                  </td>
                  <td
                    className={`clr_white text-center ff_man fw_500 fs_md ${
                      tabs === "tab3" ? "basic" : ""
                    }`}
                  >
                    Yes, Full
                  </td>
                </tr>
                <tr>
                  <th className="clr_white ff_way fw_400 fs_sm">
                    Access Control
                  </th>
                  <td
                    className={`clr_white text-center ff_man fw_500 fs_md ${
                      tabs === "tab1" ? "basic" : ""
                    }`}
                  >
                    Limited
                  </td>
                  <td
                    className={`clr_white text-center ff_man fw_500 fs_md ${
                      tabs === "tab2" ? "basic" : ""
                    }`}
                  >
                    Limited to 5 visitors
                  </td>
                  <td
                    className={`clr_white text-center ff_man fw_500 fs_md ${
                      tabs === "tab3" ? "basic" : ""
                    }`}
                  >
                    Unlimited
                  </td>
                </tr>
                <tr>
                  <th className="clr_white ff_way fw_400 fs_sm">Price</th>
                  <td
                    className={`clr_white text-center ff_man fw_500 fs_md ${
                      tabs === "tab1" ? "basic" : ""
                    }`}
                  >
                    Free
                  </td>
                  <td
                    className={`clr_white text-center ff_man fw_500 fs_md ${
                      tabs === "tab2" ? "basic" : ""
                    }`}
                  >
                    $4.99
                  </td>
                  <td
                    className={`clr_white text-center ff_man fw_500 fs_md ${
                      tabs === "tab3" ? "basic" : ""
                    }`}
                  >
                    $9.99
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td className="py-4 my-2 text-center">
                    <button
                      className={`btn_choseplane border-0 clr_white fs_sm fw_600 ff_man ${
                        tabs === "tab1" ? "bg-green" : "opacity_6 "
                      }}`}
                    >
                      Choose Plan
                    </button>
                  </td>
                  <td className="py-4 my-2 text-center">
                    <button
                      className={`btn_choseplane border-0 clr_white fs_sm fw_600 ff_man ${
                        tabs === "tab2" ? "bg-green" : "opacity_6 "
                      }}`}
                    >
                      Choose Plan
                    </button>
                  </td>
                  <td className="py-4 my-2 text-center">
                    <button
                      className={`btn_choseplane border-0 clr_white fs_sm fw_600 ff_man ${
                        tabs === "tab3" ? "bg-green" : "opacity_6 "
                      }}`}
                    >
                      Choose Plan
                    </button>
                  </td>
                </tr>
              </table>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default Pricing;
