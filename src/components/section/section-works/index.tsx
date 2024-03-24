import Image from "next/image";
import vector from "../../../assets/Vector.svg";
import rectangle from "../../../assets/Rectangle55.svg";
import styles from "./styles.module.scss";

const SectionWorks = () => {
  return (
    <>
      <section className={styles.container__sectionWorks}>
        <div>
          <h1>
            Lumos construindo o caminho para o sucesso digital da sua marca.
          </h1>
          <p>
            Da criação de páginas simples até sistemas mais complexos,
            fornecemos serviços e trazemos seu negócio para o digital de forma
            personalizada!
          </p>
          <button>Entre em contato</button>
        </div>
        <Image
          className={styles["vector--img"]}
          priority
          src={vector}
          alt="background img"
        />
        <Image
          className={styles["rectangle--img"]}
          priority
          src={rectangle}
          alt="background img"
        />
      </section>
    </>
  );
};

export default SectionWorks;
