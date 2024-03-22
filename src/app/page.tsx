import Header from "@/components/headers";
import SectionBenefits from "@/components/section/section-benefits";
import SectionServices from "@/components/section/section-services";
import SectionWorks from "@/components/section/section-works";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <SectionWorks />
        <SectionServices />
        <SectionBenefits />
      </main>
    </>
  );
};

export default Home;
