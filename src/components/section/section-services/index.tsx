import Image from "next/image";
import notbook from "../../../assets/MacBook Pro.svg";
import table from "../../../../src/assets/Imagem.svg";
import mobile from "../../../../src/assets/mobile-desktop.svg";
import styles from "./styles.module.scss";

const SectionServices = () => {
    return (
        <section className={styles.container__sectionServices}>
            <ul>
                <li className={styles["list--notbook"]}>
                    <Image priority src={notbook} alt="notbook" />
                    <div>
                        <h2>Criação e atualização de sites</h2>
                        <p>
                            Diversos modelos de sites personalizados que
                            garantem uma presença online profissional e eficaz
                            para o seu negócio.
                        </p>
                        <button>
                            <span>Construa seu site</span>
                        </button>
                    </div>
                </li>

                <li className={styles["list--table"]}>
                    <Image
                        className={styles["img-mobile"]}
                        priority
                        src={table}
                        alt="table"
                    />
                    <div>
                        <h2>Criação de lojas virtuais</h2>
                        <p>
                            Trazemos sua loja física para o virtual para
                            impulsionar suas vendas e facilitar o dia a dia do
                            seu negócio.
                        </p>
                        <button>
                            <span>Crie sua loja virtual</span>
                        </button>
                    </div>
                    <Image
                        className={styles["img-desktop"]}
                        priority
                        src={table}
                        alt="table"
                    />
                </li>

                <li className={styles["list--mobile"]}>
                    <Image priority src={mobile} alt="mobile" />
                    <div>
                        <h2>Desenvolvimento de Software personalizado</h2>
                        <p>
                            Criamos o software que você necessita de forma
                            personalizada para as suas necessidades.
                        </p>
                        <button>
                            <span>Solicitar software personalizado</span>
                        </button>
                    </div>
                </li>
            </ul>
        </section>
    );
};

export default SectionServices;
