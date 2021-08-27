import Link from "next/link";
import Hosting from "../components/home/hosting/Hosting";
import Discover from "../components/home/discover/Discover";
import Explore from "../components/home/explore/Explore";
import Hero from "../components/home/hero/Hero";
import Inspire from "../components/home/inspire/Inspire";
import Live from "../components/home/live/Live";

import Layout from "../components/layout";
import Gateway from "../components/home/gateway/Gateway";

export default function Home() {
  const description =
    "An airbnb clone application. We made this to study new technologies such as GraphQL, Appllo Client, and AWS database.";
  const title = "Airbnb - Home";

  return (
    <Layout description={description} title={title}>
      <Hero />
      <Explore />
      <Live />
      <Inspire />
      <Discover />
      <Hosting />
      <Gateway />
    </Layout>
  );
}
