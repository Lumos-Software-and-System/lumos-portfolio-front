import SocialMedias from "../social-medias";
import styles from "./styles.module.scss";

const Footer = () => {
    return (
        <footer className={styles.container__footer}>
            <h2>Logo</h2>
            <div>
                <SocialMedias />
                <span>© 2024 Lumos Software and System.</span>
            </div>
        </footer>
    );
};

export default Footer;
