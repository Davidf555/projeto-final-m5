import { useEffect, useState } from "react";
import styles from "./Ongs.module.css";

function Ongs() {
  const [ongs, setOngs] = useState([]);

  useEffect(() => {
    // colocar a API COM A rota
    fetch("")
      .then((response) => response.json())
      .then((data) => setClimates(data))
      .catch((error) => console.error("Erro ao buscar dados:", error));
  }, []);

  return (
    <main className={styles.main}>
      <h1>Dados sobre o clima Mundial</h1>
      <div className={styles.container}>
      {climates.length > 0 ? (
        climates.map((item) => (
          <div key={item.id} className={styles.card}>
            <h2 className={styles.title}>{item.nome}</h2>
            {/* mudar as chaves da API */}
            <p className={styles.description}>{item.descricao}</p>
            <p className={styles.year}>Ano: {item.ano}</p>
            <p className={styles.impact}>Impacto: {item.impacto}</p>
          </div>
        ))
      ) : (
        <p className={styles.loading}>Carregando dados climáticos...</p>
      )}
    </div>
    </main>
    
  );
}

export default Ongs;