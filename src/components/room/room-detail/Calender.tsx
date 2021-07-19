import React, { useState } from "react";
import Calendar from "react-calendar";

const Calender = () => {
  const [value, onChange] = useState(new Date());
  const [value2, onChange2] = useState(new Date());

  return (
    <div className="flex overflow-x-scroll">
      <Calendar onChange={onChange} value={value} className="m-7" />
      <Calendar onChange={onChange2} value={value2} className="m-7" />
    </div>
  );
};

export default Calender;
