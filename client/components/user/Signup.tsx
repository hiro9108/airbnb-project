import React from "react";
import Link from "next/link";
import Button from "../UIkit/Button";

const Signin = () => {
  return (
    <div className="card_wrapper w-96 py-6 mt-10">
      <article className="bg-white">
        <div className="flex justify-center">
          <p className="pb-6 font-bold">Sign in</p>
        </div>
        <div className="mx-10">
          <div className="input_wrapper">
            <label className="text-xs">Name: </label>
            <input
              className="outline-none ml-6 bg-transparent"
              type="text"
              name="name"
            />
          </div>
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
          <div className="input_wrapper">
            <label className="text-xs">Confirm Password: </label>
            <input
              className="outline-none ml-6"
              type="password"
              name="comfirmpassword"
            />
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <Button button="SEND" />
        </div>
        <div className="flex justify-center mt-5">
          <Link href="/user/signin">
            <a className=" transform duration-300 ease-in-out hover:text-red-400">
              Are you already have an account?
            </a>
          </Link>
        </div>
      </article>
    </div>
  );
};

export default Signin;
