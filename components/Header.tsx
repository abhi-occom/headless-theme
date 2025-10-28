// components/Header.tsx
"use client";
import React from "react";

export default function Header() {
  return (
    <header className="top-navbar-fixed">
      <div className="top-nav" id="home">
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-auto top-head-row">
              <div className="top-nav-item">
                <a href="tel:1300299999" className="top-nav-txt"> Call Us: <strong>1300 299 999</strong></a>
              </div>
              <div className="top-nav-item">
                {/* Language switcher placeholder */}
                <div id="pll-switcher">Language</div>
              </div>
              <div className="top-nav-item">
                <a href="#" className="get-occom-btn"><span className="button-content-wrapper"><span>Get Occom</span></span></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img className="top-nav-img" src="https://dev.occominternet.com/wp-content/uploads/2024/12/Group.png" alt="Occom" />
            </a>
            {/* keep collapse simplified for now */}
          </div>
        </nav>
      </div>
    </header>
  );
}
