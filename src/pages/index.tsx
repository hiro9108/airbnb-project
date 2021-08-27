import Link from "next/link";
import Hosting from "../components/home/hosting/Hosting";
import Discover from "../components/home/discover/Discover";
import Explore from "../components/home/explore/Explore";
import Hero from "../components/home/hero/Hero";
import Inspire from "../components/home/inspire/Inspire";
import Live from "../components/home/live/Live";

import Layout from "../components/layout";
import Gateway from "../components/home/gateway/Gateway";

import { useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_ALL_USER, CREATE_USER } from "../pages/api/apollo-user-data";

import { useSession } from "next-auth/client";

export default function Home() {
  const description =
    "An airbnb clone application. We made this to study new technologies such as GraphQL, Appllo Client, and AWS database.";
  const title = "Airbnb - Home";

  const [session, sessionLoading] = useSession();

  const response = useQuery(GET_ALL_USER);
  const [createUser, { data, loading, error }] = useMutation(CREATE_USER);

  useEffect(() => {
    if (!session) return;

    if (response.data) {
      for (const item of response.data.listHotelUserTables.items) {
        if (item.userId === session.sub) return;
      }
      createUser({ variables: { userId: session.sub } });
    }
  }, [session, response]);

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
