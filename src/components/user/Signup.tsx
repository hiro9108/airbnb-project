import React from "react";
import Link from "next/link";
import Button from "../UIkit/Button";

const Signup = () => {
  return (
    <div className="card_wrapper w-96 py-6 mt-10">
      <article className="bg-white">
        <div className="flex justify-center">
          <p className="pb-6 font-bold">Sign Up</p>
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
          <Button button="SEND" />
        </div>
        <div className="flex justify-center mt-5">
          <Link href="/user/signup">
            <a className=" transform duration-300 ease-in-out hover:text-red-400">
              Create an account?
            </a>
          </Link>
        </div>
      </article>
    </div>
  );
};

export default Signup;
