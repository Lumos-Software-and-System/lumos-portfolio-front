import { iService } from "@/interfaces/servicesData.interface";

const servicesData: Array<iService> = [
    {
        id: 1,
        image: "/MacBook Pro.svg",
        title: "Criação e atualização de sites",
        description:
            "Diversos modelos de sites personalizados que garantem uma presença online profissional e eficaz para o seu negócio.",
        buttonText: "Construa seu site",
    },
    {
        id: 2,
        image: "/Imagem.svg",
        title: "Criação de lojas virtuais",
        description:
            "Trazemos sua loja física para o virtual para impulsionar suas vendas e facilitar o dia a dia do seu negócio.",
        buttonText: "Crie sua loja virtual",
    },
    {
        id: 3,
        image: "/mobile-desktop.svg",
        title: "Desenvolvimento de Software personalizado",
        description:
            "Criamos o software que você necessita de forma personalizada para as suas necessidades.",
        buttonText: "Solicitar software personalizado",
    },
];

export default servicesData;
