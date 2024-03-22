"use client";
import Footer from "@/components/footer";
import SubscribForm from "@/components/forms/subscrib-form";
import Header from "@/components/headers";
import Menu from "@/components/menu";
import SectionBenefits from "@/components/section/section-benefits";
import SectionServices from "@/components/section/section-services";
import SectionWorks from "@/components/section/section-works";
import useMenu from "@/hooks/useMenu.hook";

const Home = () => {
    const { menu } = useMenu();
    return (
        <>
            {menu && <Menu />}
            <Header />
            <main>
                <SectionWorks />
                <SectionServices />
                <SectionBenefits />
                <SubscribForm />
                <Footer />
            </main>
        </>
    );
};

export default Home;
