// Importações necessárias
import api from "../../api"; // Módulo para fazer requisições HTTP para a API
import { toast } from 'react-toastify'; // Biblioteca para exibir mensagens de notificação
import styles from "./Editar.module.css"; // Estilos específicos para este componente
import { useParams } from "react-router-dom"; // Hook para obter parâmetros da URL
import logo from "../../utils/assets/logo.svg"; // Logo da aplicação
import { useNavigate } from "react-router-dom"; // Hook para realizar navegação programática
import transformarData from "../../utils/globals"; // Função para transformar a data
import React, { useState, useEffect } from "react"; // Importando o React e seus hooks
import NavBar from "../../components/navbar/NavBar"; // Componente de barra de navegação
import imgPessoaOuvindoMusica from "../../utils/assets/pessoa-ouvindo-musica.svg"; // Imagem ilustrativa

// Definição do componente Editar como uma função
function Editar() {
    // Hooks para navegação e obtenção de parâmetros da URL
    const navigate = useNavigate();
    const { idCard } = useParams();
    
    // Hooks de estado para os campos do formulário
    const [nomeMusica, setNomeMusica] = useState("");
    const [genero, setGenero] = useState("");
    const [artista, setArtista] = useState("");
    const [imagem, setImagem] = useState("");
    const [ano, setAno] = useState("");
    
    // Efeito para carregar os detalhes da música ao montar o componente
    useEffect(() => {
        api.get(`/${idCard}`).then((response) => {
            const { data } = response;
            const { nomeMusica, artista, genero, ano, imagem } = data;
            setNomeMusica(nomeMusica);
            setArtista(artista);
            setGenero(genero);
            setAno(transformarData(ano));
            setImagem(imagem);
        }).catch((error) => {
            console.log("Erro ao buscar os detalhes da música: ", error);
        });
    }, [idCard]);
    
    // Função para lidar com mudanças nos campos do formulário
    const handleInputChange = (event, setStateFunction) => {
        setStateFunction(event.target.value);
    };
    
    // Função para salvar as alterações
    const handleSave = async () => {
        try {
            await api.put(`/${idCard}`, {
                ano,
                nomeMusica,
                artista,
                imagem,
                genero
            });
            toast.success('Dados editados com sucesso!');
            navigate("/musicas");
        } catch (error) {
            toast.error('Ocorreu um erro ao salvar os dados. Por favor, tente novamente.');
        }
    };
    
    // Função para cancelar a edição
    const handleCancel = () => {
        navigate("/musicas");
    };
    
    // Renderização do componente
    return (
        <>
            {/* Barra de navegação */}
            <NavBar logoInicio={logo} />
            {/* Conteúdo da página */}
            <div className={styles.container}>
                {/* Seção esquerda com imagem ilustrativa */}
                <div className={styles["secao-esquerda-editar"]}>
                    <img src={imgPessoaOuvindoMusica} alt="Imagem de uma pessoa ouvindo música" />
                </div>
                {/* Seção direita com formulário de edição */}
                <div className={styles["secao-direita-editar"]}>
                    <form>
                        <h1>Editar</h1>
                        {/* Campos de input para os detalhes da música */}
                        <input
                            type="text"
                            value={nomeMusica}
                            placeholder="Nome da música"
                            onChange={(e) => handleInputChange(e, setNomeMusica)}
                        />
                        <input
                            type="text"
                            value={artista}
                            placeholder="Artista"
                            onChange={(e) => handleInputChange(e, setArtista)}
                        />
                        <input
                            type="text"
                            value={genero}
                            placeholder="Gênero"
                            onChange={(e) => handleInputChange(e, setGenero)}
                        />
                        <input
                            type="text"
                            value={ano}
                            placeholder="Ano de Lançamento"
                            onChange={(e) => handleInputChange(e, setAno)}
                        />
                        <input
                            type="text"
                            value={imagem}
                            placeholder="URL da Imagem"
                            onChange={(e) => handleInputChange(e, setImagem)}
                        />
                        {/* Botões para salvar e cancelar a edição */}
                        <div className={styles["buttons-container-editar"]}>
                            <button type="button" onClick={handleSave}>
                                Salvar
                            </button>
                            <button type="button" onClick={handleCancel}>
                                Cancelar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

// Exportação do componente Editar
export default Editar;