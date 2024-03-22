import Header from "@/components/headers";
import SectionBenefits from "@/components/section/section-benefits";
import SectionWorks from "@/components/section/section-works";

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <SectionWorks />
                <SectionBenefits />
            </main>
        </>
    );
};

export default Home;
