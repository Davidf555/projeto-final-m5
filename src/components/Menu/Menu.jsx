
import styles from "./Menu.module.css";
import { Leaf } from "lucide-react";

export default function Menu() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Leaf size={28} className={styles.icon} />
        <h1>Eco Conexão</h1>
      </div>

      <nav className={styles.nav}>
        <ul>
          <li><a href="#inicio">Início</a></li>
          <li><a href="#casos">Casos de Energia</a></li>
          <li><a href="#ongs">ONGs de Energia</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}
