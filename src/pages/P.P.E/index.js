import React, { useState as UseState } from "react";
 
import { toAbsoluteUrl } from "helpers";
import SVG from "react-inlinesvg";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import DateRangePicker from "react-bootstrap-daterangepicker";
import { Form, FormControl, InputGroup } from "react-bootstrap";
import moment from "moment";
import { NavBar } from "components/navbar/NavBar";
import { SubHeader } from "components/subheader/SubHeader.js";
import Table from "react-bootstrap/Table";
 
import Thead from "./thead";
import Row from "./tableRow";
function index(props) {
  const onApply = ( picker) => {
    setStartDate(moment(picker.startDate._d).format("YYYY-MM-DD"));
    setEndtDate(moment(picker.endDate._d).format("YYYY-MM-DD"));
  };

  const [startDate, setStartDate] = UseState(moment().format("YYYY-MM-DD"));
  const [endDate, setEndtDate] = UseState(moment().format("YYYY-MM-DD"));

  const [head, setHead] = UseState([
    {
      "id": 1,
      "profil": "/media/table/photo.png",
      "client": "/media/table/img.png",
      "name": "Blaise DEFLOO",
      "post": "Manager",
      "gloves": 2,
      "glasses": 1,
      "ear": 0,
      "mask": 10,
      "Knee": 0,
      "shoes": 0,
      "coverall": 0,
      "jacket": 1,
      "safety": 0,
      "face": 1,
      "hardHat": 0,
      "weldingHelmet": 0,
    },
    {
      "id": 2,
      "profil": "/media/table/photo.png",
      "client": "/media/table/img.png",
      "name": "Blaise DEFLOO",
      "post": "Manager",
      "gloves": 0,
      "glasses": 5,
      "ear": 0,
      "mask": 0,
      "Knee": 0,
      "shoes": 20,
      "coverall": 0,
      "jacket": 0,
      "safety": 0,
      "face": 1,
      "hardHat": 0,
      "weldingHelmet": 3,
    },
    {
      "id": 3,
      "profil": "/media/table/photo.png",
      "client": "/media/table/img.png",
      "name": "Blaise DEFLOO",
      "post": "Manager",
      "gloves": 10,
      "glasses": 0,
      "ear": 3,
      "mask": 20,
      "Knee": 0,
      "shoes": 1,
      "coverall": 0,
      "jacket": 0,
      "safety": 1,
      "face": 0,
      "hardHat": 7,
      "weldingHelmet": 0,
    },
  ]);



  return (
    <>
      <NavBar text={'Overview'} logo={"/media/toggle.svg"}/>
      <SubHeader />
      {/*P.P.E Violations start  */}
      <div className="container-fluid   ">
      
     
      <div className=" d-flex align-items-stretch justify-content-between  mt-10 ">
        <div className=" ">
          <h3 className="text-muted ">P.P.E Violations Table</h3>
        </div>
        <div className="d-flex">
          <Form inline className="m-0 ">
            <InputGroup className="w-500px">
              <InputGroup.Prepend>
                <InputGroup.Text
                  id="inputGroupPrepend"
                  className="iconSearch bg-white"
                >
                  <i className="fas fa-search"></i>
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type="text"
                placeholder="Search workers ..."
                className="  inputSearch bg-white"
              />
            </InputGroup>
          </Form>

          <div>
            <div className="px-3">
              <DateRangePicker
                initialSettings={{
                  startDate: startDate,
                  endDate: endDate,
                  locale: {
                    format: "YYYY-MM-DD",
                    applyLabel: "Valider",
                    cancelLabel: "Annuler",
                    fromLabel: "De",
                    toLabel: "à",
                    customRangeLabel: "Custom",
                    daysOfWeek: [
                      "Dim",
                      "Lun",
                      "Mar",
                      "Mer",
                      "Jeu",
                      "Ven",
                      "Sam",
                    ],
                    monthNames: [
                      "Janvier",
                      "Février",
                      "Mars",
                      "Avril",
                      "Mai",
                      "Juin",
                      "Juillet",
                      "Août",
                      "Septembre",
                      "Octobre",
                      "Novembre",
                      "Décembre",
                    ],
                    firstDay: 1,
                  },
                  ranges: {
                    "Aujourd'hui": [moment(), moment()],
                    Hier: [
                      moment().subtract(1, "days"),
                      moment().subtract(1, "days"),
                    ],
                    "Les 7 derniers jours": [
                      moment().subtract(6, "days"),
                      moment(),
                    ],
                    "Les 30 derniers jours": [
                      moment().subtract(29, "days"),
                      moment(),
                    ],
                    "Ce mois-ci": [
                      moment().startOf("month"),
                      moment().endOf("month"),
                    ],
                    "Le mois dernier": [
                      moment().subtract(1, "month").startOf("month"),
                      moment().subtract(1, "month").endOf("month"),
                    ],
                  },
                }}
                onApply={(event, picker) => onApply(event, picker)}
              >
                <button className="form-control  text-left">
                  {startDate} - {endDate}
                </button>
              </DateRangePicker>
            </div>
          </div>
          <div>
            <Form.Control
              as="select"
              defaultValue="All Contractors"
              className="w-200px px-2"
            >
              <option>All Contractors.</option>
              <option>...</option>
            </Form.Control>
          </div>
          <div className="w-30px svg-icon svg-icon-3x mx-4">
            <SVG src={toAbsoluteUrl("/media/full.svg")} />
          </div>
        </div>
      </div>

      {/*P.P.E Violations end  */}
      {/*-------------------------- */}
      {/*P.P.E Violations table  */}
      <div className=" ppetabel  pt-10">
        <Table
          responsive="sm"
          className="bg-white text-center align-star justify-content-center  ppetabel"
        >
          <Thead />
          <tbody>
          {head.map((ele)=>(
             <Row 
             key={ele.id}
             id={ele.id}
             profil={ele.profil}
             client={ele.client}
             name={ele.name}
             post={ele.post}
             gloves={ele.gloves}
             glasses={ele.glasses}
             ear={ele.ear}
             mask={ele.mask}
             Knee={ele.Knee}
             shoes={ele.shoes}
             coverall={ele.coverall}
             jacket={ele.jacket}
             safety={ele.safety}
             face={ele.face}
             hardHat={ele.hardHat}
             weldingHelmet={ele.weldingHelmet}

             
             />
          ))}
         
         
          </tbody>
        </Table>
      </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  const { userreducer } = state;
  return {
    user: userreducer.user,
  };
};
export default withRouter(connect(mapStateToProps, {})(index));
