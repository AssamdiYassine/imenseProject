import React from 'react'
import { toAbsoluteUrl } from "helpers";
import SVG from "react-inlinesvg";
function thead() {
  return (
    <thead className="  "style={{background: "#42A4DF",height:'30px'}}>
    <tr>
      <th className="align-middle text-white  ">ID</th>
      <th className="align-middle text-white ">Suscription</th>
      <th className="align-middle text-white ">Client</th>
      <th className="align-middle text-white ">Contact Person</th>
      <th className="align-middle text-white ">Sites</th>
      <th className="align-middle text-white "  >Subscription Type</th>
      <th className="align-middle text-white ">Next Bill</th>
      <th className="align-middle text-white  " >Phone</th>
      <th className="align-middle text-white "   >Email</th>
      <th className="align-middle text-white ">Status</th>
      <th className="align-middle text-white ">
        <div className=" svg-icon svg-icon-sm  ">
          <SVG src={toAbsoluteUrl("/media/table/thing.svg")} />
        </div>
      </th>
    </tr>
  </thead>
  )
}

export default thead
