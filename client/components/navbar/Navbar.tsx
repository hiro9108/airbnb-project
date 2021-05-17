import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link href="/">
        <a>
          <img className="w-28" src="/logo2.png" />
        </a>
      </Link>
      <Link href="/user">
        <a className="flex justify-center items-center">
          <img className="w-8 cursor-pointer" src="/user-solid.svg" />
        </a>
      </Link>
    </div>
  );
};

export default Navbar;
