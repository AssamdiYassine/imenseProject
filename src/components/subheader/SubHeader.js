import React from "react";

import { Navbar, Nav } from "react-bootstrap";

import { NavLink } from "react-router-dom";

export function SubHeader(props) {
  return (
    <>
      <div id="kt_header" className="header header-fixed subheader py-2 py-lg-6 subheader-solid">
        <div className="container-fluid d-flex align-items-stretch justify-content-between  flex-wrap flex-sm-nowrap ">
          
          
          <div
            id="kt_header_menu_wrapper"
            className="header-menu-wrapper header-menu-wrapper-left"
          >
            <Navbar className="parentNav p-0" bg="white" expand="lg">
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto d-flex ">
                  <div
                     
                    activeClassName="active"
                    className=" px-5"
                  >
                    SITES
                  </div>
                  <div className="border-sm border-right border-dark-sm"> </div>
                </Nav>
                <Nav className="mr-auto d-flex">
                  <NavLink
                    to="/formation/settings"
                    activeClassName="active"
                    className="ml-5  px-5 text-info"
                  >
                    All
                  </NavLink>
                </Nav>
                <Nav className="mr-auto d-flex">
                  <NavLink
                    to="/formation/settings"
                    activeClassName="active"
                    className="ml-5  px-5 text-muted"
                  >
                    Site 1
                  </NavLink>
                </Nav>
                <Nav className="mr-auto d-flex">
                  <NavLink
                    to="/formation/settings"
                    activeClassName="active"
                    className="ml-5  px-5 text-muted"
                  >
                    Site 2
                  </NavLink>
                </Nav>
                <Nav className="mr-auto d-flex">
                  <NavLink
                    to="/formation/settings"
                    activeClassName="active"
                    className="ml-5  px-5 text-muted"
                  >
                    Site 3
                  </NavLink>
                </Nav>
                <Nav className="mr-auto d-flex">
                  <NavLink
                    to="/formation/settings"
                    activeClassName="active"
                    className="ml-5  px-5 text-muted"
                  >
                    Site 4
                  </NavLink>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </div>
    </>
  );
}
