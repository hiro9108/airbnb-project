import React from "react";
import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";

const Item: React.FC<{ url: string; title: string }> = ({ url, title }) => (
  <li className="m-4">
    <Link href={url}>{title}</Link>
  </li>
);

const SandboxPage: NextPage<{ links: string[] }> = ({ links }) => (
  <>
    <ul className="flex flex-wrap justify-center items-center h-screen">
      {links.map((link) => (
        <Item key={link} url={`/sandbox/${link}.sand`} title={link} />
      ))}
    </ul>
  </>
);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const fs = require("fs");
  const dir = "./src/pages/sandbox";
  const files = fs.readdirSync(dir);
  const links = files
    .filter((file) => /\.sand\.tsx$/.test(file))
    .map((file) => `${file.replace(/\.sand\.tsx$/, "")}`);
  return {
    props: {
      links,
    },
  };
};

export default SandboxPage;
