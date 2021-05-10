import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="w-28" src="/logo2.png" />
      <Link href="/user" passHref>
        <img className="w-5 cursor-pointer" src="/user-solid.svg" />
      </Link>
    </div>
  );
};

export default Navbar;
