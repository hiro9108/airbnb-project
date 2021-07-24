import React from "react";
import { thingsProp } from "../../../types";

const ThingsKnow: React.FC<thingsProp> = ({
  rules,
  healthInfo,
  cancelPolicy,
}) => {
  return (
    <div className="d_c_section">
      <h4 className="font-medium mb-6">Things to know</h4>
      <div className="lg:grid grid-flow-row grid-cols-3 gap-6">
        <div className="mb-3">
          <h5 className="mb-5 font-medium">House rules</h5>
          <ul>
            {rules.map((rule, index) => {
              return (
                <li className="font-light my-2" key={index}>
                  <span>・</span>
                  {rule}
                </li>
              );
            })}
          </ul>
          <div className="cursor-pointer flex items-center mt-3 lg:mt-6">
            <a href="" className="mr-2">
              Show more
            </a>
            <span className="text-xl">&gt;</span>
          </div>
        </div>
        <div className="mb-3">
          <h5 className="mb-5 font-medium">Health & safety</h5>
          <ul>
            {healthInfo.map((health, index) => {
              return (
                <li className="font-light my-2" key={index}>
                  <span>・</span>
                  {health}
                </li>
              );
            })}
          </ul>
          <div className="cursor-pointer flex items-center mt-3 lg:mt-6">
            <a href="" className="mr-2">
              Show more
            </a>
            <span className="text-xl">&gt;</span>
          </div>
        </div>
        <div>
          <h5 className="mb-5 font-medium">Cancellation policy</h5>
          <h5 className="font-light">{cancelPolicy} </h5>
          <div className="cursor-pointer flex items-center mt-6">
            <a href="" className="mr-2">
              Add dates
            </a>
            <span className="text-xl">&gt;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThingsKnow;
