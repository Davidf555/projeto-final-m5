import React from 'react';
import styles from "./Footer.module.css";

export default function Footer(){
    return (
        <footer className={styles.footer}>
            <div className={styles.overlay}>
                <div className={styles.contactSection}>
                    <h3>Encontre nosso projeto:</h3>
                    <div className={styles.socialIcons}>
                        <a href="https://github.com/Davidf555/projeto-final-m5" className={styles.socialLink} aria-label="GitHub">💻</a>
                    </div>
                    <div className={styles.footerContent}>
                        <ul>
                            <p>Davi Flavio Oliveira</p>
                            <p>Geovana Morais Pinheiro Souza</p>
                            <p>Iasmhim Vilaça Ribeiro</p>
                            <p>Letícia Geralda Conceição Ferreira</p>
                            <p>Jaqueline Abreu Silva Lima</p>
                            <p>Ana Clara de Jesus Silva</p>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};