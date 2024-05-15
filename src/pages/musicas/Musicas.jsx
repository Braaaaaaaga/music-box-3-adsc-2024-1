// Importações necessárias
import api from "../../api"; // Módulo para fazer requisições HTTP para a API
import { toast } from 'react-toastify'; // Biblioteca para exibir mensagens de notificação
import styles from "./Musicas.module.css"; // Estilos específicos para este componente
import { useNavigate } from "react-router-dom"; // Hook para realizar navegação programática
import logo from "../../utils/assets/logo.svg"; // Logo da aplicação
import React, { useState, useEffect } from "react"; // Importando o React e seus hooks
import NavBar from "../../components/navbar/NavBar"; // Componente de barra de navegação
import CardMusica from "../../components/cardMusica/CardMusica"; // Componente de cartão de música

// Definição do componente Musicas como uma função
const Musicas = () => {
    // Hook para navegação
    const navigate = useNavigate();
    
    // Estado para armazenar os dados dos cartões de música
    const [cardsData, setCardsData] = useState();
    
    // Função para lidar com o clique no botão esquerdo (Editar)
    const handleBotaoEsquerda = (id) => {
        navigate(`/editar/${id}`);
    };
    
    // Função para lidar com o clique no botão direito (Excluir)
    const handleBotaoDireita = (id) => {
        toast.dismiss();
        api.delete(`/${id}`).then(() => {
            toast.success("Card de Música, deletado com sucesso!");
            recuperarValorDoCard();
        }).catch(() => {
            toast.error("Erro ao deletar, tente novamente!");
        });
    };
    
    // Função para recuperar os dados dos cartões de música da API
    function recuperarValorDoCard() {
        api.get().then((response) => {
            const { data } = response;
            setCardsData(data);
        }).catch(() => {
            toast.error("Erro ao recuperar os valores da API, tente novamente");
        });
    }
    
    // Efeito para carregar os dados dos cartões de música ao montar o componente
    useEffect(() => {
        recuperarValorDoCard();
    }, []);
    
    // Renderização do componente
    return (
        <>
            {/* Barra de navegação */}
            <NavBar logoInicio={logo} />
            {/* Conteúdo da página */}
            <div className={styles["content-musicas"]}>
                {/* Mapeamento dos dados dos cartões de música para renderização */}
                {cardsData && cardsData.map((data, index) => (
                    <div key={index} className={styles["quadrado"]}>
                        {/* Componente de cartão de música */}
                        <CardMusica
                            artista={data.artista}
                            nomeMusica={data.nomeMusica}
                            genero={data.genero}
                            anoLancamento={data.ano}
                            imagemSrc={data.imagem}
                            onClickBotaoEsquerda={() => handleBotaoEsquerda(data.id)}
                            onClickBotaoDireita={() => handleBotaoDireita(data.id)}
                        />
                    </div>
                ))}
            </div>
        </>
    );
};

// Exportação do componente Musicas
export default Musicas;