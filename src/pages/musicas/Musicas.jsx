// Importa as dependências necessárias, incluindo React, estilos específicos, componentes e a imagem do logotipo.
import api from "../../api"; // Importa a instância da API para fazer chamadas HTTP
import styles from "./Musicas.module.css"; // Importa o arquivo de estilos CSS para este componente
import logo from "../../utils/assets/logo.svg"; // Importa o logotipo a ser usado na NavBar
import React, { useState, useEffect } from "react"; // Importa React, useState e useEffect de 'react'
import NavBar from "../../components/navbar/NavBar"; // Importa o componente NavBar
import CardMusica from "../../components/cardMusica/CardMusica"; // Importa o componente CardMusica

// Define o componente funcional Musicas
const Musicas = () => {
    // Utiliza useState para gerenciar o estado dos dados dos cartões de música
    const [cardsData, setCardsData] = useState();

    // Função para recuperar os dados dos cartões de música da API
    function recuperarValorDoCard() {
        api.get().then((response) => {
            const { data } = response; // Extrai os dados da resposta da API
            console.log(response) // Exibe a resposta no console para depuração
            setCardsData(data) // Atualiza o estado com os dados recebidos
        }).catch(() => {
            console.log("Deu erro, tente novamente!") // Caso haja um erro na requisição, exibe uma mensagem no console
        })
    }

    /*
    EXEMPLO DE POST 
        const novaMusica = {
        nomeMusica: "Nova Música",
        artista: "Novo Artista",
        genero: "Novo Gênero",
        ano: "2024-01-01T00:00:00.000Z",
        imagem: "https://exemplo.com/nova-imagem.jpg"
    };

    api.post('/caminhoParaMusica', novaMusica)
        .then((response) => {
            console.log('Música adicionada com sucesso', response.data);
            // Atualizar a UI aqui, se necessário
        })
        .catch((erro) => {
            console.error('Erro ao adicionar música', erro);
        });

    EXEMPLO DE PUT
    function atualizarMusica() {
    const musicaAtualizada = {
        nomeMusica: "Música Atualizada",
        artista: "Artista Atualizado",
        genero: "Gênero Atualizado",
        ano: "2024-01-02T00:00:00.000Z",
        imagem: "https://exemplo.com/imagem-atualizada.jpg"
    };

    const musicaId = "1"; // ID da música a ser atualizada

    api.put(`/caminhoParaMusica/${musicaId}`, musicaAtualizada)
        .then((response) => {
            console.log('Música atualizada com sucesso', response.data);
            // Atualizar a UI aqui, se necessário
        })
        .catch((erro) => {
            console.error('Erro ao atualizar música', erro);
        });
    }

    EXEMPLO DE DELETE
    function deletarMusica() {
    const musicaId = "1"; // ID da música a ser deletada

    api.delete(`/caminhoParaMusica/${musicaId}`)
        .then((response) => {
            console.log('Música deletada com sucesso', response.data);
            // Atualizar a UI aqui, se necessário
        })
        .catch((erro) => {
            console.error('Erro ao deletar música', erro);
        });
    }

    */

    // useEffect para chamar a função recuperarValorDoCard() quando o componente é montado
    useEffect(() => {
        recuperarValorDoCard();
    }, []) // O array vazio como segundo argumento significa que o efeito será executado apenas uma vez, após a montagem inicial do componente

    // Renderiza o componente
    return (
        // Fragmento React para agrupar os elementos retornados
        <>
            {/* Renderiza o componente NavBar, passando o logo como propriedade */}
            <NavBar logoInicio={logo} />
            {/* Contêiner para os cartões de música */}
            <div className={styles["content-musicas"]}>
                {/* Checa se cardsData possui dados e então mapeia cada objeto de dados para um componente CardMusica */}
                {cardsData && cardsData.map((data, index) => (
                    <div key={index} className={styles["quadrado"]}>
                        <CardMusica
                            artista={data.artista}
                            nomeMusica={data.nomeMusica}
                            genero={data.genero}
                            anoLancamento={data.ano}
                            imagemSrc={data.imagem}
                        />
                    </div>
                ))}
            </div>
        </>
    );
};
// Exporta o componente Musicas para uso em outras partes da aplicação
export default Musicas;