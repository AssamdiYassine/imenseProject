import React from "react";

import { connect } from "react-redux";

function Profil(props) {
  return (
    <>
      {props.show ? (
        <>
          <div
            className=" offcanvas offcanvas-right p-5 offcanvas-on"
            style={{ width: "25%" }}
          >
            <div
              className="offcanvas-header d-flex align-items-center justify-content-end pb-5"
              kt-hidden-height={40}
            >
              <a
                href="#"
                className="btn btn-xs btn-icon btn-light btn-hover-primary "
                id="kt_quick_user_close"
                onClick={() => props.hide(false)}
              >
                <i className="ki ki-close icon-xs text-muted" />
              </a>
            </div>
            <div
              className="offcanvas-content"
              style={{ height: "100%", overflow: "hidden" }}
            >
              {/*begin::Header*/}
              <div className="row d-flex align-items-center mt-5 pl-5 text-center justify-content-center">
                <div className="d-flex flex-column">
                  <a
                    href="#"
                    className="font-weight-bold font-size-h3 text-dark-75 text-hover-primary"
                  >
                    SABER Imane
                  </a>
                  <div className="text-dark-75 font-weight-bolder font-size-h3 mt-1">
                    saberimane663@gmail.com
                  </div>
                  <div className="navi mt-2  font-weight-bolder font-size-h3">
                    <a href="#" className="navi-item">
                      <span className="navi-link p-0 pb-2">
                        <span className="navi-text text-muted text-hover-primary">
                          +2126 45748699
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="row d-flex justify-content-center"
                style={{
                  backgroundColor: "#fff",
                  outlineColor: "#ECEEF4",
                  margin: "5px",
                  padding: "10px",
                  height: "30%",
                }}
              ></div>

              {/*end::Header*/}
            </div>
          </div>
          <div
            className="offcanvas-overlay"
            onClick={() => {
              props.hide(false);
            }}
          />
        </>
      ) : null}
    </>
  );
}

const mapStateToProps = ({ userreducer }) => {
  return { ...userreducer };
};

export default connect(mapStateToProps, {})(Profil);
