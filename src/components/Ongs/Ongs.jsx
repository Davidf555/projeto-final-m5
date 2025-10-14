import React, { useEffect, useState } from "react";
import styles from "./Ongs.module.css";

export default function Ongs() {
    const [ongs, setOngs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("https://projeto-final-m4-3knm.onrender.com/ongs/listar-ongs");
                const data = await response.json();
                setOngs(data);
            } catch (error) {
                console.error("Erro ao buscar os dados:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    if (loading) {
        return (
            <div className={styles.loadingContainer}>
                <div className={styles.spinner}></div>
                <p className={styles.loadingText}>Carregando...</p>
            </div>
        );
    }


    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                {ongs.map((ong) => (
                    <div key={ong.id} className={styles.card}>
                        <h2 className={styles.highlight}>{ong.nome}</h2>
                        <p>{ong.descricao}</p>
                        <a href={ong.site} target="_blank" rel="noreferrer">
                            {ong.site}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}