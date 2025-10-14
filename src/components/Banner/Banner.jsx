import styles from "./Banner.module.css";

export default function BannerCards() {
  const cards = [
    {
      titulo: "Energia Solar",
      descricao: "Energia limpa proveniente do sol, sustentável e inesgotável."
    },
    {
      titulo: "Energia Eólica",
      descricao: "Aproveita o vento para gerar eletricidade de forma sustentável."
    },
    {
      titulo: "Energia Hidrelétrica",
      descricao: "Usa a força da água para gerar energia de forma renovável."
    },
    {
      titulo: "Biomassa",
      descricao: "Transforma resíduos orgânicos em energia, reduzindo poluição."
    },
    {
      titulo: "Energia Geotérmica",
      descricao: "Aproveita o calor do interior da Terra para gerar energia."
    },
    {
      titulo: "Energia das Marés",
      descricao: "Gera eletricidade aproveitando a força das marés e correntes marítimas."
    }
  ];

  return (
    <section className={styles.banner}>
      <div className={styles.overlay}>
        <div className={styles.cardsContainer}>
          {cards.map((card, index) => (
            <div key={index} className={styles.card}>
              <h3>{card.titulo}</h3>
              <p>{card.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
