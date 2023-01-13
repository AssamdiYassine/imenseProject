import { NavBar } from "components/navbar/NavBar";
import DateRangePicker from "react-bootstrap-daterangepicker";
import Image from "react-bootstrap/Image";
import Table from "react-bootstrap/Table";
import Row from "./tbleRow";
import { toAbsoluteUrl } from "helpers";
import SVG from "react-inlinesvg";
import { Form, FormControl, InputGroup } from "react-bootstrap";
import moment from "moment";
import React, { useState as UseState  } from "react";

function index() {
  const onApply = ( picker) => {
    setStartDate(moment(picker.startDate._d).format("YYYY-MM-DD"));
    setEndtDate(moment(picker.endDate._d).format("YYYY-MM-DD"));
  };

  const [startDate, setStartDate] = UseState(moment().format("YYYY-MM-DD"));
  const [endDate, setEndtDate] = UseState(moment().format("YYYY-MM-DD"));
  const [client, setClient] = UseState([
    {
      "id": "0001",
      "Suscription": "29 / 11 / 2022",
      "Client": "/media/client/CLIENT.PNG",
      "ContactPerson": { profil: "/media/client/photo.png", name: "Blaise DEFLOO", post: "Manager" },
      "Sites": "1 Site",
      "SubscriptionType": "Monthly",
      "NextBill": {"DATE":"Mar 1, 2023","DAY":'1'},
      "Phone": "+32 4 227 18 08",
      "Email": "prewitt.lemaitre@newelec.be",
      "Status": "Active",
    },    {
      "id": "0001",
      "Suscription": "29 / 11 / 2022",
      "Client": "/media/client/CLIENT.PNG",
      "ContactPerson": { profil: "/media/client/photo.png", name: "Blaise DEFLOO", post: "Manager" },
      "Sites": "1 Site",
      "SubscriptionType": "Monthly",
      "NextBill": {"DATE":"Mar 1, 2023","DAY":'18 '},
      "Phone": "+32 4 227 18 08",
      "Email": "prewitt.lemaitre@newelec.be",
      "Status": "Active",
    },    {
      "id": "0001",
      "Suscription": "29 / 11 / 2022",
      "Client": "/media/client/CLIENT.PNG",
      "ContactPerson": { profil: "/media/client/photo.png", name: "Blaise DEFLOO", post: "Manager" },
      "Sites": "1 Site",
      "SubscriptionType": "Monthly",
      "NextBill": {"DATE":"Mar 1, 2023","DAY":'11'},
      "Phone": "+32 4 227 18 08",
      "Email": "prewitt.lemaitre@newelec.be",
      "Status": "Active",
    },
  ]);
  return (
    <>
      <NavBar text={"Clients Management"} />

      {/*Clients Info start  */}
      
      <div className="container-fluid d-flex align-items-stretch justify-content-between mt-10 ">
        <div className=" ">
          <h4 className="text-dark mt-2">Clients Info</h4>
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
                placeholder="Search by id, name, status ..."
                className=" mr-sm-2 inputSearch bg-white"
              />
            </InputGroup>
          </Form>

          <div>
            <div className="px-3 ">
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
              <option>Subscription Type</option>
              <option>...</option>
            </Form.Control>
          </div>
          <div>
            <Form.Control
              as="select"
              defaultValue="All Contractors"
              className="w-150px mx-2"
            >
              <option>Status</option>
              <option>...</option>
            </Form.Control>
          </div>
          <div className=" btn btn-icon btn-clean   nav-link svg-icon p-0 m-0 svg-icon-2x mx-4">
            <Image src={toAbsoluteUrl("/media/client/btn.png")} />
          </div>
          <div className="  svg-icon svg-icon-2x  btn  nav-link m-0  p-0 btn-icon btn-clean ">
            <Image src={toAbsoluteUrl("/media/client/Vector.png")} />
          </div>
        </div>
      </div>

      {/*Clients Info end  */}
      <div className="container-fluid pt-4">
        <Table
          responsive 
          className="bg-white text-center align-star justify-content-center"
        >
          <thead className="h-170px bg-info">
            <tr>
              <th className="align-middle text-white  ">ID</th>
              <th className="align-middle text-white ">Suscription</th>
              <th className="align-middle text-white ">Client</th>
              <th className="align-middle text-white ">Contact Person</th>
              <th className="align-middle text-white ">Sites</th>
              <th className="align-middle text-white ">Subscription Type</th>
              <th className="align-middle text-white ">Next Bill</th>
              <th className="align-middle text-white  ">Phone</th>
              <th className="align-middle text-white ">Email</th>
              <th className="align-middle text-white ">Status</th>
              <th className="align-middle text-white ">
                <div className=" svg-icon svg-icon-sm  ">
                  <SVG src={toAbsoluteUrl("/media/table/thing.svg")} />
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            {client.map((ele) => (
              <Row
              id={ele.id}
              Suscription={ele.Suscription}
              Client={ele.Client}
              ContactPerson={ele.ContactPerson}
              Sites={ele.Sites}
              SubscriptionType={ele.SubscriptionType}
              NextBill={ele.NextBill}
              Phone={ele.Phone}
              Email={ele.Email}
              Status={ele.Status}
              
              
              
              />
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default index;
