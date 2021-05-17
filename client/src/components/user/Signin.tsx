import React from "react";
import Button from "../UIkit/Button";

const Signin = () => {
  return (
    <div className="card_wrapper w-96 py-6 mt-10">
      <article className="bg-white">
        <div className="flex justify-center">
          <p className="pb-6 font-bold">Sign In</p>
        </div>
        <div className="mx-10">
          <div className="input_wrapper">
            <label className="text-xs">Email: </label>
            <input className="outline-none ml-6" type="email" name="email" />
          </div>
          <div className="input_wrapper">
            <label className="text-xs">Password: </label>
            <input
              className="outline-none ml-6"
              type="password"
              name="password"
            />
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <Button button="SIGN IN" />
        </div>
      </article>
    </div>
  );
};

export default Signin;
