import React, { useState } from "react";
import Link from "next/link";
import {
  faBars,
  faUserCircle,
  faGlobe,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signIn, signOut, useSession } from "next-auth/client";

const Navbar = () => {
  const [session, loading] = useSession();

  return (
    <div className="navbar">
      <div className="cursor-pointer">
        <Link href="/">
          <img className="w-36" src="/logo2.png" />
        </Link>
      </div>
      <div className="navbar_list">
        <h5 className="navbar_menu">Place to Stay</h5>
        <h5 className="navbar_menu">Experiences</h5>
        <h5 className="navbar_menu">Online Experiences</h5>
      </div>
      <div className="flex items-center justify-end">
        <div>
          <h5>Become a Host</h5>
        </div>
        <div className="px-4">
          <FontAwesomeIcon icon={faGlobe} size="sm" />
        </div>
        <div className="navbar_user">
          <div className="mr-3 flex items-center">
            <FontAwesomeIcon icon={faBars} size="sm" />
          </div>
          <div>
            {!session ? (
              <button onClick={() => signIn("cognito")}>
                <FontAwesomeIcon icon={faUserCircle} size="lg" className="" />
              </button>
            ) : (
              <button onClick={() => signOut()}>
                <FontAwesomeIcon icon={faSignOutAlt} size="lg" className="" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
