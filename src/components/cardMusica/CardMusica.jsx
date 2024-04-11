// Importa React da biblioteca react
import React from "react";
// Importa os estilos específicos deste componente
import styles from "./CardMusica.module.css";
// Importa uma imagem padrão para ser usada caso nenhuma imagem específica seja fornecida
import capaImg from "../../utils/assets/capa.png";

// Define o componente CardMusica como uma função que recebe propriedades
const CardMusica = ({
    genero, artista, nomeMusica, anoLancamento, imagemSrc,
}) => {
    return (
        // Contêiner principal do cartão
        <div className={styles["card-musica"]}>
            {/* Contêiner para a imagem */}
            <div className={styles["imagem-container"]}>
                {/* Exibe a imagem da música; usa imagemSrc se fornecido, caso contrário usa capaImg */}
                <img src={imagemSrc ? imagemSrc : capaImg} alt="Imagem"
                    className={styles["imagem"]} />
            </div>
            {/* Contêiner para os textos */}
            <div className={styles["textos"]}>
                {/* Exibe o nome da música; se não fornecido, mostra "N/A" */}
                <h1>{nomeMusica || "N/A"}</h1>
                {/* Exibe o artista da música; se não fornecido, mostra "N/A" */}
                <p><span>Artista:</span> {artista || "N/A"} </p>
                {/* Exibe o gênero da música; se não fornecido, mostra "N/A" */}
                <p><span>Gênero</span>: {genero || "N/A"} </p>
                {/* Exibe o ano de lançamento da música; se não fornecido, mostra "N/A" */}
                <p><span>Ano de Lançamento</span>: {anoLancamento || "N/A"} </p>
            </div>
            {/* Contêiner para os botões */}
            <div className={styles["botoes"]}>
                {/* Botão para editar as informações da música */}
                <button className={styles["botao"]}>Editar</button>
                {/* Botão para excluir a música */}
                <button className={styles["botao"]}>Excluir</button>
            </div>
        </div>
    );
};
// Exporta o componente para que possa ser usado em outras partes da aplicação
export default CardMusica;