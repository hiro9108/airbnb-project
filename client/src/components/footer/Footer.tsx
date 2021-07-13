import React from "react";
import {
  getAllAbouts,
  getAllCommunities,
  getAllHosts,
  getAllSupports,
} from "./footer-data";
import FooterBar from "./FooterBar";

const Footer = () => {
  const abouts = getAllAbouts();
  const communities = getAllCommunities();
  const hosts = getAllHosts();
  const suppports = getAllSupports();

  return (
    <footer>
      <div className="grid grid-flow-row grid-cols-4 gap-4 mt-10">
        <div>
          <p className="f_link_title">ABOUT</p>
          {abouts.map((about, index) => {
            return (
              <div key={index} className="f_links">
                {about.title}
              </div>
            );
          })}
        </div>
        <div>
          <p className="f_link_title">COMMUNITY</p>
          {communities.map((community, index) => {
            return (
              <div key={index} className="f_links">
                {community.title}
              </div>
            );
          })}
        </div>
        <div>
          <p className="f_link_title">HOST</p>
          {hosts.map((host, index) => {
            return (
              <div key={index} className="f_links">
                {host.title}
              </div>
            );
          })}
        </div>
        <div>
          <p className="f_link_title">SUPPORT</p>
          {suppports.map((support, index) => {
            return (
              <div key={index} className="f_links">
                {support.title}
              </div>
            );
          })}
        </div>
      </div>
      <FooterBar />
    </footer>
  );
};

export default Footer;
