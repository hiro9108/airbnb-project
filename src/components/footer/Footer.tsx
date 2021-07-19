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
      <div className="footer_lists">
        <div className="f_links_block">
          <p className="f_link_title">ABOUT</p>
          <div className="f_links_wrapper">
            {abouts.map((about, index) => {
              return (
                <div key={index} className="f_links">
                  {about.title}
                </div>
              );
            })}
          </div>
        </div>
        <div className="f_links_block">
          <p className="f_link_title">COMMUNITY</p>
          <div className="f_links_wrapper">
            {communities.map((community, index) => {
              return (
                <div key={index} className="f_links">
                  {community.title}
                </div>
              );
            })}
          </div>
        </div>
        <div className="f_links_block">
          <p className="f_link_title">HOST</p>
          <div className="f_links_wrapper">
            {hosts.map((host, index) => {
              return (
                <div key={index} className="f_links">
                  {host.title}
                </div>
              );
            })}
          </div>
        </div>
        <div className="f_links_block">
          <p className="f_link_title">SUPPORT</p>
          <div className="f_links_wrapper">
            {suppports.map((support, index) => {
              return (
                <div key={index} className="f_links">
                  {support.title}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <FooterBar />
    </footer>
  );
};

export default Footer;
