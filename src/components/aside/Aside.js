/* eslint-disable jsx-a11y/anchor-is-valid */
 
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import React from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "helpers";
import { Brand } from "components/brand/Brand";

export function Aside(props) {
 
 
 
  return (
    <>
      {/* begin::Aside */}
      <div id="kt_aside" className="aside bg-white aside-left d-flex aside-fixed border-right">
        {/* begin::Primary */}
        <div className="aside-primary d-flex flex-column align-items-center flex-row-auto">

        <Brand logo={'/media/logo/logo.svg'}/>  
         
          {/* begin::Nav Wrapper */}
          {/* Remove " flex-column-fluid "::To solve aside footer bottom padding */}
          <div className="aside-nav d-flex flex-column align-items-center py-5 px-4 scrollA scrollA-pull">
            <div className={`scrollA scrollA-pull overflow-auto `}>
              {/* begin::Nav */}
              <ul className="list-unstyled flex-column" role="tablist">
                {/* begin::Item */}
                <MyNavLink
                  svg="/media/home.svg"
                  txt={'home'}
                  link="/home"
                />
                
                <MyNavLink
                  svg="/media/hand.svg"
                  txt={'P.P.E Management'}
                  link="/PPE"
                />
                <div className="aside-separator w-auto" />
                <MyNavLink
                  svg="/media/cloves.svg"
                  txt={'cloves'}
                  link=" "
                />
                <MyNavLink
                svg="/media/jop.svg"
                txt={'Contractors'}
                link=" "
              />
              <MyNavLink
              svg="/media/pers.svg"
              txt={'Clients'}
              link="/client"
            />
            
              </ul>
            </div>

            {/* end::Nav */}
          </div>
         
          {/* end::Nav Wrapper */}
        </div>
        {/* end::Primary */}
      </div>
      {/* end::Aside */}
    </>
  );
}

function MyNavLink({ link, svg, txt }) {
  return (
    <li
      className="nav-item mb-3"
      data-toggle="tooltip"
      data-placement="rigth"
      data-container="body"
      data-boundary="window"
    >
      <OverlayTrigger
        placement="right"
        overlay={<Tooltip id="latest-project">{txt}</Tooltip>}
         
      >
        <NavLink
          to={`${link}`}
          activeClassName="active"
          className="nav-link btn btn-icon btn-clean btn-lg"
        >
          <span className="svg-icon svg-icon-lg">
            <SVG src={toAbsoluteUrl(svg)} />
          </span>
        </NavLink>
      </OverlayTrigger>
    </li>
  );
}
