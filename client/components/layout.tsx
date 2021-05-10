import React from "react";
import Head from "next/head";
import Navbar from "./navbar/navbar";

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
        <Navbar />
      </Head>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
