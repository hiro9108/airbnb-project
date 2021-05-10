import Head from "next/head";
import Image from "next/image";
import Hotel from "../components/home/Hotel";
import Search from "../components/home/Search";
import Layout from "../components/layout";
import Navbar from "../components/navbar/navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  const description: string = "Airbon home page";
  const title = "Airbnb home page";

  return (
    <Layout description={description} title={title}>
      <Search />
      <Hotel />
    </Layout>
  );
}
