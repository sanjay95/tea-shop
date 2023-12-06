import Collections from "./components/Collections/Collections";
import FirstSection from "./components/FirstSection/FirstSection";
import LastBlog from "./components/LastBlog/LastBlog";
import OptionsInfo from "./components/OptionsInfo/OptionsInfo";
import WholeSalers from "./components/WholeSalers/WholeSalers";

export default function Home() {
  return (
    <div>
      <FirstSection />
      <OptionsInfo />
      <Collections />
      <LastBlog />
      <WholeSalers />
    </div>
  );
}
