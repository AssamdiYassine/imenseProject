import React from "react";

import { Navbar, Nav } from "react-bootstrap";

import { NavLink } from "react-router-dom";

export function SubHeader(props) {
  return (
    <>
      <div
        id="kt_header"
        className="header header-fixed subheader py-2  subheader-solid border-bottom border-md"
      >
        <Nav className="mr-auto d-flex px-5  ">
          <div activeClassName="active" className=" pl-5" style={{color:'#B6B6B6'}} >
            SITES
          </div>
        </Nav>
        <div className=" p-0 m-0 "  style={{transform: 'rotate(90deg)' , borderColor:'#B6B6B6 ' ,width:38,border:'  0.2px solid #B6B6B6'}}/>
        <div className="container-fluid d-flex align-items-stretch justify-content-between  flex-wrap flex-sm-nowrap ">
          <div
            id="kt_header_menu_wrapper"
            className="header-menu-wrapper header-menu-wrapper-left"
          >
            <Navbar className="parentNav p-0" bg="white" expand="lg">
              <Navbar.Collapse id="basic-navbar-nav">
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
