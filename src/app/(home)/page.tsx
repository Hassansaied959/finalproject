import CollegeGoals from "./components/CollegeGoals";
import Contact from "./components/Contact";
import ElectronicServices from "./components/ElectronicServices";
import Galaries from "./components/Galaries";
import ImportantLinks from "./components/ImportantLinks";
import Landing from "./components/Landing";
import LatestNewsEvents from "./components/LatestNewsEvents";

export default function Home() {
  return (
    <div className="">
      <Landing />
      <CollegeGoals />
      <LatestNewsEvents />
      <ElectronicServices />
      <Galaries />
      <Contact />
      <ImportantLinks />
    </div>
  );
}
