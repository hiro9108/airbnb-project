import React from "react";
import Head from "next/head";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
// import { metaProps } from "../../src/types";

type metaProps = {
  description: string;
  title: string;
};

const Layout: React.FC<metaProps> = ({ description, title, children }) => {
  return (
    <div>
      <Head>
        <meta name="description" content={description} />
        <meta name="og:title" content={title} />
        <title>{title}</title>
      </Head>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
