import { BiMenuAltRight } from "react-icons/bi";
import Link from "next/link";

import styles from "./styles.module.scss";

const Header = () => {
    return (
        <header className={styles.header}>
            <figure>logo</figure>

            <BiMenuAltRight className={styles.menuButton} />
            <nav className={styles.navDesktop}>
                <ul>
                    <li>
                        <Link href={"#home"}>Home</Link>
                    </li>
                    <li>
                        <Link href={"#servicos"}>Serviços</Link>
                    </li>
                    <li>
                        <Link href={"#beneficios"}>Benefícios</Link>
                    </li>
                    <li>
                        <Link href={"#novidades"}>Novidades</Link>
                    </li>
                    <li>
                        <Link href={"#contato"}>Contato</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
