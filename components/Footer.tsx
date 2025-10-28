// components/Footer.tsx
"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="occom-footer">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="footer-logo">
                    <a href="/">
                        <img width="228" height="70"
                            src="https://staging.occominternet.com/wp-content/uploads/2024/12/Group.png"
                            className="attachment-full size-full wp-image-117564" alt="" />
                    </a>

                </div>
            </div>
        </div>
        <div className="row row-footer-menu-sec">
            <div className="col-md-2">
                <div className="footer-menu-list">
                    <h4 className="footer-menu-title">
                        Residential
                    </h4>
                    <ul className="footer-menu-list-item">
                        <li className="fmenu-list-item"><a href="#">nbn® Plans</a></li>
                        <li className="fmenu-list-item"><a href="#">nbn® FTTP Upgrade</a></li>
                        <li className="fmenu-list-item"><a href="#">OptiComm Fibre</a></li>
                        <li className="fmenu-list-item"><a href="#">RedTrain Fibre</a></li>
                        <li className="fmenu-list-item"><a href="#">SUPA Networks</a></li>
                        <li className="fmenu-list-item"><a href="#">Vodafone Mobile SIM Bundle</a></li>
                        <li className="fmenu-list-item"><a href="#">Telstra Mobile Broadband Bundle</a></li>
                        <li className="fmenu-list-item"><a href="#">Telstra Mobile SIM Bundle</a></li>
                        <li className="fmenu-list-item"><a href="#">Home Phone</a></li>
                        <li className="fmenu-list-item"><a href="#">Microsoft 365 Home</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-md-2">
                <div className="footer-menu-list">
                    <h4 className="footer-menu-title">
                        Business
                    </h4>
                    <ul className="footer-menu-list-item">
                        <li className="fmenu-list-item"><a href="#">4S Business Fibre</a></li>
                        <li className="fmenu-list-item"><a href="#">Business Fibre</a></li>
                        <li className="fmenu-list-item"><a href="#">Business Wi-Fi</a></li>
                        <li className="fmenu-list-item"><a href="#">Small Business nbn®</a></li>
                        <li className="fmenu-list-item"><a href="#">Enterprise nbn®</a></li>
                        <li className="fmenu-list-item"><a href="#">Business Phone</a></li>
                        <li className="fmenu-list-item"><a href="#">Business Mobile</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-md-2">
                <div className="footer-menu-list">
                    <h4 className="footer-menu-title">
                        Tailored Solutions
                    </h4>
                    <ul className="footer-menu-list-item">
                        <li className="fmenu-list-item"><a href="#">Gaming</a></li>
                        <li className="fmenu-list-item"><a href="#">Streaming</a></li>
                        <li className="fmenu-list-item"><a href="#">Work From Home</a></li>
                        <li className="fmenu-list-item"><a href="#">Study From Home</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-md-2">
                <div className="footer-menu-list">
                    <h4 className="footer-menu-title">
                        Support
                    </h4>
                    <ul className="footer-menu-list-item">
                        <li className="fmenu-list-item"><a href="#">Help Centre</a></li>
                        <li className="fmenu-list-item"><a href="#">Contact Us</a></li>
                        <li className="fmenu-list-item"><a href="#">Outage</a></li>
                        <li className="fmenu-list-item"><a href="#">Dealer</a></li>
                        <li className="fmenu-list-item"><a href="#">Complaint</a></li>
                        <li className="fmenu-list-item"><a href="#">Refer A Friend</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-md-2">
                <div className="footer-menu-list">
                    <h4 className="footer-menu-title">
                        Policies
                    </h4>
                    <ul className="footer-menu-list-item">
                        <li className="fmenu-list-item"><a href="#">Fair Use Policy</a></li>
                        <li className="fmenu-list-item"><a href="#">Privacy Policy</a></li>
                        <li className="fmenu-list-item"><a href="#">Financial Hardship</a></li>
                        <li className="fmenu-list-item"><a href="#">All Policies</a></li>
                        <li className="fmenu-list-item"><a href="#">Additional Charge</a></li>
                        <li className="fmenu-list-item"><a href="#">Terms and Conditions</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-md-2">
                <div className="footer-menu-list">
                    <h4 className="footer-menu-title">
                        About Occom
                    </h4>
                    <ul className="footer-menu-list-item">
                        <li className="fmenu-list-item"><a href="#">4S Business Fibre</a></li>
                        <li className="fmenu-list-item"><a href="#">Our Story</a></li>
                        <li className="fmenu-list-item"><a href="#">Testimonials</a></li>
                        <li className="fmenu-list-item"><a href="#">How We Compare</a></li>
                        <li className="fmenu-list-item"><a href="#">Blogs</a></li>
                    </ul>
                </div>
                <div className="connect-now">
                    <div className="connect-now-title">
                        <h4>Connect Now & Follow</h4>
                    </div>
                    <div className="connect-sm-inner">
                        <div className="sm-icon-follow">
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29"
                                    fill="none">
                                    <path
                                        d="M14 1.62012C6.89804 1.62012 1.11996 7.3982 1.11996 14.5001C1.11996 16.7177 1.69284 18.8984 2.77924 20.8225L1.14068 26.6689C1.08692 26.861 1.139 27.0671 1.27788 27.2099C1.38484 27.3202 1.53044 27.3801 1.67996 27.3801C1.72476 27.3801 1.77012 27.3745 1.81436 27.3639L7.91612 25.8524C9.77924 26.8526 11.8776 27.3801 14 27.3801C21.1019 27.3801 26.88 21.602 26.88 14.5001C26.88 7.3982 21.1019 1.62012 14 1.62012ZM20.4792 19.0451C20.2036 19.8078 18.882 20.5039 18.247 20.5974C17.6769 20.6808 16.9556 20.7167 16.1638 20.468C15.6839 20.3168 15.0679 20.1164 14.2788 19.7798C10.962 18.3652 8.79588 15.0674 8.63012 14.8496C8.46492 14.6317 7.27996 13.0794 7.27996 11.4728C7.27996 9.86612 8.13396 9.07596 8.43748 8.74892C8.741 8.42188 9.09884 8.34012 9.31948 8.34012C9.54012 8.34012 9.7602 8.34292 9.9534 8.35188C10.1567 8.36196 10.4294 8.27516 10.6976 8.91244C10.9732 9.56652 11.6345 11.1732 11.7163 11.3372C11.7992 11.5008 11.854 11.6917 11.7443 11.9096C11.6345 12.1274 11.5796 12.2635 11.4139 12.4544C11.2481 12.6454 11.0667 12.88 10.9177 13.0268C10.752 13.1897 10.58 13.3661 10.7727 13.6932C10.9653 14.0202 11.6289 15.0892 12.6123 15.955C13.8751 17.0672 14.9408 17.4121 15.2712 17.5756C15.6016 17.7392 15.7948 17.7117 15.9874 17.4939C16.18 17.2755 16.814 16.5402 17.034 16.2137C17.2541 15.8872 17.4748 15.941 17.7783 16.0502C18.0818 16.1588 19.7075 16.9484 20.0379 17.112C20.3683 17.2755 20.5889 17.3572 20.6718 17.4933C20.7547 17.6288 20.7547 18.2829 20.4792 19.0451Z"
                                        fill="#E96B57"></path>
                                </svg>
                            </a>
                        </div>
                        <div className="sm-icon-follow">
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29"
                                    fill="none">
                                    <path
                                        d="M8.95993 2.18018C4.94473 2.18018 1.67993 5.44498 1.67993 9.46018V19.5402C1.67993 23.5554 4.94473 26.8202 8.95993 26.8202H19.0399C23.0551 26.8202 26.3199 23.5554 26.3199 19.5402V9.46018C26.3199 5.44498 23.0551 2.18018 19.0399 2.18018H8.95993ZM20.7199 6.66018C21.3359 6.66018 21.8399 7.16418 21.8399 7.78018C21.8399 8.39618 21.3359 8.90018 20.7199 8.90018C20.1039 8.90018 19.5999 8.39618 19.5999 7.78018C19.5999 7.16418 20.1039 6.66018 20.7199 6.66018ZM13.9999 8.34018C17.3991 8.34018 20.1599 11.101 20.1599 14.5002C20.1599 17.8994 17.3991 20.6602 13.9999 20.6602C10.6007 20.6602 7.83993 17.8994 7.83993 14.5002C7.83993 11.101 10.6007 8.34018 13.9999 8.34018ZM13.9999 9.46018C11.2223 9.46018 8.95993 11.7226 8.95993 14.5002C8.95993 17.2778 11.2223 19.5402 13.9999 19.5402C16.7775 19.5402 19.0399 17.2778 19.0399 14.5002C19.0399 11.7226 16.7775 9.46018 13.9999 9.46018Z"
                                        fill="#E96B57"></path>
                                </svg>
                            </a>
                        </div>
                        <div className="sm-icon-follow">
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29"
                                    fill="none">
                                    <path
                                        d="M22.96 2.74023H5.03999C3.49439 2.74023 2.23999 3.99463 2.23999 5.54023V23.4602C2.23999 25.0058 3.49439 26.2602 5.03999 26.2602H22.96C24.5056 26.2602 25.76 25.0058 25.76 23.4602V5.54023C25.76 3.99463 24.5056 2.74023 22.96 2.74023ZM9.51999 11.7002V22.3402H6.15999V11.7002H9.51999ZM6.15999 8.60343C6.15999 7.81943 6.83199 7.22023 7.83999 7.22023C8.84799 7.22023 9.48079 7.81943 9.51999 8.60343C9.51999 9.38743 8.89279 10.0202 7.83999 10.0202C6.83199 10.0202 6.15999 9.38743 6.15999 8.60343ZM21.84 22.3402H18.48C18.48 22.3402 18.48 17.1546 18.48 16.7402C18.48 15.6202 17.92 14.5002 16.52 14.4778H16.4752C15.12 14.4778 14.56 15.6314 14.56 16.7402C14.56 17.2498 14.56 22.3402 14.56 22.3402H11.2V11.7002H14.56V13.1338C14.56 13.1338 15.6408 11.7002 17.8136 11.7002C20.0368 11.7002 21.84 13.229 21.84 16.3258V22.3402Z"
                                        fill="#E96B57"></path>
                                </svg>
                            </a>
                        </div>
                        <div className="sm-icon-follow">
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29"
                                    fill="none">
                                    <path
                                        d="M13.9999 2.18018C7.19593 2.18018 1.67993 7.69618 1.67993 14.5002C1.67993 20.677 6.22993 25.7769 12.1587 26.6679V17.7655H9.11057V14.5271H12.1587V12.3722C12.1587 8.80442 13.8969 7.2381 16.8621 7.2381C18.2822 7.2381 19.0332 7.34338 19.3888 7.39154V10.2184H17.3661C16.1072 10.2184 15.6676 11.4118 15.6676 12.7569V14.5271H19.3569L18.8563 17.7655H15.6676V26.6942C21.6809 25.8783 26.3199 20.7369 26.3199 14.5002C26.3199 7.69618 20.8039 2.18018 13.9999 2.18018Z"
                                        fill="#E96B57"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-divider">
            <div className="container-divider-inner">
                <div className="divider-seperator white-sep">

                </div>
            </div>
        </div>

        <div className="row row-footerbar">
            <div className="col-md-9">
                <div className="col-regions-name">
                    <ul className="col-regions-list">
                        <li className="region-list-name">Australian Cities We Service: Sydney</li>
                        <li className="region-list-name">Melbourne</li>
                        <li className="region-list-name">Brisbane</li>
                        <li className="region-list-name">Perth</li>
                        <li className="region-list-name">Adelaide</li>
                        <li className="region-list-name">Gold Coast</li>
                        <li className="region-list-name">Newcastle</li>
                        <li className="region-list-name">Canberra</li>
                        <li className="region-list-name">Sunshine Coast</li>
                        <li className="region-list-name">Central Coast</li>
                        <li className="region-list-name">Wollongong</li>
                        <li className="region-list-name">Geelong | Hobart</li>
                        <li className="region-list-name">Townsville</li>
                        <li className="region-list-name">Cairns</li>
                        <li className="region-list-name">& More</li>
                    </ul>
                </div>
            </div>
            <div className="col-md-3">
                <div className="col-copyright-txt">
                    <p>© Copyright 2015-2025 Occom</p>
                    
                </div>
            </div>
        </div>
    </div>
</footer>
  );
}
