import benefitsData from "@/data/benefits";
import Image from "next/image";
import styles from "./styles.module.scss";

const SectionBenefits = () => {
  return (
    <section className={styles.benefitsContainer}>
      <h2>Benefícios Lumos</h2>
      <ul className={styles.listBenefits}>
        {benefitsData.map((benefit, index) => (
          <li key={index}>
            <Image
              priority={true}
              alt={`Imagem que remete ao benefício ${benefit.title} `}
              src={benefit.image}
              width={60}
              height={60}
            />
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </li>
        ))}
      </ul>
      <button>Garantir meus benefícios</button>
    </section>
  );
};
export default SectionBenefits;
