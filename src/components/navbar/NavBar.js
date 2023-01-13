import React, { useState as UseState  } from "react";

import { toAbsoluteUrl } from "helpers";
import SVG from "react-inlinesvg";

import { Navbar, Nav } from "react-bootstrap";

 
import Profil from "components/profil/profil";

export function NavBar(props) {
  const [show, setShow] = UseState(false);

  const hide = (bool) => {
    setShow(bool);
  };
  const {logo} = props;
  return (
    
      <div id="kt_header" className="header header-fixed header-menu-wrapper header-menu-wrapper-left">
        <div className="container-fluid d-flex align-items-stretch justify-content-between">
          <div
            id="kt_header_menu_wrapper"
            className="header-menu-wrapper header-menu-wrapper-left"
          >
            <Navbar className="parentNav p-0" bg="white" expand="lg">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto d-flex">
               
                   <div className=" svg-icon   m-auto">
                
                 <SVG src={toAbsoluteUrl(`${logo}`)} />
                
                  </div>
              
                 
                  <div
                     
                    activeClassName="active"
                    className="ml-5"
                  >
                    <div
                       
                      className="myP font-weight-bold font-size-lg"
                    >
                    {props.text}
                     
                    </div>
                  </div>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
          <div className="topbar align-items-center">
            <div className="px-4">
              <div className="btn btn-icon w-auto btn-clean d-flex align-items-center btn-lg px-2 ml-3">
                <SVG src={toAbsoluteUrl("/media/A.svg")} />
              </div>
            </div>
            <div className="px-4">
              <div className="btn btn-icon w-auto btn-clean d-flex align-items-center btn-lg px-2 ml-3">
                <SVG src={toAbsoluteUrl("/media/moon.svg")} />
              </div>
            </div>
            <div className="px-4">
              <div className="btn btn-icon w-auto btn-clean d-flex align-items-center btn-lg px-2 ml-3">
                <SVG src={toAbsoluteUrl("/media/notif.svg")} />
              </div>
            </div>
            <div className="dropdown ml-2">
              <div
                className="topbar-item"
                data-toggle="dropdown"
                data-offset="10px, 0px"
              >
                <div className="btn btn-icon btn-clean btn-dropdown btn-lg ml-2">
                  <img
                    src="/media/uk.svg"
                    alt="Morocco"
                    className="h-25px w-25px rounded-sm"
                  />
                </div>
              </div>
            </div>
            <div
              className="btn btn-icon w-auto btn-clean d-flex align-items-center btn-lg px-2 ml-3"
              onClick={() => {
                setShow(true);
              }}
            >
              <SVG src={toAbsoluteUrl("/media/blog.svg")} />

              <span className="text-muted font-weight-bold font-size-base d-none d-md-inline mr-1 pl-3">
                BESIX Group
              </span>
              <span className="text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3 w-30px">
                <SVG src={toAbsoluteUrl("/media/angle-down (1).svg")} />
              </span>
            </div>
          </div>
          {show && <Profil show={show} hide={hide} />}
        </div>
      </div>
    
  );
}
