// components/Hero.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="occom-hero-banner">
      <div className="videooo-container">
        <video autoPlay muted loop id="myVideo1">
          <source src="https://dev.occominternet.com/wp-content/uploads/2025/10/Occom-Landing-Video-50darkened.mp4" type="video/mp4" />
        </video>

        <div className="overlay-content">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="col-h1-tzt">
                  <motion.h1 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                    Faster Speeds Less Lag The Highest Rated ISP in Australia
                  </motion.h1>

                  <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.12 }}>
                    Get Faster, Get Occom
                  </motion.h2>

                  <motion.div className="plans-btn" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.18 }}>
                    <a href="#">See our plans</a>
                  </motion.div>

                  <motion.div className="g-reviews" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.24 }}>
                    {/* rating block preserved */}
                    <div className="col-g-img">
                        <svg xmlns="http://www.w3.org/2000/svg" width="101" height="100"
                                        viewBox="0 0 101 100" fill="none">
                                        <path
                                            d="M85.0586 0H15.0586C6.77432 0 0.0585938 6.71573 0.0585938 15V85C0.0585938 93.2843 6.77432 100 15.0586 100H85.0586C93.3429 100 100.059 93.2843 100.059 85V15C100.059 6.71573 93.3429 0 85.0586 0Z"
                                            fill="white"></path>
                                        <path
                                            d="M75.3613 77.4772C84.1504 69.2741 88.0566 55.6022 85.7129 42.5163H50.752V56.9694H70.6738C69.8926 61.6569 67.1582 65.5632 63.252 68.1022L75.3613 77.4772Z"
                                            fill="#4285F4"></path>
                                        <path
                                            d="M17.5488 65.9538C20.1182 71.0151 23.8029 75.4271 28.3254 78.8572C32.8478 82.2874 38.0899 84.6461 43.6565 85.7557C49.2231 86.8652 54.969 86.6967 60.461 85.2627C65.953 83.8286 71.0478 81.1666 75.3613 77.4772L63.252 68.1022C52.9004 74.9382 35.7129 72.3991 29.8535 56.3835L17.5488 65.9538Z"
                                            fill="#34A853"></path>
                                        <path
                                            d="M29.8537 56.3834C28.2912 51.5006 28.2912 47.0084 29.8537 42.1256L17.549 32.5553C13.0568 41.5396 11.6896 54.235 17.549 65.9537L29.8537 56.3834Z"
                                            fill="#FBBC02"></path>
                                        <path
                                            d="M29.8535 42.1256C34.1504 28.649 52.5098 20.8365 64.8145 32.36L75.5566 21.8131C60.3223 7.16466 30.6348 7.7506 17.5488 32.5553L29.8535 42.1256Z"
                                            fill="#EA4335"></path>
                                    </svg>
                    </div>
                    <div className="col-review-numbers">
                      <div className="col-r-no">
                        <span className="reviews-no">12,000+ Reviews</span>
                      </div>
                      <div className="col-stars">
                        <div className="rating-stars">
                          <span className="rating-no">4.9</span>&nbsp;
                                            <span className="star-svg"><svg aria-hidden="true"
                                                    className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z">
                                                    </path>
                                                </svg></span>
                                            <span className="star-svg"><svg aria-hidden="true"
                                                    className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z">
                                                    </path>
                                                </svg></span>
                                            <span className="star-svg"><svg aria-hidden="true"
                                                    className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z">
                                                    </path>
                                                </svg></span>
                                            <span className="star-svg"><svg aria-hidden="true"
                                                    className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z">
                                                    </path>
                                                </svg></span>
                                            <span className="star-svg"><svg aria-hidden="true"
                                                    className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z">
                                                    </path>
                                                </svg></span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
