import React from "react";
import Image from "react-bootstrap/Image";
import { toAbsoluteUrl } from "helpers";

function row(props) {
  return (
    <tr key={props.id} >
      <td className="  justify-content-center   align-middle p-0 m-0  border-right">
        {props.id}
      </td>
      <td className=" border-right">
        <div className="  d-flex   justify-content-between m-auto ">
          <div className="d-flex  justify-content-center align-items-center ">
            <Image width={"60px"} src={toAbsoluteUrl(`${props.profil}`)} />
            <div className="d-flex  ml-3 my">
              <div>
                <h3 className="p-0 m-0">{props.name}</h3>

                <p className="p-0 m-0 text-left">{props.post}</p>
              </div>
            </div>
          </div>
          <Image width={"60px"} src={toAbsoluteUrl(`${props.client}`)} />
        </div>
      </td>

      <td className="align-middle ">
      <div className="d-flex justify-content-center align-items-center ">
      
        {props.gloves < 10 && props.gloves > 0 ? (
          <small className={"badge badge-warning  h-50px text-center d-flex justify-content-center align-items-center w-50px rounded-circle "}>{props.gloves} </small>
        ) : (
          <>
            {props.gloves === 0 ? (
              "-"
            ) : (
              <small className={"badge text-white  badge-danger  h-50px text-center d-flex justify-content-center align-items-center w-50px rounded-circle"}>
                {props.gloves}
              </small>
            )}
          </>
        )}
      
      </div>
        </td>
      <td className="align-middle ">
      <div className="d-flex justify-content-center align-items-center ">
      
        {props.glasses < 10 && props.glasses > 0 ? (
          <small className={"badge badge-warning  h-50px text-center d-flex justify-content-center align-items-center w-50px rounded-circle "}>{props.glasses}</small>
        ) : (
          <>
            {props.glasses === 0 ? (
              "-"
            ) : (
              <small className={"badge text-white  badge-danger  h-50px text-center d-flex justify-content-center align-items-center w-50px rounded-circle"}>
                {props.glasses}
              </small>
            )}
          </>
        )}
      
      </div>
        </td>
      <td className="align-middle ">
      <div className="d-flex justify-content-center align-items-center ">
      
        {props.ear < 10 && props.ear > 0 ? (
          <small className={"badge badge-warning  h-50px text-center d-flex justify-content-center align-items-center w-50px rounded-circle "}>{props.ear}</small>
        ) : (
          <>
            {props.ear === 0 ? (
              "-"
            ) : (
              <small className={"badge text-white  badge-danger  h-50px text-center d-flex justify-content-center align-items-center w-50px rounded-circle"}>
                {props.ear}
              </small>
            )}
          </>
        )}
      
      </div>
        </td>
      <td className="align-middle ">
      <div className="d-flex justify-content-center align-items-center ">
      
        {props.mask < 10 && props.mask > 0 ? (
          <small className={"badge badge-warning  h-50px text-center d-flex justify-content-center align-items-center w-50px rounded-circle "}>{props.mask}</small>
        ) : (
          <>
            {props.mask === 0 ? (
              "-"
            ) : (
              <small className={"badge text-white  badge-danger  h-50px text-center d-flex justify-content-center align-items-center w-50px rounded-circle"}>
                {props.mask}
              </small>
            )}
          </>
        )}
      
      </div>
        </td>
      <td className="align-middle ">
      <div className="d-flex justify-content-center align-items-center ">
      
        {props.Knee < 10 && props.Knee > 0 ? (
          <small className={"badge badge-warning  h-50px text-center d-flex justify-content-center align-items-center w-50px rounded-circle "}>{props.Knee}</small>
        ) : (
          <>
            {props.Knee === 0 ? (
              "-"
            ) : (
              <small className={"badge text-white  badge-danger  h-50px text-center d-flex justify-content-center align-items-center w-50px rounded-circle"}>
                {props.Knee}
              </small>
            )}
          </>
        )}
      
      </div>
        </td>
      <td className="align-middle ">
      <div className="d-flex justify-content-center align-items-center ">
      
        {props.shoes < 10 && props.shoes > 0 ? (
          <small className={"badge badge-warning  h-50px text-center d-flex justify-content-center align-items-center w-50px rounded-circle "}>{props.shoes}</small>
        ) : (
          <>
            {props.shoes === 0 ? (
              "-"
            ) : (
              <small className={"badge text-white  badge-danger  h-50px text-center d-flex justify-content-center align-items-center w-50px rounded-circle"}>
                {props.shoes}
              </small>
            )}
          </>
        )}
      
      </div>
        </td>
      <td className="align-middle ">
      <div className="d-flex justify-content-center align-items-center ">
      
        {props.coverall < 10 && props.coverall > 0 ? (
          <small className={"badge badge-warning  h-50px text-center d-flex justify-content-center align-items-center w-50px rounded-circle "}>{props.coverall}</small>
        ) : (
          <>
            {props.coverall === 0 ? (
              "-"
            ) : (
              <small className={"badge text-white  badge-danger  h-50px text-center d-flex justify-content-center align-items-center w-50px rounded-circle"}>
                {props.coverall}
              </small>
            )}
          </>
        )}
      
      </div>
        </td>
      <td className="align-middle ">
      <div className="d-flex justify-content-center align-items-center ">
      
        {props.jacket < 10 && props.jacket > 0 ? (
          <small className={"badge badge-warning  h-50px text-center d-flex justify-content-center align-items-center w-50px rounded-circle "}>{props.jacket}</small>
        ) : (
          <>
            {props.jacket === 0 ? (
              "-"
            ) : (
              <small className={"badge text-white  badge-danger  h-50px text-center d-flex justify-content-center align-items-center w-50px rounded-circle"}>
                {props.jacket}
              </small>
            )}
          </>
        )}
      
      </div>
        </td>
      <td className="align-middle ">
      <div className="d-flex justify-content-center align-items-center ">
      
        {props.safety < 10 && props.safety > 0 ? (
          <small className={"badge badge-warning  h-50px text-center d-flex justify-content-center align-items-center w-50px rounded-circle "}>{props.safety}</small>
        ) : (
          <>
            {props.safety === 0 ? (
              "-"
            ) : (
              <small className={"badge text-white  badge-danger  h-50px text-center d-flex justify-content-center align-items-center w-50px rounded-circle"}>
                {props.safety}
              </small>
            )}
          </>
        )}
      
      </div>
        </td>
      <td className="align-middle ">
      <div className="d-flex justify-content-center align-items-center ">
      
        {props.face < 10 && props.face > 0 ? (
          <small className={"badge badge-warning  h-50px text-center d-flex justify-content-center align-items-center w-50px rounded-circle "}>{props.face}</small>
        ) : (
          <>
            {props.face === 0 ? (
              "-"
            ) : (
              <small className={"badge text-white  badge-danger  h-50px text-center d-flex justify-content-center align-items-center w-50px rounded-circle"}>
                {props.face}
              </small>
            )}
          </>
        )}
      
      </div>
        </td>
      <td className="align-middle ">
      <div className="d-flex justify-content-center align-items-center ">
      
        {props.hardHat < 10 && props.hardHat > 0 ? (
          <small className={"badge badge-warning  h-50px text-center d-flex justify-content-center align-items-center w-50px rounded-circle "}>{props.hardHat}</small>
        ) : (
          <>
            {props.hardHat === 0 ? (
              "-"
            ) : (
              <small className={"badge text-white  badge-danger  h-50px text-center d-flex justify-content-center align-items-center w-50px rounded-circle"}>
                {props.glashardHatses}
              </small>
            )}
          </>
        )}
      
      </div>
        </td>
      <td className="align-middle ">
      <div className="d-flex justify-content-center align-items-center ">
      
        {props.weldingHelmet < 10 && props.weldingHelmet > 0 ? (
          <small className={"badge badge-warning  h-50px text-center d-flex justify-content-center align-items-center w-50px rounded-circle "}>
            {props.weldingHelmet}
          </small>
        ) : (
          <>
            {props.weldingHelmet === 0 ? (
              "-"
            ) : (
              <small className={"badge text-white  badge-danger  h-50px text-center d-flex justify-content-center align-items-center w-50px rounded-circle"}>
                {props.weldingHelmet}
              </small>
            )}
      
      
            </>
        )}</div>
      </td>
    </tr>
  );
}

export default row;
