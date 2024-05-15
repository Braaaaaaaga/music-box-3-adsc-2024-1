import React from "react";
import styles from "./CardMusica.module.css"; // Aqui importamos estilos CSS para o nosso componente
import transformarData from "../../utils/globals"; // Função para transformar a data
import capaImg from "../../utils/assets/capa.png"; // Imagem padrão caso não tenha uma definida

/// Componente responsável por renderizar um cartão de música
const CardMusica = ({
    genero, // Gênero da música
    artista, // Artista responsável
    nomeMusica, // Nome da música
    anoLancamento, // Ano em que foi lançada
    imagemSrc, // Fonte da imagem da música
    onClickBotaoDireita, // Função chamada quando o botão direito é clicado
    onClickBotaoEsquerda // Função chamada quando o botão esquerdo é clicado
}) => {
    return (
        <div className={styles["card-musica"]}> {/* O próprio cartão de música */}
            {/* Seção da imagem */}
            <div className={styles["imagem-container"]}>
                <img src={imagemSrc ? imagemSrc : capaImg} alt="Imagem"
                    className={styles["imagem"]} />
            </div>
            {/* Seção dos textos */}
            <div className={styles["textos"]}>
                <h1>{nomeMusica || "N/A"}</h1>
                <p><span>Artista:</span> {artista || "N/A"} </p>
                <p><span>Gênero</span>: {genero || "N/A"} </p>
                <p><span>Ano de Lançamento</span>:
                    {transformarData(anoLancamento) || "N/A"} </p>
            </div>
            {/* Seção dos botões */}
            <div className={styles["botoes"]}>
                <button onClick={onClickBotaoEsquerda}
                    className={styles["botao"]}>Editar</button>
                <button onClick={onClickBotaoDireita}
                    className={styles["botao"]}>Excluir</button>
            </div>
        </div>
    );
};

export default CardMusica;