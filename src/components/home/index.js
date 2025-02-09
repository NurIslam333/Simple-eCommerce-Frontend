import Banner from "./banner";
import BestDeals from "./best-deals";
import Category from "./category";
import NewArrival from "./new-arrival";

export default function HomePage() {
  return (
    <>
      <Banner />
      <Category />
      <NewArrival />
      <BestDeals />
    </>
  );
}
