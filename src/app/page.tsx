import Header from "@/components/headers";
import SectionServices from "@/components/section/section-services";
import SectionWorks from "@/components/section/section-works";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <SectionWorks />
        <SectionServices />
      </main>
    </>
  );
};

export default Home;
