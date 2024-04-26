import posterImg from "../../assets/img.jpg"
import styles from "./styles.module.css"

export default function Card() {
    return (
        <div className={styles.container}>
            <img className={styles.poster} src={posterImg} alt="Poster Star Wars (1997)"/>
        
            <div>
                <h2 className={styles.title}>Pôster Filme Star Wars</h2>
                <p className={styles.description}>Em Star Wars - Episódio IV, o jovem Luke Skywalker (Mark Hamill) sonha ir para a Academia como seus amigos, mas se vê envolvido em uma guerra intergalática quando seu tio compra dois robôs e com eles encontra uma mensagem da princesa Leia Organa (Carrie Fisher) para o Jedi Obi-Wan Kenobi (Alec Guinness) sobre os planos da construção da Estrela da Morte, uma gigantesca estação espacial com capacidade para destruir um planeta. Luke então se junta aos cavaleiros Jedi e a Han Solo (Harrison Ford), um mercenário, para tentar destruir esta terrível ameaça ao lado dos membros da resistência.</p>
                <button className={styles.button}>Compre Agora</button>
            </div>
        </div>
    )
}