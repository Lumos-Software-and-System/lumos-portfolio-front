import Image from "next/image";
import instagram from "../../../src/assets/Instagram.svg";
import wpp from "../../../src/assets/WhatsApp.svg";
import linkedin from "../../../src/assets/Linkedin.svg";

import styles from "./styles.module.scss";

const SocialMedias = () => {
    return (
        <div className={styles.socialContainer}>
            <button>
                <Image src={instagram} alt="instagram" />
            </button>
            <button>
                <Image src={wpp} alt="wpp" />
            </button>
            <button>
                <Image src={linkedin} alt="linkedin" />
            </button>
        </div>
    );
};

export default SocialMedias;
