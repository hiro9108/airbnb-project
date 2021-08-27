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
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#fff" />
        <meta name="description" content={description} />
        <meta name="og:title" content={title} />
        <meta
          name="keywords"
          content="airbnb, clone, booking, trip, travel, hotel, house, activity, local"
        />
        <meta name="author" content="Hiroshi Egawa, Miyu Setoyama" />
        <title>{title}</title>
      </Head>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
