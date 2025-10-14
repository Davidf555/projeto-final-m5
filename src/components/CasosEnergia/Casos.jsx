import React, { useEffect, useState } from "react";
import styles from "./Casos.module.css";

export default function Ongs() {
  const [casos, setCasos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://projeto-final-m4-3knm.onrender.com/casos-energia/listar-energia");
        const data = await response.json();
        setCasos(data);
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
        {casos.map((caso) => (
          <div key={caso.id} className={styles.card}>
            <h2 className={styles.highlight}>{caso.caso}</h2>
            <p><strong>Local:</strong> {caso.local}</p>
            <p><strong>Descrição:</strong> {caso.descricao}</p>
            <p><strong>Impacto:</strong> {caso.impacto}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
