"use client";

import useMenu from "@/hooks/useMenu.hook";
import { BiMenuAltRight } from "react-icons/bi";
import Link from "next/link";
import Menu from "../menu";
import styles from "./styles.module.scss";

const Header = () => {
  const { handleMenu, menu } = useMenu();

  const menuProps = {
    size: 40,
  };

  return (
    <header className={styles.header}>
      {menu && <Menu />}
      <figure>logo</figure>
      <button onClick={handleMenu}>
        <BiMenuAltRight className={styles.menuButton} {...menuProps} />
      </button>
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
