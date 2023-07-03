import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/images/png/nav_logo.png";
import play_store from "../assets/images/svg/play_store.svg";
import app_store from "../assets/images/svg/app_store.svg";
export const MyFooter = () => {
  return (
    <div className="bg_footer pt-5 pb-2 overflow-hidden">
      <Container className="what_container">
        <span data-aos="fade-right">
          <img src={logo} alt="logo" className="w_icon_custom" />
        </span>
        <Row className="pb-5">
          <Col
            lg={4}
            sm={5}
            xs={10}
            className=" mb-4 mb-lg-0"
            data-aos="fade-right"
          >
            <p className=" clr_white fs_sm ff_way fw_400 opacity_06 pe-3">
              Lorem ipsum dolor sit amet consectetur. Neque turpis pellentesque
              vulputate ut pharetra sodales nunc.
            </p>
            <div className=" d-flex align-items-center">
              <span>
                <img
                  src={play_store}
                  alt="play_store"
                  className="w-100 pointer"
                />
              </span>
              <span className="ms-2">
                <img
                  src={app_store}
                  alt="play_store"
                  className="w-100 pointer"
                />
              </span>
            </div>
          </Col>
          <Col
            xs={1}
            className=" d-flex flex-column align-items-center d-sm-none"
            data-aos="fade-right"
          >
            <span className="mb-3 pointer footer_icon">
              <svg
                width="35"
                height="34"
                viewBox="0 0 35 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1.00333"
                  y="1.01517"
                  width="32.6418"
                  height="32.4346"
                  rx="16.2173"
                  fill="white"
                  fill-opacity="0.05"
                  stroke="white"
                  stroke-width="0.720769"
                />
                <path
                  d="M25.7687 12.1426C25.1631 12.4093 24.5126 12.5895 23.8286 12.6709C24.5343 12.2513 25.0623 11.5908 25.314 10.8128C24.651 11.2041 23.9253 11.4796 23.1686 11.6272C22.6598 11.0873 21.9858 10.7294 21.2512 10.6091C20.5167 10.4889 19.7628 10.613 19.1065 10.9622C18.4503 11.3113 17.9284 11.8661 17.6218 12.5402C17.3153 13.2144 17.2414 13.9703 17.4114 14.6905C16.068 14.6235 14.7537 14.2765 13.554 13.672C12.3542 13.0675 11.2958 12.2191 10.4473 11.1818C10.1572 11.6791 9.9904 12.2558 9.9904 12.8698C9.99007 13.4227 10.1271 13.967 10.3892 14.4546C10.6514 14.9422 11.0306 15.358 11.4932 15.665C10.9567 15.648 10.432 15.504 9.96283 15.2448V15.288C9.96278 16.0634 10.2327 16.8149 10.7267 17.415C11.2207 18.0151 11.9084 18.4269 12.6732 18.5805C12.1755 18.7144 11.6537 18.7341 11.1472 18.6382C11.363 19.3053 11.7833 19.8887 12.3493 20.3067C12.9152 20.7247 13.5986 20.9563 14.3036 20.9691C13.1068 21.9028 11.6287 22.4093 10.1072 22.4071C9.83764 22.4071 9.56834 22.3915 9.30066 22.3602C10.8451 23.3471 12.643 23.8708 14.4791 23.8688C20.6947 23.8688 24.0926 18.7528 24.0926 14.3157C24.0926 14.1716 24.089 14.026 24.0825 13.8818C24.7434 13.4068 25.3139 12.8186 25.7673 12.1448L25.7687 12.1426Z"
                  fill="white"
                />
              </svg>
            </span>
            <span className="mb-3 pointer footer_icon">
              <svg
                width="35"
                height="34"
                viewBox="0 0 35 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1.00333"
                  y="1.17044"
                  width="32.6418"
                  height="32.4346"
                  rx="16.2173"
                  fill="white"
                  fill-opacity="0.05"
                  stroke="white"
                  stroke-width="0.720769"
                />
                <path
                  d="M17.3243 15.1356C16.0766 15.1356 15.0584 16.1475 15.0584 17.3874C15.0584 18.6274 16.0766 19.6393 17.3243 19.6393C18.572 19.6393 19.5902 18.6274 19.5902 17.3874C19.5902 16.1475 18.572 15.1356 17.3243 15.1356ZM24.1203 17.3874C24.1203 16.4549 24.1288 15.5309 24.0761 14.6001C24.0234 13.5189 23.7753 12.5594 22.9797 11.7688C22.1825 10.9765 21.2187 10.7316 20.1308 10.6792C19.1924 10.6268 18.2626 10.6353 17.326 10.6353C16.3877 10.6353 15.4578 10.6268 14.5212 10.6792C13.4333 10.7316 12.4678 10.9782 11.6722 11.7688C10.875 12.5611 10.6285 13.5189 10.5758 14.6001C10.5231 15.5326 10.5316 16.4566 10.5316 17.3874C10.5316 18.3182 10.5231 19.244 10.5758 20.1748C10.6285 21.2559 10.8767 22.2154 11.6722 23.006C12.4695 23.7983 13.4333 24.0433 14.5212 24.0956C15.4595 24.148 16.3894 24.1396 17.326 24.1396C18.2643 24.1396 19.1941 24.148 20.1308 24.0956C21.2187 24.0433 22.1842 23.7966 22.9797 23.006C23.777 22.2138 24.0234 21.2559 24.0761 20.1748C24.1305 19.244 24.1203 18.3199 24.1203 17.3874ZM17.3243 20.8522C15.3949 20.8522 13.8379 19.3048 13.8379 17.3874C13.8379 15.4701 15.3949 13.9227 17.3243 13.9227C19.2536 13.9227 20.8107 15.4701 20.8107 17.3874C20.8107 19.3048 19.2536 20.8522 17.3243 20.8522ZM20.9535 14.5899C20.503 14.5899 20.1393 14.2284 20.1393 13.7808C20.1393 13.3331 20.503 12.9716 20.9535 12.9716C21.404 12.9716 21.7677 13.3331 21.7677 13.7808C21.7679 13.8871 21.7469 13.9923 21.706 14.0906C21.6651 14.1888 21.6052 14.2781 21.5295 14.3532C21.4539 14.4284 21.3641 14.488 21.2652 14.5286C21.1664 14.5692 21.0605 14.5901 20.9535 14.5899Z"
                  fill="white"
                />
              </svg>
            </span>
            <span className=" pointer footer_icon">
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1.00333"
                  y="1.32596"
                  width="32.6418"
                  height="32.4346"
                  rx="16.2173"
                  fill="white"
                  fill-opacity="0.05"
                  stroke="white"
                  stroke-width="0.720769"
                />
                <g clip-path="url(#clip0_1_566)">
                  <path
                    d="M23.8069 10.6911C22.6972 10.1937 21.5078 9.82614 20.2639 9.61712C20.2529 9.615 20.2414 9.61637 20.2311 9.62101C20.2209 9.62566 20.2123 9.63337 20.2067 9.64306C20.0543 9.90903 19.8846 10.2557 19.7657 10.5296C18.4465 10.3337 17.1053 10.3337 15.7861 10.5296C15.6536 10.2261 15.5042 9.93009 15.3386 9.64306C15.333 9.63325 15.3245 9.62537 15.3143 9.62048C15.304 9.61558 15.2925 9.61391 15.2813 9.61568C14.0382 9.8247 12.8487 10.1923 11.7383 10.6903C11.7288 10.6943 11.7207 10.7011 11.7151 10.7098C9.45809 14.0073 8.83943 17.2234 9.14332 20.3991C9.14416 20.4069 9.14659 20.4144 9.15046 20.4212C9.15432 20.428 9.15954 20.434 9.1658 20.4388C10.4832 21.3919 11.9525 22.118 13.5124 22.5866C13.5232 22.59 13.5349 22.59 13.5457 22.5866C13.5566 22.5833 13.5662 22.5768 13.5733 22.5679C13.9084 22.121 14.2072 21.6489 14.4625 21.153C14.4777 21.1242 14.4632 21.0896 14.4327 21.0781C13.9642 20.9027 13.5103 20.6911 13.075 20.4452C13.0672 20.4408 13.0606 20.4345 13.0559 20.4269C13.0511 20.4193 13.0483 20.4107 13.0477 20.4017C13.0471 20.3928 13.0488 20.3839 13.0526 20.3757C13.0563 20.3676 13.062 20.3605 13.0692 20.3551C13.1606 20.2881 13.252 20.2182 13.339 20.1483C13.3469 20.142 13.3563 20.138 13.3663 20.1367C13.3763 20.1354 13.3864 20.137 13.3956 20.1411C16.2438 21.4125 19.3283 21.4125 22.1431 20.1411C22.1523 20.1367 22.1626 20.135 22.1727 20.1361C22.1828 20.1373 22.1925 20.1412 22.2004 20.1476C22.2875 20.2182 22.3781 20.2881 22.4702 20.3551C22.4775 20.3604 22.4833 20.3674 22.4872 20.3755C22.4911 20.3835 22.4929 20.3924 22.4924 20.4014C22.492 20.4103 22.4894 20.419 22.4847 20.4266C22.4801 20.4343 22.4736 20.4407 22.4659 20.4452C22.0322 20.6932 21.581 20.9029 21.1074 21.0774C21.1002 21.08 21.0935 21.0841 21.088 21.0895C21.0825 21.0949 21.0781 21.1013 21.0753 21.1085C21.0725 21.1157 21.0713 21.1233 21.0717 21.131C21.0721 21.1387 21.0741 21.1462 21.0777 21.153C21.3388 21.6482 21.6376 22.1196 21.9662 22.5672C21.973 22.5764 21.9825 22.5832 21.9934 22.5868C22.0043 22.5905 22.0161 22.5906 22.0271 22.5874C23.5896 22.12 25.0614 21.3936 26.3802 20.4388C26.3866 20.4343 26.392 20.4285 26.396 20.4218C26.4 20.4151 26.4025 20.4076 26.4034 20.3998C26.766 16.7282 25.7956 13.5381 23.8294 10.7112C23.8246 10.7021 23.8166 10.6949 23.8069 10.6911ZM14.8882 18.4653C14.0309 18.4653 13.3238 17.6948 13.3238 16.7499C13.3238 15.8042 14.0172 15.0344 14.8882 15.0344C15.7658 15.0344 16.4664 15.8107 16.4526 16.7499C16.4526 17.6955 15.7593 18.4653 14.8882 18.4653ZM20.6723 18.4653C19.8143 18.4653 19.1079 17.6948 19.1079 16.7499C19.1079 15.8042 19.8005 15.0344 20.6723 15.0344C21.5499 15.0344 22.2505 15.8107 22.2367 16.7499C22.2367 17.6955 21.5506 18.4653 20.6723 18.4653Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_566">
                    <rect
                      width="17.4066"
                      height="17.2985"
                      fill="white"
                      transform="translate(9.07117 7.45239)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </Col>
          <Col lg={7} xs={11}>
            <Row>
              <Col
                md={3}
                sm={4}
                xs={6}
                className="ps-lg-5 ps-3"
                data-aos="fade-right"
              >
                <p className=" clr_white ff_way fw_500 fs_sm">Main</p>
                <ul className=" mb-0 ps-0">
                  <li>
                    <a
                      href="#"
                      className=" ff_man fw_400 clr_white opacity_08 mb-3"
                    >
                      About
                    </a>
                  </li>
                  <li className="mt_10">
                    <a href="#" className=" ff_man fw_400 clr_white opacity_08">
                      Features
                    </a>
                  </li>
                  <li className="mt_10">
                    <a href="#" className=" ff_man fw_400 clr_white opacity_08">
                      Pricing
                    </a>
                  </li>
                  <li className="mt_10">
                    <a href="#" className=" ff_man fw_400 clr_white opacity_08">
                      Support
                    </a>
                  </li>
                  <li className="mt_10">
                    <a href="#" className=" ff_man fw_400 clr_white opacity_08">
                      FAQs
                    </a>
                  </li>
                </ul>
              </Col>
              <Col
                md={3}
                sm={4}
                xs={6}
                className="ps-lg-3 ps-2"
                data-aos="fade-right"
              >
                <p className=" clr_white ff_way fw_500 fs_sm">Useful links</p>
                <ul className=" mb-0 ps-0">
                  <li>
                    <a
                      href="#"
                      className=" ff_man fw_400 clr_white opacity_08 mb-3"
                    >
                      Quis ac
                    </a>
                  </li>
                  <li className="mt_10">
                    <a href="#" className=" ff_man fw_400 clr_white opacity_08">
                      Fermentum justo
                    </a>
                  </li>
                  <li className="mt_10">
                    <a href="#" className=" ff_man fw_400 clr_white opacity_08">
                      Ornare eu
                    </a>
                  </li>
                  <li className="mt_10">
                    <a href="#" className=" ff_man fw_400 clr_white opacity_08">
                      Sagittis fringilla
                    </a>
                  </li>
                  <li className="mt_10">
                    <a href="#" className=" ff_man fw_400 clr_white opacity_08">
                      Platea libero
                    </a>
                  </li>
                </ul>
              </Col>
              <Col
                md={3}
                sm={4}
                xs={6}
                className="ps-lg-3 ps-sm-2 ps-3 pt-4"
                data-aos="fade-right"
              >
                <p className=" clr_white ff_way fw_500 fs_sm">Dashboard </p>
                <ul className=" mb-0 ps-0">
                  <li>
                    <a
                      href="#"
                      className=" ff_man fw_400 clr_white opacity_08 mb-3"
                    >
                      Profile
                    </a>
                  </li>
                  <li className="mt_10">
                    <a href="#" className=" ff_man fw_400 clr_white opacity_08">
                      Target
                    </a>
                  </li>
                  <li className="mt_10">
                    <a href="#" className=" ff_man fw_400 clr_white opacity_08">
                      Steller
                    </a>
                  </li>
                  <li className="mt_10">
                    <a href="#" className=" ff_man fw_400 clr_white opacity_08">
                      Sagittis fringilla
                    </a>
                  </li>
                </ul>
              </Col>
              <Col
                md={3}
                sm={4}
                xs={6}
                className="ps-lg-3 ps-md-2 ps-3 pt-md-0 mt-4"
                data-aos="fade-right"
              >
                <p className=" clr_white ff_way fw_500 fs_sm">Other </p>
                <ul className=" mb-0 ps-0">
                  <li>
                    <a
                      href="#"
                      className=" ff_man fw_400 clr_white opacity_08 mb-3"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li className="mt_10">
                    <a
                      href="#"
                      className=" ff_man fw_400 clr_white opacity_08 text-nowrap"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li className="mt_10">
                    <a href="#" className=" ff_man fw_400 clr_white opacity_08">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col
            xs={1}
            className=" flex-column align-items-center pt-4 d-sm-flex d-none"
            data-aos="fade-down-right"
          >
            <span className="mb-3 pointer footer_icon">
              <svg
                width="35"
                height="34"
                viewBox="0 0 35 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1.00333"
                  y="1.01517"
                  width="32.6418"
                  height="32.4346"
                  rx="16.2173"
                  fill="white"
                  fill-opacity="0.05"
                  stroke="white"
                  stroke-width="0.720769"
                />
                <path
                  d="M25.7687 12.1426C25.1631 12.4093 24.5126 12.5895 23.8286 12.6709C24.5343 12.2513 25.0623 11.5908 25.314 10.8128C24.651 11.2041 23.9253 11.4796 23.1686 11.6272C22.6598 11.0873 21.9858 10.7294 21.2512 10.6091C20.5167 10.4889 19.7628 10.613 19.1065 10.9622C18.4503 11.3113 17.9284 11.8661 17.6218 12.5402C17.3153 13.2144 17.2414 13.9703 17.4114 14.6905C16.068 14.6235 14.7537 14.2765 13.554 13.672C12.3542 13.0675 11.2958 12.2191 10.4473 11.1818C10.1572 11.6791 9.9904 12.2558 9.9904 12.8698C9.99007 13.4227 10.1271 13.967 10.3892 14.4546C10.6514 14.9422 11.0306 15.358 11.4932 15.665C10.9567 15.648 10.432 15.504 9.96283 15.2448V15.288C9.96278 16.0634 10.2327 16.8149 10.7267 17.415C11.2207 18.0151 11.9084 18.4269 12.6732 18.5805C12.1755 18.7144 11.6537 18.7341 11.1472 18.6382C11.363 19.3053 11.7833 19.8887 12.3493 20.3067C12.9152 20.7247 13.5986 20.9563 14.3036 20.9691C13.1068 21.9028 11.6287 22.4093 10.1072 22.4071C9.83764 22.4071 9.56834 22.3915 9.30066 22.3602C10.8451 23.3471 12.643 23.8708 14.4791 23.8688C20.6947 23.8688 24.0926 18.7528 24.0926 14.3157C24.0926 14.1716 24.089 14.026 24.0825 13.8818C24.7434 13.4068 25.3139 12.8186 25.7673 12.1448L25.7687 12.1426Z"
                  fill="white"
                />
              </svg>
            </span>
            <span className="mb-3 pointer footer_icon">
              <svg
                width="35"
                height="34"
                viewBox="0 0 35 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1.00333"
                  y="1.17044"
                  width="32.6418"
                  height="32.4346"
                  rx="16.2173"
                  fill="white"
                  fill-opacity="0.05"
                  stroke="white"
                  stroke-width="0.720769"
                />
                <path
                  d="M17.3243 15.1356C16.0766 15.1356 15.0584 16.1475 15.0584 17.3874C15.0584 18.6274 16.0766 19.6393 17.3243 19.6393C18.572 19.6393 19.5902 18.6274 19.5902 17.3874C19.5902 16.1475 18.572 15.1356 17.3243 15.1356ZM24.1203 17.3874C24.1203 16.4549 24.1288 15.5309 24.0761 14.6001C24.0234 13.5189 23.7753 12.5594 22.9797 11.7688C22.1825 10.9765 21.2187 10.7316 20.1308 10.6792C19.1924 10.6268 18.2626 10.6353 17.326 10.6353C16.3877 10.6353 15.4578 10.6268 14.5212 10.6792C13.4333 10.7316 12.4678 10.9782 11.6722 11.7688C10.875 12.5611 10.6285 13.5189 10.5758 14.6001C10.5231 15.5326 10.5316 16.4566 10.5316 17.3874C10.5316 18.3182 10.5231 19.244 10.5758 20.1748C10.6285 21.2559 10.8767 22.2154 11.6722 23.006C12.4695 23.7983 13.4333 24.0433 14.5212 24.0956C15.4595 24.148 16.3894 24.1396 17.326 24.1396C18.2643 24.1396 19.1941 24.148 20.1308 24.0956C21.2187 24.0433 22.1842 23.7966 22.9797 23.006C23.777 22.2138 24.0234 21.2559 24.0761 20.1748C24.1305 19.244 24.1203 18.3199 24.1203 17.3874ZM17.3243 20.8522C15.3949 20.8522 13.8379 19.3048 13.8379 17.3874C13.8379 15.4701 15.3949 13.9227 17.3243 13.9227C19.2536 13.9227 20.8107 15.4701 20.8107 17.3874C20.8107 19.3048 19.2536 20.8522 17.3243 20.8522ZM20.9535 14.5899C20.503 14.5899 20.1393 14.2284 20.1393 13.7808C20.1393 13.3331 20.503 12.9716 20.9535 12.9716C21.404 12.9716 21.7677 13.3331 21.7677 13.7808C21.7679 13.8871 21.7469 13.9923 21.706 14.0906C21.6651 14.1888 21.6052 14.2781 21.5295 14.3532C21.4539 14.4284 21.3641 14.488 21.2652 14.5286C21.1664 14.5692 21.0605 14.5901 20.9535 14.5899Z"
                  fill="white"
                />
              </svg>
            </span>
            <span className=" pointer footer_icon">
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1.00333"
                  y="1.32596"
                  width="32.6418"
                  height="32.4346"
                  rx="16.2173"
                  fill="white"
                  fill-opacity="0.05"
                  stroke="white"
                  stroke-width="0.720769"
                />
                <g clip-path="url(#clip0_1_566)">
                  <path
                    d="M23.8069 10.6911C22.6972 10.1937 21.5078 9.82614 20.2639 9.61712C20.2529 9.615 20.2414 9.61637 20.2311 9.62101C20.2209 9.62566 20.2123 9.63337 20.2067 9.64306C20.0543 9.90903 19.8846 10.2557 19.7657 10.5296C18.4465 10.3337 17.1053 10.3337 15.7861 10.5296C15.6536 10.2261 15.5042 9.93009 15.3386 9.64306C15.333 9.63325 15.3245 9.62537 15.3143 9.62048C15.304 9.61558 15.2925 9.61391 15.2813 9.61568C14.0382 9.8247 12.8487 10.1923 11.7383 10.6903C11.7288 10.6943 11.7207 10.7011 11.7151 10.7098C9.45809 14.0073 8.83943 17.2234 9.14332 20.3991C9.14416 20.4069 9.14659 20.4144 9.15046 20.4212C9.15432 20.428 9.15954 20.434 9.1658 20.4388C10.4832 21.3919 11.9525 22.118 13.5124 22.5866C13.5232 22.59 13.5349 22.59 13.5457 22.5866C13.5566 22.5833 13.5662 22.5768 13.5733 22.5679C13.9084 22.121 14.2072 21.6489 14.4625 21.153C14.4777 21.1242 14.4632 21.0896 14.4327 21.0781C13.9642 20.9027 13.5103 20.6911 13.075 20.4452C13.0672 20.4408 13.0606 20.4345 13.0559 20.4269C13.0511 20.4193 13.0483 20.4107 13.0477 20.4017C13.0471 20.3928 13.0488 20.3839 13.0526 20.3757C13.0563 20.3676 13.062 20.3605 13.0692 20.3551C13.1606 20.2881 13.252 20.2182 13.339 20.1483C13.3469 20.142 13.3563 20.138 13.3663 20.1367C13.3763 20.1354 13.3864 20.137 13.3956 20.1411C16.2438 21.4125 19.3283 21.4125 22.1431 20.1411C22.1523 20.1367 22.1626 20.135 22.1727 20.1361C22.1828 20.1373 22.1925 20.1412 22.2004 20.1476C22.2875 20.2182 22.3781 20.2881 22.4702 20.3551C22.4775 20.3604 22.4833 20.3674 22.4872 20.3755C22.4911 20.3835 22.4929 20.3924 22.4924 20.4014C22.492 20.4103 22.4894 20.419 22.4847 20.4266C22.4801 20.4343 22.4736 20.4407 22.4659 20.4452C22.0322 20.6932 21.581 20.9029 21.1074 21.0774C21.1002 21.08 21.0935 21.0841 21.088 21.0895C21.0825 21.0949 21.0781 21.1013 21.0753 21.1085C21.0725 21.1157 21.0713 21.1233 21.0717 21.131C21.0721 21.1387 21.0741 21.1462 21.0777 21.153C21.3388 21.6482 21.6376 22.1196 21.9662 22.5672C21.973 22.5764 21.9825 22.5832 21.9934 22.5868C22.0043 22.5905 22.0161 22.5906 22.0271 22.5874C23.5896 22.12 25.0614 21.3936 26.3802 20.4388C26.3866 20.4343 26.392 20.4285 26.396 20.4218C26.4 20.4151 26.4025 20.4076 26.4034 20.3998C26.766 16.7282 25.7956 13.5381 23.8294 10.7112C23.8246 10.7021 23.8166 10.6949 23.8069 10.6911ZM14.8882 18.4653C14.0309 18.4653 13.3238 17.6948 13.3238 16.7499C13.3238 15.8042 14.0172 15.0344 14.8882 15.0344C15.7658 15.0344 16.4664 15.8107 16.4526 16.7499C16.4526 17.6955 15.7593 18.4653 14.8882 18.4653ZM20.6723 18.4653C19.8143 18.4653 19.1079 17.6948 19.1079 16.7499C19.1079 15.8042 19.8005 15.0344 20.6723 15.0344C21.5499 15.0344 22.2505 15.8107 22.2367 16.7499C22.2367 17.6955 21.5506 18.4653 20.6723 18.4653Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_566">
                    <rect
                      width="17.4066"
                      height="17.2985"
                      fill="white"
                      transform="translate(9.07117 7.45239)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </Col>
        </Row>
      </Container>
      <hr className="footer_line" />
      <p
        className=" ff_man fw_400 clr_white opacity_08 text-center"
        data-aos="fade-right"
      >
        Copyright@2023 | All Rights Reserved
      </p>
    </div>
  );
};