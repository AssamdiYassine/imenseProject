import React from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "helpers";
import SVG from "react-inlinesvg";

export function Brand({logo}) {
  return (
    <>
      {/* begin::Brand */}
      <div className={`aside-brand d-flex flex-column align-items-center flex-column-auto pb-10  pt-5 `}>
        {/* begin::Logo */}
        <div className="brand-logo svg-icon svg-icon-4x ">
          
          <SVG src={toAbsoluteUrl(`${logo}`)} />
        </div>
        {/* end::Logo */}
      </div>
      {/* end::Brand */}
    </>
  );
}
