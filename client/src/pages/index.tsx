import Link from "next/link";

import Hotel from "../components/home/Hotel";
import Search from "../components/home/Search";
import Layout from "../components/layout";
import { HOTEL_DATA } from "./post/hotelData";

export default function Home() {
  const description: string = "Airbon home page";
  const title = "Airbnb home page";

  return (
    <Layout description={description} title={title}>
      <Search />
      <Link href="/booking">
        <Hotel data={HOTEL_DATA} />
      </Link>
    </Layout>
  );
}
