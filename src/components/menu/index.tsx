"use client";

import useMenu from "@/hooks/useMenu.hook";
import { IoMdClose } from "react-icons/io";

import Link from "next/link";

import styles from "./styles.module.scss";

const Menu = () => {
    const { handleMenu } = useMenu();

    const closeBtnProps = {
        size: 40,
        color: "#fff",
    };

    return (
        <section className={styles.menuContainer}>
            <div className={styles.menuContent}>
                <button onClick={handleMenu}>
                    <IoMdClose {...closeBtnProps} />
                </button>
                <nav className={styles.navMobile}>
                    <ul>
                        <li>
                            <Link href={"#home"} onClick={handleMenu}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href={"#servicos"} onClick={handleMenu}>
                                Serviços
                            </Link>
                        </li>
                        <li>
                            <Link href={"#beneficios"} onClick={handleMenu}>
                                Benefícios
                            </Link>
                        </li>
                        <li>
                            <Link href={"#novidades"} onClick={handleMenu}>
                                Novidades
                            </Link>
                        </li>
                        <li>
                            <Link href={"#contato"} onClick={handleMenu}>
                                Contato
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={styles.menuBg} onClick={handleMenu}></div>
        </section>
    );
};

export default Menu;
