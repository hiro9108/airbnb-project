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
  const description: string = "Airbon home page";
  const title = "Airbnb home page";

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
