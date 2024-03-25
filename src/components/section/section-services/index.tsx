import servicesData from "@/data/services";
import Image from "next/image";
import styles from "./styles.module.scss";

const SectionServices = () => {
    return (
        <section className={styles.servicesContainer}>
            <ul className={styles.listService}>
                {servicesData.map((service) => (
                    <li
                        key={service.id}
                        className={
                            service.id % 2 !== 0
                                ? styles.normalStyle
                                : styles.invertedStyle
                        }
                    >
                        <figure className={styles.figure}>
                            <Image
                                priority={true}
                                fill={true}
                                src={service.image}
                                alt={`Mockup que remete ao serviço de ${service.title}`}
                                className={styles.imageMockup}
                            />
                        </figure>
                        <div>
                            <h2>{service.title}</h2>
                            <p>{service.description}</p>
                            <button>
                                <span>{service.buttonText}</span>
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default SectionServices;
